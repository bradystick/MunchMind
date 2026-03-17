import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="pt-24 min-h-screen bg-[var(--navy)] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          You&apos;re in!
        </h1>
        <p className="text-gray-400 text-lg mb-2">
          Your MunchMind subscription is active.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          We&apos;re already building your first box based on your Snack Profile.
          You&apos;ll get an email with tracking as soon as it ships.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/snackery"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all"
          >
            Pin Snacks to Your Box
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
