import { Resend } from "resend";
import { escapeHtml } from "@/lib/email/escape-html";
import type { BookingEmailConfig } from "@/lib/email/booking-env";

export type PartyInquiryPayload = {
  parentName: string;
  phone: string;
  email: string;
  partyType: string;
  partyTypeLabel: string;
  packageSlug: string;
  packageLabel: string;
  preferredCharacter: string;
  partyDate: string;
  startTime: string;
  childAge: string;
  address: string;
  notes: string;
};

export type SendPartyInquiryResult =
  | { ok: true; parentConfirmationSent: boolean; parentConfirmationError?: string }
  | { ok: false; userMessage: string };

function buildAdminText(p: PartyInquiryPayload): string {
  const lines = [
    "Party inquiry (website form)",
    "────────────────────────────",
    `Parent / guardian: ${p.parentName}`,
    `Phone: ${p.phone}`,
    `Email: ${p.email}`,
    `Party type: ${p.partyTypeLabel} (${p.partyType})`,
    `Package: ${p.packageLabel} (${p.packageSlug})`,
    `Preferred character / rental: ${p.preferredCharacter}`,
    `Party date: ${p.partyDate}`,
    `Start time: ${p.startTime}`,
    `Child age: ${p.childAge}`,
    "",
    "Event address:",
    p.address,
    "",
    "Notes / special requests:",
    p.notes || "(none)",
    "",
    "Reply directly to this thread using the parent email as Reply-To.",
  ];
  return lines.join("\n");
}

function buildAdminHtml(p: PartyInquiryPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;font-weight:700;color:#2d1b45;width:200px">${escapeHtml(label)}</td><td style="padding:6px 0;color:#5f3b82">${escapeHtml(value)}</td></tr>`;

  return `<!DOCTYPE html><html><body style="font-family:Georgia,serif;background:#fffafc;color:#2d1b45;padding:24px">
  <h1 style="font-size:20px;margin:0 0 16px">Party inquiry</h1>
  <p style="margin:0 0 16px;color:#7b678f;font-size:14px">Submitted from the A Living Fairytale booking form.</p>
  <table style="border-collapse:collapse;width:100%;max-width:560px">${row("Parent / guardian", p.parentName)}${row("Phone", p.phone)}${row("Email", p.email)}${row("Party type", `${p.partyTypeLabel} (${p.partyType})`)}${row("Package", `${p.packageLabel} (${p.packageSlug})`)}${row("Preferred character / rental", p.preferredCharacter)}${row("Party date", p.partyDate)}${row("Start time", p.startTime)}${row("Child age", p.childAge)}</table>
  <h2 style="font-size:16px;margin:24px 0 8px">Event address</h2>
  <pre style="white-space:pre-wrap;font-family:inherit;background:#f6f1ff;padding:12px;border-radius:12px;border:1px solid rgba(97,62,129,0.12)">${escapeHtml(p.address)}</pre>
  <h2 style="font-size:16px;margin:24px 0 8px">Notes / special requests</h2>
  <pre style="white-space:pre-wrap;font-family:inherit;background:#f6f1ff;padding:12px;border-radius:12px;border:1px solid rgba(97,62,129,0.12)">${escapeHtml(p.notes || "(none)")}</pre>
  </body></html>`;
}

function buildParentHtml(p: PartyInquiryPayload): string {
  return `<!DOCTYPE html><html><body style="font-family:Georgia,serif;background:#fffafc;color:#2d1b45;padding:24px">
  <h1 style="font-size:20px;margin:0 0 12px">We received your inquiry</h1>
  <p style="margin:0 0 16px;line-height:1.7;color:#5f3b82">Thank you, ${escapeHtml(p.parentName)}. We have your party details and will follow up by email.</p>
  <p style="margin:0 0 8px;font-size:14px;color:#7b678f"><strong>Date requested:</strong> ${escapeHtml(p.partyDate)} · <strong>Start:</strong> ${escapeHtml(p.startTime)}</p>
  <p style="margin:0;font-size:14px;color:#7b678f">If anything looks wrong, reply to this message and tell us what to correct.</p>
  </body></html>`;
}

function buildParentText(p: PartyInquiryPayload): string {
  return [
    `Thank you, ${p.parentName}.`,
    "",
    "We received your party inquiry and will follow up by email.",
    "",
    `Date requested: ${p.partyDate}`,
    `Start time: ${p.startTime}`,
    "",
    "If anything looks wrong, reply to this message with corrections.",
  ].join("\n");
}

export async function sendPartyInquiryEmails(
  config: Extract<BookingEmailConfig, { ok: true }>,
  payload: PartyInquiryPayload,
): Promise<SendPartyInquiryResult> {
  const genericFailure =
    "We could not send your inquiry right now. Please try again in a few minutes, or email us directly with your party details.";

  try {
    const resend = new Resend(config.resendApiKey);
    const subject = `[Party inquiry] ${payload.partyDate} · ${payload.parentName}`;

    const admin = await resend.emails.send({
      from: config.from,
      to: config.adminTo,
      replyTo: payload.email,
      subject,
      text: buildAdminText(payload),
      html: buildAdminHtml(payload),
    });

    if (admin.error) {
      console.error("[booking] inquiry admin email failed", {
        resendError: admin.error.name,
        statusCode: admin.error.statusCode,
        message: admin.error.message,
      });
      return {
        ok: false,
        userMessage: genericFailure,
      };
    }

    let parentConfirmationSent = false;
    let parentConfirmationError: string | undefined;

    if (config.sendParentConfirmation) {
      const parent = await resend.emails.send({
        from: config.from,
        to: [payload.email],
        replyTo: config.adminTo[0],
        subject: "We received your party inquiry — A Living Fairytale",
        text: buildParentText(payload),
        html: buildParentHtml(payload),
      });

      if (parent.error) {
        parentConfirmationError = parent.error.message;
        console.error("[booking] inquiry parent confirmation failed", {
          resendError: parent.error.name,
          statusCode: parent.error.statusCode,
          message: parent.error.message,
        });
      } else {
        parentConfirmationSent = true;
      }
    }

    return {
      ok: true,
      parentConfirmationSent,
      parentConfirmationError,
    };
  } catch (err) {
    console.error("[booking] inquiry email send exception", {
      name: err instanceof Error ? err.name : "unknown",
      message: err instanceof Error ? err.message : String(err),
    });
    return { ok: false, userMessage: genericFailure };
  }
}
