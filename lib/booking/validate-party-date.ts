/**
 * Validates `<input type="date">` value (YYYY-MM-DD).
 * Compares calendar days using the **server local timezone** at local midnight
 * so "today" is not rejected due to time-of-day, and past calendar days are rejected.
 */
export function validatePartyDateInput(
  value: string,
  messages: { invalid: string; past: string },
): { ok: true } | { ok: false; message: string } {
  const trimmed = value.trim();
  if (!trimmed) {
    return { ok: false, message: messages.invalid };
  }

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (!match) {
    return { ok: false, message: messages.invalid };
  }

  const y = Number(match[1]);
  const mo = Number(match[2]);
  const d = Number(match[3]);

  if (
    !Number.isFinite(y) ||
    !Number.isFinite(mo) ||
    !Number.isFinite(d) ||
    mo < 1 ||
    mo > 12 ||
    d < 1 ||
    d > 31
  ) {
    return { ok: false, message: messages.invalid };
  }

  const parsed = new Date(y, mo - 1, d);
  if (
    parsed.getFullYear() !== y ||
    parsed.getMonth() !== mo - 1 ||
    parsed.getDate() !== d
  ) {
    return { ok: false, message: messages.invalid };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const partyDay = new Date(y, mo - 1, d);
  partyDay.setHours(0, 0, 0, 0);

  if (partyDay < today) {
    return { ok: false, message: messages.past };
  }

  return { ok: true };
}
