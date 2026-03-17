"use client";

import { useEffect, useState } from "react";

// Set your launch date here (midnight UTC)
const LAUNCH_DATE = new Date("2026-04-15T00:00:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function LaunchCountdown({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-3">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-3">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 min-w-[56px] border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
                  {String(u.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[10px] text-gray-400 mt-1 block">{u.label}</span>
            </div>
            {i < units.length - 1 && (
              <span className="text-white/30 text-2xl font-bold -mt-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
