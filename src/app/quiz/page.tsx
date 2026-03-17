"use client";

import { useState } from "react";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import ShareProfile from "@/components/ShareProfile";

interface Question {
  id: string;
  question: string;
  type: "single" | "slider" | "multi";
  options?: string[];
  sliderLabels?: [string, string];
}

const questions: Question[] = [
  {
    id: "sweet_savory",
    question: "Where do you fall on the sweet vs. savory scale?",
    type: "slider",
    sliderLabels: ["All Sweet", "All Savory"],
  },
  {
    id: "spice",
    question: "How do you feel about spicy snacks?",
    type: "single",
    options: ["Not for me", "A little kick", "Bring the heat", "Inferno level"],
  },
  {
    id: "texture",
    question: "Pick your ideal snack texture.",
    type: "single",
    options: ["Crunchy", "Chewy", "Smooth/Creamy", "I love them all"],
  },
  {
    id: "adventure",
    question: "How adventurous are you with new flavors?",
    type: "single",
    options: [
      "Stick to classics",
      "Open to trying",
      "Love discovering new stuff",
      "The weirder the better",
    ],
  },
  {
    id: "categories",
    question: "What types of snacks do you love? Pick all that apply.",
    type: "multi",
    options: [
      "Chips & Crisps",
      "Chocolate & Candy",
      "Nuts & Trail Mix",
      "Dried Fruit",
      "Jerky & Meat Snacks",
      "Cookies & Baked Goods",
      "Popcorn",
      "International Snacks",
      "Protein/Energy Bars",
      "Crackers & Pretzels",
    ],
  },
  {
    id: "dietary",
    question: "Any dietary needs? Pick all that apply.",
    type: "multi",
    options: [
      "No restrictions",
      "Gluten-free",
      "Vegan",
      "Vegetarian",
      "Nut-free",
      "Dairy-free",
      "Low sugar",
      "Organic preferred",
    ],
  },
  {
    id: "salty",
    question: "How salty do you like your snacks?",
    type: "slider",
    sliderLabels: ["Lightly salted", "Salt lover"],
  },
  {
    id: "health",
    question: "How health-conscious are your snack choices?",
    type: "single",
    options: [
      "Give me the good stuff, health later",
      "Balance of healthy and indulgent",
      "Mostly healthy with treats",
      "Clean eating only",
    ],
  },
  {
    id: "quantity",
    question: "How many snacks do you go through in a week?",
    type: "single",
    options: [
      "A few here and there",
      "One a day",
      "Multiple daily",
      "I am a snack machine",
    ],
  },
  {
    id: "surprise",
    question: "How do you feel about surprise snacks you've never tried?",
    type: "single",
    options: [
      "Keep it familiar",
      "Maybe 1-2 new ones",
      "Half and half",
      "Surprise me with everything",
    ],
  },
];

interface ProfileDimension {
  label: string;
  value: number;
}

function generateProfile(
  answers: Record<string, string | number | string[]>
): ProfileDimension[] {
  const sweet =
    typeof answers.sweet_savory === "number"
      ? 100 - answers.sweet_savory
      : 50;
  const savory =
    typeof answers.sweet_savory === "number"
      ? answers.sweet_savory
      : 50;
  const salty =
    typeof answers.salty === "number" ? answers.salty : 50;

  const spiceMap: Record<string, number> = {
    "Not for me": 10,
    "A little kick": 40,
    "Bring the heat": 75,
    "Inferno level": 95,
  };
  const spicy = spiceMap[answers.spice as string] ?? 50;

  const adventureMap: Record<string, number> = {
    "Stick to classics": 20,
    "Open to trying": 45,
    "Love discovering new stuff": 75,
    "The weirder the better": 95,
  };
  const adventurous = adventureMap[answers.adventure as string] ?? 50;

  const healthMap: Record<string, number> = {
    "Give me the good stuff, health later": 20,
    "Balance of healthy and indulgent": 50,
    "Mostly healthy with treats": 75,
    "Clean eating only": 95,
  };
  const health = healthMap[answers.health as string] ?? 50;

  const textureMap: Record<string, number> = {
    Crunchy: 90,
    Chewy: 60,
    "Smooth/Creamy": 40,
    "I love them all": 70,
  };
  const crunchy = textureMap[answers.texture as string] ?? 50;

  const surpriseMap: Record<string, number> = {
    "Keep it familiar": 15,
    "Maybe 1-2 new ones": 40,
    "Half and half": 65,
    "Surprise me with everything": 95,
  };
  const surpriseFactor = surpriseMap[answers.surprise as string] ?? 50;

  return [
    { label: "Sweet", value: sweet },
    { label: "Savory", value: savory },
    { label: "Salty", value: salty },
    { label: "Spicy", value: spicy },
    { label: "Crunchy", value: crunchy },
    { label: "Adventurous", value: adventurous },
    { label: "Health-Conscious", value: health },
    { label: "Surprise Factor", value: surpriseFactor },
  ];
}

function calculateMatchScore(profile: ProfileDimension[]): number {
  const avg = profile.reduce((sum, d) => sum + d.value, 0) / profile.length;
  return Math.min(Math.max(Math.round(avg * 0.85 + 22), 68), 89);
}

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, string | number | string[]>
  >({});
  const [sliderValue, setSliderValue] = useState(50);
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  const [showProfile, setShowProfile] = useState(false);

  const question = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;

  function handleSingleSelect(option: string) {
    const newAnswers = { ...answers, [question.id]: option };
    setAnswers(newAnswers);
    setTimeout(() => advance(newAnswers), 300);
  }

  function handleSliderConfirm() {
    const newAnswers = { ...answers, [question.id]: sliderValue };
    setAnswers(newAnswers);
    advance(newAnswers);
  }

  function handleMultiConfirm() {
    const newAnswers = { ...answers, [question.id]: selectedMulti };
    setAnswers(newAnswers);
    setSelectedMulti([]);
    advance(newAnswers);
  }

  function toggleMulti(option: string) {
    setSelectedMulti((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  }

  function advance(newAnswers: Record<string, string | number | string[]>) {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSliderValue(50);
    } else {
      setAnswers(newAnswers);
      setShowProfile(true);
    }
  }

  if (showProfile) {
    const profile = generateProfile(answers);
    const matchScore = calculateMatchScore(profile);

    return (
      <main className="pt-24 min-h-screen bg-[var(--navy)]">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[var(--accent)]/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--accent)] text-sm font-medium">
                Your MunchMind is ready
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Your Snack Profile
            </h1>
            <p className="text-gray-400">
              Here&apos;s what your MunchMind discovered about you.
            </p>
          </div>

          <div className="bg-[var(--navy-light)] rounded-3xl p-8 border border-white/10 mb-6 animate-slide-up">
            {/* Match score with trajectory */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-36 h-36">
                <svg
                  className="w-36 h-36 -rotate-90"
                  viewBox="0 0 144 144"
                >
                  <circle
                    cx="72"
                    cy="72"
                    r="62"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="62"
                    fill="none"
                    stroke="url(#quizGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(matchScore / 100) * 2 * Math.PI * 62} ${2 * Math.PI * 62}`}
                  />
                  <defs>
                    <linearGradient
                      id="quizGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="100%" stopColor="var(--accent)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {matchScore}%
                  </span>
                  <span className="text-xs text-gray-400">
                    Month 1
                  </span>
                </div>
              </div>
            </div>

            {/* Score trajectory — reframed positively */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
              <p className="text-center text-sm font-semibold text-white mb-3">
                Your match score will keep climbing
              </p>
              <div className="space-y-2">
                {[
                  { month: "Month 1 (now)", score: matchScore, active: true },
                  { month: "Month 2", score: Math.min(matchScore + 13, 92), active: false },
                  { month: "Month 3+", score: Math.min(matchScore + 22, 96), active: false },
                ].map((item) => (
                  <div key={item.month} className="flex items-center gap-3">
                    <span className={`text-xs w-24 ${item.active ? "text-white font-semibold" : "text-gray-500"}`}>
                      {item.month}
                    </span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${item.active ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" : "bg-white/20"}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className={`text-xs w-8 text-right ${item.active ? "text-white font-bold" : "text-gray-500"}`}>
                      {item.score}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-[11px] text-gray-500 mt-2">
                Every rating you give makes your MunchMind smarter
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {profile.map((dim) => (
                <div
                  key={dim.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-3"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-400">{dim.label}</span>
                    <span className="text-xs font-bold text-white">
                      {dim.value}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full transition-all duration-1000"
                      style={{ width: `${dim.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Share button */}
          <div className="mb-6 animate-slide-up">
            <ShareProfile matchScore={matchScore} dimensions={profile} />
          </div>

          {/* Snackery callout */}
          <div className="bg-[var(--navy-light)] rounded-2xl p-5 border border-white/10 mb-6 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Want to customize your first box?
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Visit the{" "}
                  <Link href="/snackery" className="text-[var(--primary)] hover:underline">
                    Snackery
                  </Link>{" "}
                  and pin up to 3 snacks to guarantee they&apos;re in your box. Your MunchMind handles the rest.
                </p>
              </div>
            </div>
          </div>

          {/* Inline Plan Selector */}
          <div className="animate-slide-up">
            <h2 className="text-xl font-bold text-white text-center mb-2">
              Choose your plan & get your first box
            </h2>
            <p className="text-center text-[var(--accent)] text-xs font-semibold mb-6">
              Founding Member pricing — lock in your rate forever
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-[var(--navy-light)] rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-white font-semibold mb-1">Standard</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-white">$29</span>
                  <span className="text-gray-400 text-sm">/mo</span>
                  <span className="text-gray-500 text-sm line-through">$39</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {["8 AI-curated snacks", "Snack Profile & tracking", "Free shipping"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  plan="standard"
                  className="w-full py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Start Standard
                </CheckoutButton>
              </div>

              <div className="bg-[var(--navy-light)] rounded-2xl p-6 border-2 border-[var(--primary)] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-1">Premium</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-white">$49</span>
                  <span className="text-gray-400 text-sm">/mo</span>
                  <span className="text-gray-500 text-sm line-through">$59</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {["12 AI-curated snacks", "Deep insights & rare snacks", "Free express shipping"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <CheckoutButton
                  plan="premium"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all"
                >
                  Start Premium
                </CheckoutButton>
              </div>
            </div>

            {/* Satisfaction guarantee */}
            <div className="flex items-center justify-center gap-2 py-3 mb-2">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-gray-400 text-xs">
                Love it or we&apos;ll make it right. Cancel anytime, no questions asked.
              </span>
            </div>
            <p className="text-gray-500 text-[11px] text-center">
              Your MunchMind profile is saved forever, even if you pause.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-[var(--gray-50)]">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[var(--gray-400)]">
              Question {currentQ + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-[var(--primary)]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-[var(--gray-200)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--gray-100)]">
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-8">
            {question.question}
          </h2>

          {question.type === "single" && (
            <div className="space-y-3">
              {question.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSingleSelect(option)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    answers[question.id] === option
                      ? "border-[var(--primary)] bg-[var(--primary)]/5"
                      : "border-[var(--gray-100)] hover:border-[var(--primary)]/30 hover:bg-[var(--gray-50)]"
                  }`}
                >
                  <span className="text-[var(--navy)] font-medium">
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}

          {question.type === "slider" && (
            <div className="space-y-6">
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--gray-200)] rounded-full appearance-none cursor-pointer accent-[var(--primary)]"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-[var(--gray-500)]">
                    {question.sliderLabels?.[0]}
                  </span>
                  <span className="text-sm font-bold text-[var(--primary)]">
                    {sliderValue}%
                  </span>
                  <span className="text-sm text-[var(--gray-500)]">
                    {question.sliderLabels?.[1]}
                  </span>
                </div>
              </div>
              <button
                onClick={handleSliderConfirm}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg transition-all"
              >
                Next
              </button>
            </div>
          )}

          {question.type === "multi" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {question.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleMulti(option)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                      selectedMulti.includes(option)
                        ? "border-[var(--primary)] bg-[var(--primary)]/5 text-[var(--primary)]"
                        : "border-[var(--gray-100)] text-[var(--gray-600)] hover:border-[var(--primary)]/30"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleMultiConfirm}
                disabled={selectedMulti.length === 0}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next ({selectedMulti.length} selected)
              </button>
            </div>
          )}
        </div>

        {currentQ > 0 && (
          <button
            onClick={() => {
              setCurrentQ(currentQ - 1);
              setSliderValue(50);
              setSelectedMulti([]);
            }}
            className="mt-4 text-sm text-[var(--gray-400)] hover:text-[var(--gray-600)] transition-colors mx-auto block"
          >
            Back to previous question
          </button>
        )}
      </div>
    </main>
  );
}
