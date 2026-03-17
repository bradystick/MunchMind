import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[var(--navy)] mb-6">
              Snacks shouldn&apos;t be{" "}
              <span className="gradient-text">random</span>
            </h1>
            <p className="text-xl text-[var(--gray-500)] max-w-2xl mx-auto leading-relaxed">
              Every other snack box sends everyone the same thing. We thought
              that was broken. So we built something smarter.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[var(--gray-600)] leading-relaxed">
              <p className="text-lg">
                MunchMind started with a simple question:{" "}
                <strong className="text-[var(--navy)]">
                  why does every snack subscription box feel like it was packed
                  for someone else?
                </strong>
              </p>
              <p className="text-lg">
                Because it was. Traditional snack boxes are one-size-fits-all.
                They buy in bulk, pack the same 8 items, and ship to
                everyone. If you like spicy and your neighbor likes sweet, you
                both get the same box. That&apos;s not curation — that&apos;s
                inventory clearing.
              </p>
              <p className="text-lg">
                We built MunchMind to change that. Our AI analyzes your taste
                across 12 flavor dimensions — sweet, salty, spicy, crunchy,
                texture preferences, adventurousness, dietary needs, and more.
                Then it matches you against our catalog of 50+ snack brands to
                build a box that&apos;s genuinely yours.
              </p>
              <p className="text-lg">
                But here&apos;s what makes it different:{" "}
                <strong className="text-[var(--navy)]">
                  your MunchMind learns.
                </strong>{" "}
                After every box, you rate your snacks. Loved it? More of that.
                Wasn&apos;t your thing? Noted. By month 3, our subscribers hit
                an average 94% match rate. By month 6, your MunchMind knows
                your taste better than you do.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "12",
                label: "Taste Dimensions",
                desc: "We don't just ask sweet or salty. We go deep.",
              },
              {
                value: "50+",
                label: "Snack Partners",
                desc: "From indie brands to international favorites.",
              },
              {
                value: "94%",
                label: "Avg Match by Month 3",
                desc: "The AI gets sharper with every rating.",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-[var(--gray-50)] border border-[var(--gray-100)]"
              >
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-[var(--navy)] mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-[var(--gray-500)]">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[var(--navy)] rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our mission is simple
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Make every box feel like it was packed by your best friend who
              knows exactly what you love — powered by AI that actually
              delivers on that promise.
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all hover:-translate-y-0.5"
            >
              Find Out What&apos;s on Your MunchMind
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
