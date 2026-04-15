"use server";

import { headers } from "next/headers";
import { packages } from "@/data/catalog";
import {
  INQUIRY_ADDRESS_MAX_LENGTH,
  INQUIRY_NOTES_MAX_LENGTH,
} from "@/data/book-inquiry-limits";
import { partyTypeOptions } from "@/data/book-inquiry";
import { bookPageContent } from "@/data/book-page";
import { validatePartyDateInput } from "@/lib/booking/validate-party-date";
import { getBookingEmailConfig } from "@/lib/email/booking-env";
import {
  sendPartyInquiryEmails,
  type PartyInquiryPayload,
} from "@/lib/email/send-party-inquiry";
import { isBookingHoneypotTripped } from "@/lib/booking/inquiry-guards";
import { checkBookingInquiryRateLimit } from "@/lib/booking/rate-limit";

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Extra line for validation errors (keeps headline short). */
  errorDetail?: string;
  successNote?: string;
  successBullets?: string[];
  fieldErrors?: Record<string, string>;
};

const allowedPartyTypes = new Set<string>(
  partyTypeOptions.map((option) => option.value),
);
const allowedPackageSlugs = new Set<string>(
  packages.map((pkg) => pkg.slug),
);

function readTrimmed(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function phoneHasMinDigits(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10;
}

function buildPayload(
  formData: FormData,
  partyType: string,
  packageSlug: string,
): PartyInquiryPayload {
  const partyTypeLabel =
    partyTypeOptions.find((option) => option.value === partyType)?.label ??
    partyType;
  const pkg = packages.find((p) => p.slug === packageSlug);
  const packageLabel = pkg ? `${pkg.name} (${pkg.duration})` : packageSlug;

  return {
    parentName: readTrimmed(formData, "parentName"),
    phone: readTrimmed(formData, "phone"),
    email: readTrimmed(formData, "email"),
    partyType,
    partyTypeLabel,
    packageSlug,
    packageLabel,
    preferredCharacter: readTrimmed(formData, "preferredCharacter"),
    partyDate: readTrimmed(formData, "partyDate"),
    startTime: readTrimmed(formData, "startTime"),
    childAge: readTrimmed(formData, "childAge"),
    address: readTrimmed(formData, "address"),
    notes: readTrimmed(formData, "notes"),
  };
}

export async function submitPartyInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const { form } = bookPageContent;

  if (isBookingHoneypotTripped(formData)) {
    return {
      status: "error",
      message: form.submissionNotAccepted,
    };
  }

  const headerList = await headers();
  const rate = await checkBookingInquiryRateLimit(headerList);
  if (!rate.ok) {
    return {
      status: "error",
      message: form.submissionNotAccepted,
    };
  }

  const fieldErrors: Record<string, string> = {};
  const v = form.validation;

  const parentName = readTrimmed(formData, "parentName");
  if (!parentName) fieldErrors.parentName = v.parentName;

  const phone = readTrimmed(formData, "phone");
  if (!phone) fieldErrors.phone = v.phoneRequired;
  else if (!phoneHasMinDigits(phone)) {
    fieldErrors.phone = v.phoneDigits;
  }

  const email = readTrimmed(formData, "email");
  if (!email) fieldErrors.email = v.emailRequired;
  else if (!isValidEmail(email)) fieldErrors.email = v.emailInvalid;

  const partyType = readTrimmed(formData, "partyType");
  if (!partyType || !allowedPartyTypes.has(partyType)) {
    fieldErrors.partyType = v.partyType;
  }

  const packageSlug = readTrimmed(formData, "packageSlug");
  if (!packageSlug || !allowedPackageSlugs.has(packageSlug)) {
    fieldErrors.packageSlug = v.packageSlug;
  }

  const preferredCharacter = readTrimmed(formData, "preferredCharacter");
  if (!preferredCharacter) fieldErrors.preferredCharacter = v.preferredCharacter;

  const partyDate = readTrimmed(formData, "partyDate");
  if (!partyDate) {
    fieldErrors.partyDate = v.partyDate;
  } else {
    const partyDateCheck = validatePartyDateInput(partyDate, {
      invalid: v.partyDateInvalid,
      past: v.partyDatePast,
    });
    if (!partyDateCheck.ok) {
      fieldErrors.partyDate = partyDateCheck.message;
    }
  }

  const startTime = readTrimmed(formData, "startTime");
  if (!startTime) fieldErrors.startTime = v.startTime;

  const childAge = readTrimmed(formData, "childAge");
  if (!childAge) fieldErrors.childAge = v.childAge;

  const address = readTrimmed(formData, "address");
  if (!address) {
    fieldErrors.address = v.address;
  } else if (address.length > INQUIRY_ADDRESS_MAX_LENGTH) {
    fieldErrors.address = v.addressTooLong;
  }

  const notes = readTrimmed(formData, "notes");
  if (notes.length > INQUIRY_NOTES_MAX_LENGTH) {
    fieldErrors.notes = v.notesTooLong;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: form.errorSummary,
      errorDetail: form.errorSummaryLead,
      fieldErrors,
    };
  }

  const config = getBookingEmailConfig();
  if (!config.ok) {
    return {
      status: "error",
      message: config.userMessage,
    };
  }

  const payload = buildPayload(formData, partyType, packageSlug);
  const sendResult = await sendPartyInquiryEmails(config, payload);

  if (!sendResult.ok) {
    return {
      status: "error",
      message: sendResult.userMessage ?? form.deliveryFailed,
    };
  }

  let successNote: string | undefined;
  if (config.sendParentConfirmation) {
    if (sendResult.parentConfirmationSent) {
      successNote = form.successWithParentEmail;
    } else if (sendResult.parentConfirmationError) {
      successNote = form.successParentEmailFailed;
    }
  }

  return {
    status: "success",
    message: form.successIntro,
    successNote,
    successBullets: [...form.successBullets],
  };
}
