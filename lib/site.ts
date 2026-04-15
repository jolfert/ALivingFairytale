/**
 * Canonical site origin for metadata, Open Graph URLs, and absolute links.
 * Prefer NEXT_PUBLIC_SITE_URL in production (e.g. https://www.yourdomain.com).
 * Falls back to VERCEL_URL on Vercel, then localhost for local dev.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "")}`;
  }
  return "http://localhost:3000";
}
