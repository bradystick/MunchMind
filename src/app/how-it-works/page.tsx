import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-[var(--navy)] mb-4">
              How <span className="gradient-text">MunchMind</span> Works
            </h1>
            <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
              We don&apos;t guess. We learn. Here&apos;s how your MunchMind
              builds the perfect box for you.
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-[var(--primary)] text-sm font-semibold">
                    Step 01
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
                  Take the Snack Quiz
                </h2>
                <p className="text-[var(--gray-500)] text-lg leading-relaxed mb-6">
                  Answer fun, interactive questions about your taste
                  preferences. We map your flavor profile across 12
                  dimensions — from sweet vs. savory to how adventurous you
                  are with new flavors.
                </p>
                <ul className="space-y-3">
                  {[
                    "Takes about 2 minutes",
                    "12 taste dimensions analyzed",
                    "Dietary restrictions included",
                    "Fun enough to share your results",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[var(--gray-600)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--gray-50)] rounded-3xl p-8 border border-[var(--gray-100)]">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-[var(--gray-100)]">
                    <p className="text-sm font-medium text-[var(--navy)] mb-3">
                      How do you feel about spicy snacks?
                    </p>
                    <div className="flex gap-2">
                      {["Not for me", "Mild", "Bring it", "Inferno"].map(
                        (opt, i) => (
                          <span
                            key={opt}
                            className={`text-xs px-3 py-1.5 rounded-full border ${i === 2 ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "border-[var(--gray-200)] text-[var(--gray-500)]"}`}
                          >
                            {opt}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[var(--gray-100)]">
                    <p className="text-sm font-medium text-[var(--navy)] mb-3">
                      Sweet or savory?
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[var(--gray-500)]">
                        Sweet
                      </span>
                      <div className="flex-1 h-2 bg-[var(--gray-100)] rounded-full overflow-hidden">
                        <div className="w-3/5 h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full" />
                      </div>
                      <span className="text-xs text-[var(--gray-500)]">
                        Savory
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-[var(--navy)] rounded-3xl p-8 text-white">
                <div className="text-center mb-6">
                  <h3 className="font-semibold mb-1">Your Snack Profile</h3>
                  <p className="text-gray-400 text-xs">
                    Powered by MunchMind AI
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Sweet", value: 78 },
                    { label: "Salty", value: 85 },
                    { label: "Spicy", value: 62 },
                    { label: "Crunchy", value: 90 },
                    { label: "Adventurous", value: 74 },
                    { label: "Health-conscious", value: 55 },
                  ].map((dim) => (
                    <div
                      key={dim.label}
                      className="bg-white/5 border border-white/10 rounded-xl p-3"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-400">
                          {dim.label}
                        </span>
                        <span className="text-xs font-bold">{dim.value}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"
                          style={{ width: `${dim.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-[var(--accent)] text-sm font-semibold">
                    Step 02
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
                  AI Builds Your Profile
                </h2>
                <p className="text-[var(--gray-500)] text-lg leading-relaxed mb-6">
                  Your MunchMind crunches your answers and creates a unique
                  Snack Profile. This is your taste DNA — a multi-dimensional
                  map of exactly what you crave.
                </p>
                <ul className="space-y-3">
                  {[
                    "Unique profile for every subscriber",
                    "Matches you against 50+ snack brands",
                    "Considers dietary needs automatically",
                    "Gets sharper with every feedback cycle",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[var(--gray-600)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-[var(--primary)] text-sm font-semibold">
                    Step 03
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
                  Get Your Box. Rate. Repeat.
                </h2>
                <p className="text-[var(--gray-500)] text-lg leading-relaxed mb-6">
                  Your curated box arrives monthly. Tear it open, enjoy your
                  snacks, then rate each one. Your MunchMind absorbs the
                  feedback and your next box levels up.
                </p>
                <ul className="space-y-3">
                  {[
                    "8-12 curated snacks each month",
                    "Simple thumbs up/down rating",
                    "Match score improves monthly",
                    "Average 94% match by month 3",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[var(--gray-600)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--gray-50)] rounded-3xl p-8 border border-[var(--gray-100)]">
                <div className="space-y-3">
                  {[
                    { name: "Spicy Mango Chips", rating: "loved" },
                    { name: "Sea Salt Dark Chocolate", rating: "loved" },
                    { name: "Wasabi Peas", rating: "okay" },
                    { name: "Coconut Clusters", rating: "loved" },
                  ].map((snack) => (
                    <div
                      key={snack.name}
                      className="flex items-center justify-between bg-white rounded-xl p-4 border border-[var(--gray-100)]"
                    >
                      <span className="text-sm font-medium text-[var(--navy)]">
                        {snack.name}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${snack.rating === "loved" ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "bg-[var(--gray-100)] text-[var(--gray-500)]"}`}
                      >
                        {snack.rating === "loved" ? "Loved it" : "It was okay"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-[var(--gray-400)]">
                    MunchMind is learning from your ratings...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <Link
              href="/quiz"
              className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all hover:-translate-y-1"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
