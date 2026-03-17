import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="pt-24 min-h-screen bg-[var(--gray-50)] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--gray-100)] flex items-center justify-center">
          <svg className="w-10 h-10 text-[var(--gray-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[var(--navy)] mb-3">
          No worries!
        </h1>
        <p className="text-[var(--gray-500)] mb-2">
          Your checkout was cancelled. No charges were made.
        </p>
        <p className="text-[var(--gray-400)] text-sm mb-8">
          Your Snack Profile is saved — come back whenever you&apos;re ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all"
          >
            View Plans Again
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border-2 border-[var(--navy)] text-[var(--navy)] font-semibold hover:bg-[var(--navy)] hover:text-white transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
