"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ target, duration = 1500, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse target: "50+" → num=50, suffix="+"
  const match = target.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);

          const start = performance.now();
          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * num);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [hasAnimated, num, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {hasAnimated ? display : `0${suffix}`}
    </span>
  );
}
