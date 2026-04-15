export type BookingEmailConfig =
  | {
      ok: true;
      resendApiKey: string;
      /** Admin inbox(es) — comma-separated allowed */
      adminTo: string[];
      /** Verified Resend sender, e.g. "A Living Fairytale <bookings@yourdomain.com>" */
      from: string;
      sendParentConfirmation: boolean;
    }
  | { ok: false; userMessage: string };

function parseEmailList(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Vercel / production: set these environment variables.
 *
 * Required:
 * - RESEND_API_KEY — Resend API key (server only, never NEXT_PUBLIC_*)
 * - BOOKING_ADMIN_EMAIL — Inbox(es) that receive new inquiries (comma-separated OK)
 *
 * Sender (one of the following must be set to a Resend-verified address):
 * - BOOKING_FROM_EMAIL — preferred; e.g. "A Living Fairytale <bookings@yourdomain.com>"
 * - RESEND_FROM — legacy alias, same format as above
 *
 * Optional:
 * - BOOKING_SEND_PARENT_CONFIRMATION — "true" | "1" | "yes" to send a short receipt to the parent
 *
 * Legacy (still supported if BOOKING_ADMIN_EMAIL is unset):
 * - BOOKING_NOTIFY_EMAIL — same meaning as BOOKING_ADMIN_EMAIL
 */
export function getBookingEmailConfig(): BookingEmailConfig {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();

  const adminRaw =
    process.env.BOOKING_ADMIN_EMAIL?.trim() ||
    process.env.BOOKING_NOTIFY_EMAIL?.trim();

  const fromRaw =
    process.env.BOOKING_FROM_EMAIL?.trim() || process.env.RESEND_FROM?.trim();

  if (!resendApiKey) {
    return {
      ok: false,
      userMessage:
        "Booking email is not configured yet (missing RESEND_API_KEY). Add it in Vercel → Settings → Environment Variables, then redeploy.",
    };
  }

  const adminTo = parseEmailList(adminRaw);
  if (adminTo.length === 0) {
    return {
      ok: false,
      userMessage:
        "Booking email is not fully configured (missing BOOKING_ADMIN_EMAIL). Add your operations inbox in Vercel env, then redeploy.",
    };
  }

  if (!fromRaw) {
    return {
      ok: false,
      userMessage:
        "Booking email is not fully configured (missing BOOKING_FROM_EMAIL or RESEND_FROM). Use a verified sender from your Resend domain.",
    };
  }

  const flag = process.env.BOOKING_SEND_PARENT_CONFIRMATION?.trim().toLowerCase();
  const sendParentConfirmation =
    flag === "true" || flag === "1" || flag === "yes";

  return {
    ok: true,
    resendApiKey,
    adminTo,
    from: fromRaw,
    sendParentConfirmation,
  };
}
