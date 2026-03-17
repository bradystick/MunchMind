import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { rateLimit } from "@/lib/rate-limit";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key === "sk_test_REPLACE_ME") {
    return null;
  }
  return new Stripe(key);
}

const VALID_PLANS = ["standard", "premium"] as const;
type Plan = (typeof VALID_PLANS)[number];

const PRICE_MAP: Record<Plan, string | undefined> = {
  standard: process.env.STRIPE_PRICE_STANDARD,
  premium: process.env.STRIPE_PRICE_PREMIUM,
};

function isValidPlan(value: unknown): value is Plan {
  return typeof value === "string" && VALID_PLANS.includes(value as Plan);
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  try {
    // --- CSRF protection: verify the request originated from our own site ---
    const origin = req.headers.get("origin");
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    if (origin && origin !== baseUrl) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // --- Rate limiting: 5 checkout attempts per IP per 60 seconds ---
    const ip = getClientIp(req);
    const rl = rateLimit(`checkout:${ip}`, { limit: 5, windowSeconds: 60 });
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rl.resetIn),
          },
        }
      );
    }

    // --- Input validation ---
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const plan = (body as Record<string, unknown>)?.plan;

    if (!isValidPlan(plan)) {
      return NextResponse.json(
        { error: "Invalid plan. Must be 'standard' or 'premium'." },
        { status: 400 }
      );
    }

    const priceId = PRICE_MAP[plan];
    if (!priceId || priceId === "price_REPLACE_ME") {
      return NextResponse.json(
        { error: "Stripe is not configured yet. Please add your Stripe Price IDs to .env.local" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured yet." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      subscription_data: {
        metadata: { plan },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    // Never leak internal error details to the client
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
