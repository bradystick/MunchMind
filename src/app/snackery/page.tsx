"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Snack {
  id: string;
  name: string;
  brand: string;
  tags: string[];
  color: string;
  description: string;
  category: string;
}

const allSnacks: Snack[] = [
  {
    id: "1",
    name: "Spicy Mango Chili Chips",
    brand: "TropicCrunch",
    tags: ["Spicy", "Sweet", "Crunchy"],
    color: "from-orange-400 to-red-500",
    description: "Tropical mango meets smoky chili heat in every crispy bite.",
    category: "Chips",
  },
  {
    id: "2",
    name: "Dark Chocolate Sea Salt Almonds",
    brand: "NutHaus",
    tags: ["Sweet", "Salty", "Crunchy"],
    color: "from-amber-700 to-yellow-900",
    description: "Rich dark chocolate coating over roasted almonds with a sea salt finish.",
    category: "Nuts",
  },
  {
    id: "3",
    name: "Wasabi Rice Crackers",
    brand: "TokyoBite",
    tags: ["Spicy", "Savory", "Crunchy"],
    color: "from-green-400 to-emerald-600",
    description: "Authentic Japanese rice crackers with a real wasabi kick.",
    category: "Crackers",
  },
  {
    id: "4",
    name: "Coconut Yogurt Clusters",
    brand: "IslandGrain",
    tags: ["Sweet", "Healthy", "Chewy"],
    color: "from-sky-300 to-cyan-500",
    description: "Crunchy granola clusters coated in tangy coconut yogurt.",
    category: "Healthy",
  },
  {
    id: "5",
    name: "Smoky BBQ Pork Jerky",
    brand: "TrailForge",
    tags: ["Savory", "Smoky", "Chewy"],
    color: "from-red-700 to-orange-800",
    description: "Slow-smoked pork jerky with a sweet BBQ glaze.",
    category: "Jerky",
  },
  {
    id: "6",
    name: "Matcha White Choc Bites",
    brand: "ZenSnack",
    tags: ["Sweet", "Unique", "Smooth"],
    color: "from-green-300 to-emerald-400",
    description: "Creamy white chocolate infused with ceremonial-grade matcha.",
    category: "Chocolate",
  },
  {
    id: "7",
    name: "Everything Bagel Crisps",
    brand: "BagelCo",
    tags: ["Savory", "Crunchy", "Classic"],
    color: "from-yellow-400 to-amber-500",
    description: "All the everything bagel flavor in a thin, crispy chip.",
    category: "Crackers",
  },
  {
    id: "8",
    name: "Freeze-Dried Strawberry Bites",
    brand: "PureCrunch",
    tags: ["Sweet", "Healthy", "Crunchy"],
    color: "from-pink-400 to-rose-500",
    description: "100% real strawberries, freeze-dried for an intense crunch.",
    category: "Healthy",
  },
  {
    id: "9",
    name: "Korean Honey Butter Chips",
    brand: "SeoulSnack",
    tags: ["Sweet", "Salty", "Crunchy"],
    color: "from-yellow-300 to-amber-400",
    description: "The viral Korean chip — sweet honey meets rich butter.",
    category: "Chips",
  },
  {
    id: "10",
    name: "Sriracha Cashews",
    brand: "HeatNut",
    tags: ["Spicy", "Savory", "Crunchy"],
    color: "from-red-500 to-red-700",
    description: "Roasted cashews coated in a spicy sriracha seasoning.",
    category: "Nuts",
  },
  {
    id: "11",
    name: "Salted Caramel Popcorn",
    brand: "PopLux",
    tags: ["Sweet", "Salty", "Crunchy"],
    color: "from-amber-400 to-orange-500",
    description: "Handcrafted popcorn drizzled with buttery salted caramel.",
    category: "Popcorn",
  },
  {
    id: "12",
    name: "Habanero Lime Tortilla Chips",
    brand: "FuegoSnacks",
    tags: ["Spicy", "Tangy", "Crunchy"],
    color: "from-lime-400 to-orange-500",
    description: "Stone-ground tortilla chips with habanero heat and citrus zing.",
    category: "Chips",
  },
];

const categories = ["All", "Chips", "Nuts", "Crackers", "Healthy", "Jerky", "Chocolate", "Popcorn"];

export default function SnackeryPage() {
  const [filter, setFilter] = useState("All");
  const [pinned, setPinned] = useState<string[]>([]);

  const filtered =
    filter === "All"
      ? allSnacks
      : allSnacks.filter((s) => s.category === filter);

  function togglePin(id: string) {
    if (pinned.includes(id)) {
      setPinned(pinned.filter((p) => p !== id));
    } else if (pinned.length < 3) {
      setPinned([...pinned, id]);
    }
  }

  return (
    <main className="pt-24">
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-6">
              <h1 className="text-5xl font-bold text-[var(--navy)] mb-4">
                The <span className="gradient-text">Snackery</span>
              </h1>
              <p className="text-[var(--gray-500)] text-lg max-w-2xl mx-auto">
                Browse our curated collection. Pin up to 3 snacks to guarantee
                they&apos;re in your next box — your MunchMind handles the rest.
              </p>
            </div>
          </ScrollReveal>

          {/* Pinned bar */}
          <ScrollReveal delay={100}>
            <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-lg border-b border-[var(--gray-100)] py-4 mb-8 -mx-4 px-4">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[var(--navy)]">
                    Pinned ({pinned.length}/3):
                  </span>
                  {pinned.length === 0 ? (
                    <span className="text-sm text-[var(--gray-400)]">
                      None yet — browse below
                    </span>
                  ) : (
                    <div className="flex gap-2">
                      {pinned.map((id) => {
                        const snack = allSnacks.find((s) => s.id === id)!;
                        return (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-medium px-3 py-1.5 rounded-full"
                          >
                            {snack.name}
                            <button
                              onClick={() => togglePin(id)}
                              className="hover:text-red-500 transition-colors"
                            >
                              &times;
                            </button>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
                {pinned.length === 3 && (
                  <span className="text-xs text-[var(--accent)] font-medium">
                    Max pinned!
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-[var(--navy)] text-white"
                    : "bg-[var(--gray-50)] text-[var(--gray-500)] hover:bg-[var(--gray-100)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Snack grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((snack, i) => {
              const isPinned = pinned.includes(snack.id);
              const canPin = pinned.length < 3 || isPinned;

              return (
                <ScrollReveal key={snack.id} delay={i * 60}>
                  <div
                    className={`group bg-[var(--gray-50)] rounded-2xl border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 ${
                      isPinned
                        ? "border-[var(--primary)] shadow-lg shadow-[var(--primary)]/10"
                        : "border-[var(--gray-100)]"
                    }`}
                  >
                    <div
                      className={`h-32 bg-gradient-to-br ${snack.color} flex items-center justify-center relative`}
                    >
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                          />
                        </svg>
                      </div>
                      {isPinned && (
                        <div className="absolute top-3 right-3 bg-[var(--primary)] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                          PINNED
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-[var(--gray-400)] mb-1">
                        {snack.brand}
                      </p>
                      <h3 className="font-semibold text-[var(--navy)] text-sm mb-1.5 leading-snug">
                        {snack.name}
                      </h3>
                      <p className="text-xs text-[var(--gray-400)] mb-3 leading-relaxed">
                        {snack.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {snack.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--gray-100)] text-[var(--gray-500)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => canPin && togglePin(snack.id)}
                        disabled={!canPin}
                        className={`w-full py-2 rounded-lg text-xs font-semibold transition-all ${
                          isPinned
                            ? "bg-[var(--primary)] text-white"
                            : canPin
                              ? "border border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                              : "border border-[var(--gray-200)] text-[var(--gray-300)] cursor-not-allowed"
                        }`}
                      >
                        {isPinned ? "Unpin" : canPin ? "Pin to My Box" : "Max Pinned"}
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
