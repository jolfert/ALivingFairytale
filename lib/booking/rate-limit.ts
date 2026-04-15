import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Booking inquiry rate limit (Upstash Redis + @upstash/ratelimit)
 * ---------------------------------------------------------------
 * Vercel-friendly serverless limiter: one counter per client IP (from request headers).
 *
 * Env (optional but recommended for production):
 * - UPSTASH_REDIS_REST_URL
 * - UPSTASH_REDIS_REST_TOKEN
 *
 * If either is missing, checks return `{ ok: true }` so deploys work before Redis exists.
 * Limits are intentionally modest to reduce pain on shared IPs (schools, cafés).
 */
/** Max successful inquiry attempts per IP per sliding window (see window string below). */
const MAX_REQUESTS = 8;

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) {
    return null;
  }
  return new Redis({ url, token });
}

let ratelimitInstance: Ratelimit | null | undefined;

function getBookingInquiryRatelimit(): Ratelimit | null {
  if (ratelimitInstance !== undefined) {
    return ratelimitInstance;
  }
  const redis = getRedis();
  if (!redis) {
    ratelimitInstance = null;
    return null;
  }
  ratelimitInstance = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(MAX_REQUESTS, "15 m"),
    prefix: "ratelimit:booking:inquiry",
    analytics: false,
  });
  return ratelimitInstance;
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "unknown";
}

export async function checkBookingInquiryRateLimit(
  headers: Headers,
): Promise<{ ok: true } | { ok: false }> {
  const limiter = getBookingInquiryRatelimit();
  if (!limiter) {
    return { ok: true };
  }

  const ip = getClientIp(headers);
  try {
    const { success } = await limiter.limit(ip);
    if (!success) {
      return { ok: false };
    }
    return { ok: true };
  } catch {
    // Fail open: do not block real users if Redis is misconfigured or unreachable.
    return { ok: true };
  }
}
