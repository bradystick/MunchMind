"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ScaleReveal from "@/components/ScaleReveal";
import CountUp from "@/components/CountUp";

const plans = [
  {
    name: "Starter",
    employees: "10–30",
    price: "$299",
    per: "/month",
    features: [
      "Weekly breakroom snack restock",
      "AI-curated mix for your team's preferences",
      "Team-wide taste survey included",
      "8 snack varieties per delivery",
      "Free standard shipping",
      "Monthly rotation to keep it fresh",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    employees: "30–100",
    price: "$599",
    per: "/month",
    features: [
      "Twice-weekly breakroom restock",
      "AI-curated mix with dietary accommodations",
      "Team taste survey + department breakdowns",
      "15 snack varieties per delivery",
      "Free priority shipping",
      "Dedicated account manager",
      "Custom branded snack labels available",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise",
    employees: "100+",
    price: "Custom",
    per: "",
    features: [
      "Daily or custom restock schedule",
      "Full dietary & allergen management",
      "Multi-office distribution",
      "Unlimited snack varieties",
      "White-glove onboarding",
      "Quarterly taste trend reports",
      "Custom branded packaging",
      "Dedicated success team",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Happier Teams",
    desc: "Snacks matched to what your team actually likes — not generic bulk bins. 94% employee satisfaction rate.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Zero Admin Work",
    desc: "No spreadsheets, no vendor calls, no restocking runs. We handle sourcing, delivery, and rotation automatically.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI That Learns",
    desc: "Our AI surveys your team, tracks preferences, and evolves the mix every month. No two deliveries are the same.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Budget Friendly",
    desc: "Cheaper than traditional office snack services. No long-term contracts. Scale up or down any month.",
  },
];

const comparisonRows = [
  { feature: "Personalized to your team", munchmind: true, costco: false, vending: false, other: "Partial" },
  { feature: "AI-driven taste matching", munchmind: true, costco: false, vending: false, other: false },
  { feature: "Dietary accommodations", munchmind: true, costco: false, vending: false, other: "Partial" },
  { feature: "Auto-restocking", munchmind: true, costco: false, vending: true, other: true },
  { feature: "No long-term contract", munchmind: true, costco: true, vending: false, other: false },
  { feature: "Mix evolves monthly", munchmind: true, costco: false, vending: false, other: false },
  { feature: "Setup fee", munchmind: "$0", costco: "$0", vending: "$200+", other: "$99+" },
  { feature: "Admin time per month", munchmind: "0 hrs", costco: "4+ hrs", vending: "1 hr", other: "1 hr" },
];

export default function CorporatePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend/email service
    setSubmitted(true);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-[var(--navy)] py-20 sm:py-28 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal delay={0} duration={800}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <span className="text-white/80 text-sm font-medium">MunchMind for Business</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150} duration={900}>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Your breakroom,{" "}
              <span className="gradient-text">powered by AI</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300} duration={900}>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              AI-curated snacks delivered to your office. Matched to your team&apos;s
              actual preferences — not whatever was cheapest at Costco.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={450} duration={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#plans"
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all hover:-translate-y-0.5"
              >
                See Plans
              </a>
              <a
                href="#contact"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Talk to Sales
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <ScaleReveal>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <svg className="w-10 h-10 text-[var(--primary)]/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl sm:text-2xl font-medium text-[var(--navy)] mb-6 leading-relaxed">
              &ldquo;We cut our office snack budget by 30% and people actually eat everything now.
              No more stale granola bars nobody touches.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-[var(--navy)]">Sarah Chen</p>
              <p className="text-[var(--gray-400)] text-sm">Office Manager, 45-person design agency</p>
            </div>
          </div>
        </ScaleReveal>
      </section>

      {/* Why MunchMind for your office */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Why offices love <span className="gradient-text">MunchMind</span>
              </h2>
              <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
                Stop guessing what your team wants. Let AI figure it out.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <ScrollReveal
                key={b.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 150}
                distance={50}
              >
                <div className="p-8 rounded-2xl border border-[var(--gray-100)] hover:shadow-lg hover:border-[var(--primary)]/20 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center text-[var(--primary)] mb-5 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{b.title}</h3>
                  <p className="text-[var(--gray-500)] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for corporate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Three steps to a smarter breakroom
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Survey Your Team",
                desc: "We send a quick taste survey to your team. 2 minutes, covers preferences, dietary needs, and snack style.",
              },
              {
                step: "02",
                title: "AI Builds the Mix",
                desc: "Our algorithm analyzes every response and builds a custom snack assortment that satisfies the whole office.",
              },
              {
                step: "03",
                title: "Snacks Show Up",
                desc: "Fresh, curated snacks delivered on schedule. The mix evolves every month based on what your team rates highest.",
              },
            ].map((item, i) => (
              <ScaleReveal key={item.step} delay={i * 200}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white text-2xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{item.title}</h3>
                  <p className="text-[var(--gray-500)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                MunchMind vs. the old way
              </h2>
              <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
                See how AI-curated stacks up against what you&apos;re probably doing now.
              </p>
            </div>
          </ScrollReveal>

          <ScaleReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[var(--gray-100)]">
                    <th className="text-left py-4 pr-4 text-sm font-medium text-[var(--gray-400)]">Feature</th>
                    <th className="py-4 px-4 text-center">
                      <span className="text-sm font-bold gradient-text">MunchMind</span>
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-[var(--gray-400)]">Costco Runs</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-[var(--gray-400)]">Vending Machine</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-[var(--gray-400)]">Other Services</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-[var(--gray-50)]">
                      <td className="py-4 pr-4 text-sm font-medium text-[var(--navy)]">{row.feature}</td>
                      {[row.munchmind, row.costco, row.vending, row.other].map((val, i) => (
                        <td key={i} className="py-4 px-4 text-center">
                          {val === true ? (
                            <svg className={`w-5 h-5 mx-auto ${i === 0 ? "text-[var(--accent)]" : "text-[var(--gray-300)]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : val === false ? (
                            <svg className="w-5 h-5 mx-auto text-[var(--gray-200)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          ) : (
                            <span className={`text-sm ${i === 0 ? "font-semibold text-[var(--accent)]" : "text-[var(--gray-400)]"}`}>{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Plans that scale with your team
              </h2>
              <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
                No long-term contracts. Adjust your plan as your team grows.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <ScaleReveal key={plan.name} delay={i * 150}>
                <div
                  className={`rounded-2xl p-8 relative transition-all hover:shadow-xl ${
                    plan.highlight
                      ? "border-2 border-[var(--primary)] shadow-xl shadow-[var(--primary)]/10"
                      : "border border-[var(--gray-200)]"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={`text-lg font-semibold mb-1 ${plan.highlight ? "text-[var(--primary)]" : "text-[var(--gray-500)]"}`}>
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[var(--gray-400)] mb-3">{plan.employees} employees</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-[var(--navy)]">{plan.price}</span>
                      {plan.per && <span className="text-[var(--gray-400)]">{plan.per}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--gray-600)] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full text-center py-3.5 rounded-full font-semibold transition-all ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white hover:shadow-lg hover:shadow-[var(--primary)]/25 hover:-translate-y-0.5"
                        : "border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / stats with CountUp */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "94%", label: "Employee satisfaction" },
              { stat: "2", label: "Min survey time", suffix: " min" },
              { stat: "$0", label: "Setup fee" },
              { stat: "50+", label: "Snack brands" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100} distance={30}>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    <CountUp target={item.stat} duration={1800} />
                  </div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Get your team snacking smarter
              </h2>
              <p className="text-[var(--gray-500)] text-lg">
                Tell us about your office. We&apos;ll put together a custom plan.
              </p>
            </div>
          </ScrollReveal>

          <ScaleReveal delay={150}>
            {submitted ? (
              <div className="text-center py-16 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">We&apos;ll be in touch!</h3>
                <p className="text-[var(--gray-500)]">
                  Expect to hear from us within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--navy)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--navy)] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--navy)] mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-[var(--navy)] mb-2">
                      Team Size
                    </label>
                    <select
                      id="employees"
                      required
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select team size</option>
                      <option value="10-30">10–30 employees</option>
                      <option value="30-100">30–100 employees</option>
                      <option value="100-500">100–500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--navy)] mb-2">
                    Anything else? <span className="text-[var(--gray-400)] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm resize-none"
                    placeholder="Dietary restrictions, preferred delivery days, budget range..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all hover:-translate-y-0.5"
                >
                  Get a Custom Plan
                </button>

                <p className="text-center text-[var(--gray-400)] text-xs">
                  No commitment. No credit card. We&apos;ll reach out within 1 business day.
                </p>
              </form>
            )}
          </ScaleReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your team deserves better snacks
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join the offices switching from generic bulk snacks to AI-curated boxes their teams actually love.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all hover:-translate-y-0.5"
              >
                Get Started Today
              </a>
              <Link
                href="/quiz"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Try the Quiz Yourself
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
