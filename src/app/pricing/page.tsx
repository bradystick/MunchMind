import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import LaunchCountdown from "@/components/LaunchCountdown";

export default function PricingPage() {
  return (
    <main className="pt-24">
      {/* Founding Member Banner */}
      <section className="bg-[var(--navy)] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[var(--accent)] text-sm font-semibold">Founding Member Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Lock in your price forever
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            The first 100 members get a permanent discount. Once they&apos;re gone, prices go to full rate.
          </p>
          <LaunchCountdown className="mb-4" />
          <p className="text-gray-500 text-xs">Founding Member pricing ends at launch</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[var(--navy)] mb-4">
              Simple, honest <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
              Two plans. No hidden fees. Cancel anytime. Every box gets
              smarter the longer you stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Plan */}
            <div className="rounded-2xl border border-[var(--gray-200)] p-8 hover:shadow-xl transition-all">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--gray-500)]">
                    Standard
                  </h3>
                  <span className="text-[10px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5 rounded-full">
                    FOUNDING RATE
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[var(--navy)]">
                    $29
                  </span>
                  <span className="text-[var(--gray-400)]">/month</span>
                  <span className="text-lg text-[var(--gray-300)] line-through ml-1">
                    $39
                  </span>
                </div>
                <p className="text-[var(--gray-500)] mt-3">
                  Perfect for discovering your snack identity.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "8 AI-curated snacks per box",
                  "Personalized Snack Profile",
                  "Monthly taste evolution tracking",
                  "Rate & refine feedback loop",
                  "Free shipping",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[var(--gray-600)] text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <CheckoutButton
                plan="standard"
                className="block w-full text-center py-3.5 rounded-full border-2 border-[var(--navy)] text-[var(--navy)] font-semibold hover:bg-[var(--navy)] hover:text-white transition-all"
              >
                Start Standard — $29/mo
              </CheckoutButton>
            </div>

            {/* Premium Plan */}
            <div className="rounded-2xl border-2 border-[var(--primary)] p-8 relative shadow-xl shadow-[var(--primary)]/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-[var(--primary)]">
                    Premium
                  </h3>
                  <span className="text-[10px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5 rounded-full">
                    FOUNDING RATE
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[var(--navy)]">
                    $49
                  </span>
                  <span className="text-[var(--gray-400)]">/month</span>
                  <span className="text-lg text-[var(--gray-300)] line-through ml-1">
                    $59
                  </span>
                </div>
                <p className="text-[var(--gray-500)] mt-3">
                  The full MunchMind experience. Maximum variety.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "12 AI-curated snacks per box",
                  "Advanced Snack Profile with deep insights",
                  "Priority access to new & rare snacks",
                  "Monthly taste evolution tracking",
                  "Rate & refine feedback loop",
                  "Free express shipping",
                  "Shareable MunchMind Score card",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[var(--gray-600)] text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <CheckoutButton
                plan="premium"
                className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all hover:-translate-y-0.5"
              >
                Start Premium — $49/mo
              </CheckoutButton>
            </div>
          </div>

          {/* Founding member note + guarantee */}
          <div className="text-center mt-8 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[var(--gray-500)] text-sm">
                Love it or we&apos;ll make it right. Cancel anytime, no questions asked.
              </span>
            </div>
            <p className="text-[var(--gray-400)] text-xs">
              Founding Members keep their discounted rate for life, even if prices increase.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--navy)] text-center mb-10">
              Common Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. No contracts, no cancellation fees. You can pause or cancel your subscription at any time from your account.",
                },
                {
                  q: "How does the AI personalization work?",
                  a: "When you take our quiz, your answers are analyzed across 12 taste dimensions to create your Snack Profile. Each month, your ratings teach the AI what you love, and your next box reflects that.",
                },
                {
                  q: "What if I have dietary restrictions?",
                  a: "The quiz covers dietary needs — gluten-free, vegan, nut-free, and more. Your MunchMind respects your restrictions while maximizing flavor variety.",
                },
                {
                  q: "When does my box ship?",
                  a: "Boxes ship on the 1st of each month. You'll receive tracking info via email. Most deliveries arrive within 3-5 business days.",
                },
                {
                  q: "What's the difference between Standard and Premium?",
                  a: "Standard gets you 8 curated snacks. Premium gets 12 snacks, including access to rare and limited-edition items, plus express shipping and a shareable MunchMind Score card.",
                },
                {
                  q: "What does 'Founding Member' mean?",
                  a: "The first 100 subscribers lock in a permanently discounted rate — $29/mo Standard or $49/mo Premium — that never increases, even when full pricing kicks in after launch.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-[var(--gray-100)] pb-6"
                >
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[var(--gray-500)] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
