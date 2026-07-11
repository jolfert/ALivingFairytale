/**
 * Canonical site origin for metadata, Open Graph URLs, and absolute links.
 * Prefer NEXT_PUBLIC_SITE_URL in production (e.g. https://www.yourdomain.com).
 * On Vercel, prefer the stable production domain over the per-deployment
 * VERCEL_URL hash domain — the hash URLs can sit behind deployment
 * protection, which breaks share-card images for social scrapers.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/^https?:\/\//, "")}`;
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "")}`;
  }
  return "https://a-living-fairytale.vercel.app";
}
