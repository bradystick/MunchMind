import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyQuizCTA from "@/components/StickyQuizCTA";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MunchMind — AI-Curated Snack Boxes, Tailored to You",
  description:
    "Take the quiz. Build your Snack Profile. Get a box of snacks curated by AI that gets smarter every month. What's on your MunchMind?",
  keywords: [
    "snack subscription",
    "AI snack box",
    "personalized snacks",
    "snack delivery",
    "MunchMind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
        <StickyQuizCTA />
        <Footer />
      </body>
    </html>
  );
}
