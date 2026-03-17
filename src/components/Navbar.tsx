"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--navy)] flex items-center justify-center overflow-hidden p-1">
              <Image
                src="/logo.png"
                alt="MunchMind logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-[var(--navy)]">
              Munch<span className="gradient-text">Mind</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className="text-[var(--gray-600)] hover:text-[var(--navy)] transition-colors text-sm font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/snackery"
              className="text-[var(--gray-600)] hover:text-[var(--navy)] transition-colors text-sm font-medium"
            >
              Snackery
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--gray-600)] hover:text-[var(--navy)] transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-[var(--gray-600)] hover:text-[var(--navy)] transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/corporate"
              className="text-[var(--gray-600)] hover:text-[var(--navy)] transition-colors text-sm font-medium"
            >
              For Business
            </Link>
            <Link
              href="/quiz"
              className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all hover:-translate-y-0.5"
            >
              Take the Quiz
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-[var(--navy)] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-[var(--navy)] transition-all ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-[var(--navy)] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link
                href="/how-it-works"
                className="text-[var(--gray-600)] hover:text-[var(--navy)] px-2 py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/snackery"
                className="text-[var(--gray-600)] hover:text-[var(--navy)] px-2 py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Snackery
              </Link>
              <Link
                href="/pricing"
                className="text-[var(--gray-600)] hover:text-[var(--navy)] px-2 py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-[var(--gray-600)] hover:text-[var(--navy)] px-2 py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/corporate"
                className="text-[var(--gray-600)] hover:text-[var(--navy)] px-2 py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                For Business
              </Link>
              <Link
                href="/quiz"
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-6 py-2.5 rounded-full text-sm font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
