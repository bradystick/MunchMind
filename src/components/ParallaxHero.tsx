"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const directionRef = useRef<"forward" | "reverse">("forward");
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pingPong = useCallback((timestamp: number) => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(pingPong);
      return;
    }

    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = (timestamp - lastTimeRef.current) / 1000;
    lastTimeRef.current = timestamp;

    if (directionRef.current === "forward") {
      // Let the browser play normally
      if (video.paused) video.play();
      if (video.currentTime >= video.duration - 0.05) {
        directionRef.current = "reverse";
        video.pause();
      }
    } else {
      // Manually step backwards
      video.pause();
      const newTime = video.currentTime - delta;
      if (newTime <= 0.05) {
        video.currentTime = 0;
        directionRef.current = "forward";
        video.play();
      } else {
        video.currentTime = newTime;
      }
    }

    rafRef.current = requestAnimationFrame(pingPong);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(pingPong);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pingPong]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--navy)]">
      {/* Video background — moves at 30% scroll speed for parallax depth */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/40 to-[var(--navy)]/85" />
      </div>

      {/* Content moves at normal speed — creates depth against slower video */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
