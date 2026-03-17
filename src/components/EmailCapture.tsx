"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-2 rounded-full text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          You&apos;re on the list! We&apos;ll let you know when MunchMind launches.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-3 rounded-full border border-white/20 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-white text-[var(--navy)] font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
