/**
 * Honeypot field name — must match the hidden input in `InquiryForm`.
 * Bots often fill every text field; humans never see this one.
 */
export const BOOKING_HONEYPOT_FIELD = "booking_company_website" as const;

export function isBookingHoneypotTripped(formData: FormData): boolean {
  const raw = formData.get(BOOKING_HONEYPOT_FIELD);
  if (typeof raw !== "string") return false;
  return raw.trim().length > 0;
}
