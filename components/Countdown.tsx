"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { Divider } from "./Divider";

// 15 August 2026, 13:00 Moscow time (UTC+3)
const WEDDING_DATE = new Date("2026-08-15T11:00:00+03:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Дней" },
  { key: "hours", label: "Часов" },
  { key: "minutes", label: "Минут" },
  { key: "seconds", label: "Секунд" },
];

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full bg-parchment px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="tracked-label text-[11px] text-taupe sm:text-xs">
            До торжества
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-3">
          <Divider />
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <div className="flex items-start justify-center divide-x divide-hairline">
            {UNITS.map((unit, i) => (
              <div key={unit.key} className="flex flex-1 flex-col items-center px-3 sm:px-8">
                <span
                  className="font-display text-4xl font-light tabular-nums text-espresso sm:text-6xl"
                  suppressHydrationWarning
                >
                  {timeLeft ? String(timeLeft[unit.key]).padStart(2, "0") : "—"}
                </span>
                <span className="tracked-label mt-3 text-[10px] text-taupe sm:text-xs">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
