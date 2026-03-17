import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ScaleReveal from "@/components/ScaleReveal";
import EmailCapture from "@/components/EmailCapture";
import ParallaxHero from "@/components/ParallaxHero";
import CountUp from "@/components/CountUp";
import LaunchCountdown from "@/components/LaunchCountdown";

function HeroSection() {
  return (
    <ParallaxHero>
      <div className="max-w-5xl mx-auto px-4 text-center pt-24">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-white/80 text-sm">
            AI-Powered Snack Curation
          </span>
        </div>

        <div className="flex justify-center gap-8 sm:gap-12 mb-8">
          {[
            { value: "50+", label: "Snack Brands" },
            { value: "12", label: "Taste Dimensions" },
            { value: "94%", label: "Match by Month 3" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                target={stat.value}
                className="text-xl sm:text-2xl font-bold text-white"
              />
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
          What&apos;s on your
          <br />
          <span className="gradient-text">MunchMind</span>?
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
          Take a quick quiz. Our AI builds your unique Snack Profile. Get a
          box of snacks curated just for you — and it gets smarter every
          single month.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Link
            href="/quiz"
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all hover:-translate-y-1 animate-pulse-glow"
          >
            Take the Quiz
          </Link>
          <Link
            href="/how-it-works"
            className="text-white/70 hover:text-white px-8 py-4 rounded-full text-lg font-medium border border-white/20 hover:border-white/40 transition-all"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </ParallaxHero>
  );
}

function HowItWorksPreview() {
  const steps = [
    {
      number: "01",
      title: "Take the Quiz",
      description:
        "A fun, interactive quiz that maps your taste preferences across 12 flavor dimensions. Sweet, salty, spicy, adventurous — we measure it all.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "AI Builds Your Profile",
      description:
        "Your MunchMind analyzes your answers and creates a unique Snack Profile. It knows your cravings better than you do.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Get Your Box",
      description:
        "8-12 curated snacks arrive at your door. Rate each one, and your MunchMind gets even smarter for next month.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
              How <span className="gradient-text">MunchMind</span> Works
            </h2>
            <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
              Three steps to snacks that actually match your taste.
            </p>
          </div>
        </ScaleReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <ScaleReveal key={step.number} delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-[var(--gray-100)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center text-[var(--primary)]">
                    {step.icon}
                  </div>
                  <span className="text-sm font-mono text-[var(--gray-400)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--gray-500)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatchScoreSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" duration={900}>
            <div>
              <h2 className="text-4xl font-bold text-[var(--navy)] mb-6">
                Your box gets <span className="gradient-text">smarter</span>{" "}
                every month
              </h2>
              <p className="text-[var(--gray-500)] text-lg leading-relaxed mb-8">
                After each delivery, rate your snacks. Your MunchMind learns
                what you loved, what was just okay, and what missed the mark.
                Next month? Even better.
              </p>

              <div className="space-y-4">
                {[
                  { month: "Month 1", score: "72%", label: "Great start" },
                  { month: "Month 2", score: "85%", label: "Getting dialed in" },
                  { month: "Month 3", score: "94%", label: "Nailing it" },
                ].map((item) => (
                  <div key={item.month} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-[var(--gray-400)] w-20">
                      {item.month}
                    </span>
                    <div className="flex-1 bg-[var(--gray-100)] rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full transition-all"
                        style={{ width: item.score }}
                      />
                    </div>
                    <span className="text-sm font-bold text-[var(--navy)] w-10">
                      {item.score}
                    </span>
                    <span className="text-xs text-[var(--gray-400)] hidden sm:block">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScaleReveal delay={200}>
            <div className="relative">
              <div className="bg-[var(--navy)] rounded-3xl p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Your MunchMind</h3>
                  <span className="text-xs bg-[var(--accent)]/20 text-[var(--accent)] px-3 py-1 rounded-full">
                    Month 3
                  </span>
                </div>

                <div className="flex items-center justify-center my-8">
                  <div className="relative w-40 h-40">
                    <svg className="w-40 h-40 -rotate-90" viewBox="0 0 160 160">
                      <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${0.94 * 2 * Math.PI * 70} ${2 * Math.PI * 70}`} />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--primary)" />
                          <stop offset="100%" stopColor="var(--accent)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold">94%</span>
                      <span className="text-xs text-gray-400">Match Score</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: "Sweet", value: "High" },
                    { label: "Spicy", value: "Medium" },
                    { label: "Savory", value: "High" },
                  ].map((pref) => (
                    <div key={pref.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="text-xs text-gray-400">{pref.label}</div>
                      <div className="text-sm font-semibold">{pref.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </div>
    </section>
  );
}

function SnackeryPreview() {
  const featuredSnacks = [
    { name: "Spicy Mango Chili Chips", brand: "TropicCrunch", tags: ["Spicy", "Sweet", "Crunchy"], color: "from-orange-400 to-red-500" },
    { name: "Dark Chocolate Sea Salt Almonds", brand: "NutHaus", tags: ["Sweet", "Salty", "Crunchy"], color: "from-amber-700 to-yellow-900" },
    { name: "Wasabi Rice Crackers", brand: "TokyoBite", tags: ["Spicy", "Savory", "Crunchy"], color: "from-green-400 to-emerald-600" },
    { name: "Coconut Yogurt Clusters", brand: "IslandGrain", tags: ["Sweet", "Healthy", "Chewy"], color: "from-sky-300 to-cyan-500" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleReveal>
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[var(--primary)] text-sm font-semibold">The Snackery</span>
            </div>
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
              Pin your <span className="gradient-text">favorites</span>
            </h2>
            <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
              Browse the Snackery and pin up to 3 snacks to guarantee they&apos;re in your next box. The rest? Your MunchMind handles it.
            </p>
          </div>
        </ScaleReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {featuredSnacks.map((snack, i) => (
            <ScaleReveal key={snack.name} delay={i * 120}>
              <div className="group bg-[var(--gray-50)] rounded-2xl border border-[var(--gray-100)] overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className={`h-36 bg-gradient-to-br ${snack.color} flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[var(--gray-400)] mb-1">{snack.brand}</p>
                  <h3 className="font-semibold text-[var(--navy)] text-sm mb-2 leading-snug">{snack.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {snack.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--gray-100)] text-[var(--gray-500)]">{tag}</span>
                    ))}
                  </div>
                  <button className="mt-3 w-full py-2 rounded-lg border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-semibold hover:bg-[var(--primary)] hover:text-white transition-all group-hover:border-[var(--primary)]">
                    Pin to My Box
                  </button>
                </div>
              </div>
            </ScaleReveal>
          ))}
        </div>

        <ScaleReveal delay={500}>
          <div className="text-center mt-10">
            <Link href="/snackery" className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all">
              Browse the full Snackery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const testimonials = [
    { name: "Sarah K.", text: "Month 3 and my box was literally perfect. Not a single miss. This thing actually learns.", score: "96%" },
    { name: "James R.", text: "I've tried every snack box out there. MunchMind is the first one that felt like it was made for ME.", score: "91%" },
    { name: "Mia L.", text: "The quiz was actually fun? And then the snacks were incredible. My roommate is signing up too.", score: "93%" },
  ];

  return (
    <section className="py-24 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
              People are loving their <span className="gradient-text">MunchMind</span>
            </h2>
            <p className="text-[var(--gray-500)] text-lg">Real subscribers. Real match scores.</p>
          </div>
        </ScaleReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScaleReveal key={t.name} delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--gray-100)] h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <span className="font-semibold text-[var(--navy)]">{t.name}</span>
                  </div>
                  <span className="text-sm font-bold text-[var(--accent)]">{t.score} match</span>
                </div>
                <p className="text-[var(--gray-500)] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              </div>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoxShowcase() {
  return (
    <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your box, <span className="gradient-text">curated by AI</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              8–12 premium snacks matched to your unique taste profile. Every box is different because every MunchMind is different.
            </p>
          </div>
        </ScaleReveal>
        <ScaleReveal delay={200}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[var(--primary)]/20">
            <Image
              src="/munchmind-box.jpg"
              alt="MunchMind subscription box overflowing with curated snacks"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            *Image for illustration purposes. Shipments arrive in standard cardboard packaging.
          </p>
        </ScaleReveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <ScaleReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to find out what&apos;s on your <span className="gradient-text">MunchMind</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Take the 2-minute quiz. Build your Snack Profile. Get a box curated by AI that gets better every month.
          </p>
          <div className="mb-4">
            <p className="text-[var(--accent)] text-sm font-semibold mb-3">Founding Member pricing ends in:</p>
            <LaunchCountdown />
            <p className="text-gray-500 text-xs mt-2">First 100 members lock in $29/$49 forever</p>
          </div>
          <Link
            href="/quiz"
            className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all hover:-translate-y-1 mb-10"
          >
            Take the Quiz
          </Link>

          <div className="border-t border-white/10 pt-10">
            <p className="text-gray-400 text-sm mb-4">Not ready yet? Get notified when we launch.</p>
            <EmailCapture />
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksPreview />
      <BoxShowcase />
      <MatchScoreSection />
      <SnackeryPreview />
      <SocialProofSection />
      <CTASection />
    </main>
  );
}
