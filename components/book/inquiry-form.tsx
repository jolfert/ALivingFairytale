"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useActionState } from "react";
import { submitPartyInquiry, type InquiryFormState } from "@/app/book/actions";
import {
  inquiryFormFields,
  partyTypeOptions,
} from "@/data/book-inquiry";
import { bookPageContent } from "@/data/book-page";
import { BOOKING_HONEYPOT_FIELD } from "@/lib/booking/inquiry-guards";

export type PackageChoice = {
  slug: string;
  name: string;
  duration: string;
};

type InquiryFormProps = {
  packageChoices: ReadonlyArray<PackageChoice>;
  onRequestNew?: () => void;
};

const initialState: InquiryFormState = { status: "idle" };

const fieldClassName =
  "w-full rounded-2xl border border-line bg-white/92 px-4 py-3 text-midnight shadow-sm outline-none transition focus:border-violet/35 focus:ring-2 focus:ring-violet/15";

const fieldErrorClassName = "text-sm font-semibold text-rose";

export function InquiryForm({
  packageChoices,
  onRequestNew,
}: InquiryFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitPartyInquiry,
    initialState,
  );

  const { form } = bookPageContent;

  const rows: ReactNode[] = [];
  let index = 0;
  while (index < inquiryFormFields.length) {
    const field = inquiryFormFields[index];
    const next = inquiryFormFields[index + 1];
    if (field.width === "half" && next?.width === "half") {
      rows.push(
        <div key={field.name} className="grid gap-5 sm:grid-cols-2">
          {renderField(field, state, packageChoices)}
          {renderField(next, state, packageChoices)}
        </div>,
      );
      index += 2;
    } else {
      rows.push(
        <div key={field.name}>{renderField(field, state, packageChoices)}</div>,
      );
      index += 1;
    }
  }

  if (state.status === "success") {
    return (
      <div className="glass-panel rounded-[2.25rem] p-6 sm:p-10">
        <div
          className="rounded-[1.75rem] border border-[rgba(65,181,111,0.35)] bg-[linear-gradient(165deg,rgba(255,255,255,0.98),rgba(236,252,244,0.98))] p-6 sm:p-8 shadow-magical"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,214,123,0.95),rgba(65,181,111,0.88))] text-2xl text-white shadow-magical"
              aria-hidden
            >
              {"\u2713"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="eyebrow border-0 px-0 py-0 shadow-none">
                {form.sentEyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-midnight sm:text-4xl">
                {form.successTitle}
              </h2>
              <p className="section-copy mt-4 text-base leading-relaxed sm:text-lg">
                {state.message}
              </p>
              {state.successNote ? (
                <p className="section-copy mt-3 text-sm leading-relaxed sm:text-base">
                  {state.successNote}
                </p>
              ) : null}
              {state.successBullets && state.successBullets.length > 0 ? (
                <ul className="mt-6 list-none space-y-3 border-t border-line pt-6 text-sm text-copy-soft sm:text-base">
                  {state.successBullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-sunrise" aria-hidden>
                        {"\u2726"}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
        {onRequestNew ? (
          <div className="mt-8 flex flex-wrap gap-4">
            <button type="button" onClick={onRequestNew} className="button-primary">
              {form.resetLabel}
            </button>
            <Link href="/" className="button-secondary">
              {form.backHomeLabel}
            </Link>
          </div>
        ) : (
          <div className="mt-8">
            <Link href="/" className="button-secondary">
              {form.backHomeLabel}
            </Link>
          </div>
        )}
      </div>
    );
  }

  const isValidationError = Boolean(
    state.fieldErrors && Object.keys(state.fieldErrors).length,
  );

  return (
    <div className="glass-panel rounded-[2.25rem] p-6 sm:p-8">
      <span className="eyebrow sparkle-dot">{form.eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold text-midnight sm:text-4xl">
        {form.title}
      </h2>
      <p className="section-copy mt-4 text-base">{form.description}</p>

      {state.status === "error" && state.message ? (
        <div
          className={`mt-6 rounded-2xl border p-5 text-sm sm:text-base ${
            isValidationError
              ? "border-[rgba(245,102,187,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,243,249,0.96))]"
              : "border-[rgba(125,100,255,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,241,255,0.96))]"
          }`}
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold text-midnight">{state.message}</p>
          {state.errorDetail ? (
            <p className="section-copy mt-2 text-sm leading-relaxed">
              {state.errorDetail}
            </p>
          ) : null}
          {!isValidationError ? (
            <p className="section-copy mt-3 text-sm leading-relaxed">
              {form.nonValidationHelp}
            </p>
          ) : null}
        </div>
      ) : null}

      <form
        action={formAction}
        className="relative mt-8 flex flex-col gap-5"
        aria-busy={isPending}
        noValidate
      >
        <div
          className="pointer-events-none absolute -left-[10000px] top-0 h-px w-px overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor={BOOKING_HONEYPOT_FIELD}>Company website</label>
          <input
            type="text"
            id={BOOKING_HONEYPOT_FIELD}
            name={BOOKING_HONEYPOT_FIELD}
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        <fieldset
          aria-label="Party details"
          disabled={isPending}
          className="m-0 flex min-w-0 flex-col gap-5 border-0 p-0 disabled:opacity-85"
        >
          {rows}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isPending}
              aria-busy={isPending}
              className={`button-primary min-w-[12rem] disabled:pointer-events-none disabled:opacity-65 ${
                isPending ? "cursor-wait" : "cursor-pointer"
              }`}
            >
              {isPending ? form.pendingLabel : form.submitLabel}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

function renderField(
  field: (typeof inquiryFormFields)[number],
  state: InquiryFormState,
  packageChoices: ReadonlyArray<PackageChoice>,
) {
  const err = state.fieldErrors?.[field.name];
  const id = field.name;
  const errId = `${id}-error`;
  const describedBy = err ? errId : undefined;
  const { form } = bookPageContent;

  const label = (
    <label htmlFor={id} className="block text-sm font-bold text-midnight">
      {field.label}
      {field.required ? (
        <span className="font-semibold text-copy-soft"> {"\u00A0"}(required)</span>
      ) : null}
    </label>
  );

  if (field.kind === "textarea") {
    return (
      <div key={field.name} className="flex flex-col gap-2">
        {label}
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          rows={"rows" in field ? field.rows : 4}
          maxLength={"maxLength" in field ? field.maxLength : undefined}
          placeholder={"placeholder" in field ? field.placeholder : undefined}
          autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
          aria-invalid={Boolean(err)}
          aria-describedby={describedBy}
          className={fieldClassName}
        />
        {err ? (
          <p id={errId} className={fieldErrorClassName} role="status">
            {err}
          </p>
        ) : null}
      </div>
    );
  }

  if (field.kind === "select") {
    const options =
      field.optionSource === "partyTypes"
        ? partyTypeOptions
        : packageChoices.map((pkg) => ({
            value: pkg.slug,
            label: `${pkg.name} (${pkg.duration})`,
          }));

    return (
      <div key={field.name} className="flex flex-col gap-2">
        {label}
        <select
          id={id}
          name={field.name}
          required={field.required}
          defaultValue=""
          autoComplete={"autoComplete" in field ? field.autoComplete : "off"}
          aria-invalid={Boolean(err)}
          aria-describedby={describedBy}
          className={`${fieldClassName} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%237b678f' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.6' d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`,
          }}
        >
          <option value="" disabled>
            {form.selectPlaceholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {err ? (
          <p id={errId} className={fieldErrorClassName} role="status">
            {err}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div key={field.name} className="flex flex-col gap-2">
      {label}
      <input
        id={id}
        name={field.name}
        type={field.kind}
        required={field.required}
        autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
        placeholder={"placeholder" in field ? field.placeholder : undefined}
        aria-invalid={Boolean(err)}
        aria-describedby={describedBy}
        className={fieldClassName}
      />
      {err ? (
        <p id={errId} className={fieldErrorClassName} role="status">
          {err}
        </p>
      ) : null}
    </div>
  );
}
