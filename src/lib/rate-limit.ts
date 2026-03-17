/**
 * Simple in-memory rate limiter using a sliding window.
 * For production at scale, swap this for Redis-backed rate limiting.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitEntry>();

// Clean up expired entries every 60 seconds to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetTime) {
      store.delete(key);
    }
  }
}, 60_000);

interface RateLimitOptions {
  /** Max requests allowed in the window */
  limit: number;
  /** Window size in seconds */
  windowSeconds: number;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetIn: number;
}

export function rateLimit(
  key: string,
  options: RateLimitOptions
): RateLimitResult {
  const now = Date.now();
  const windowMs = options.windowSeconds * 1000;

  const entry = store.get(key);

  if (!entry || now > entry.resetTime) {
    // First request or window expired — start fresh
    store.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: options.limit - 1, resetIn: options.windowSeconds };
  }

  if (entry.count >= options.limit) {
    const resetIn = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, resetIn };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: options.limit - entry.count,
    resetIn: Math.ceil((entry.resetTime - now) / 1000),
  };
}
