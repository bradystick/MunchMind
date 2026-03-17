import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="MunchMind logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-xl font-bold">MunchMind</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              AI-curated snack boxes that learn your taste. Every box gets
              smarter. Every bite gets better.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              What&apos;s on your MunchMind?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300 uppercase tracking-wider">
              Product
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/quiz"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Take the Quiz
              </Link>
              <Link
                href="/snackery"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Snackery
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300 uppercase tracking-wider">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="/corporate"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                For Business
              </Link>
              <a
                href="https://instagram.com/munchmind_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@munchmind_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} MunchMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
