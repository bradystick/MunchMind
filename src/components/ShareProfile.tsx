"use client";

import { useState } from "react";

interface ShareProfileProps {
  matchScore: number;
  dimensions: { label: string; value: number }[];
}

export default function ShareProfile({ matchScore, dimensions }: ShareProfileProps) {
  const [copied, setCopied] = useState(false);

  const top3 = [...dimensions].sort((a, b) => b.value - a.value).slice(0, 3);
  const shareText = `My MunchMind Snack Profile:\n${matchScore}% Match Score\nTop traits: ${top3.map((d) => `${d.label} ${d.value}%`).join(", ")}\n\nFind your snack personality:`;
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/quiz` : "";

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "My MunchMind Snack Profile", text: shareText, url: shareUrl });
      } catch {
        // User cancelled — do nothing
      }
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      onClick={handleShare}
      className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Copied to clipboard!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          Share Your Snack Profile
        </>
      )}
    </button>
  );
}
