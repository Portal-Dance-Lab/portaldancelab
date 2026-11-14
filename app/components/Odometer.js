"use client";

import { useEffect, useRef, useState } from "react";

const SPINS = 2; // full 0-9 laps before landing, for the slot-machine feel

/**
 * Slot-machine style number roll. Server HTML already shows the final value
 * (so no-JS visitors and search engines see "11×", not a blur of digits);
 * once the strip scrolls into view, each digit spins up from 0 and lands.
 *
 * @param {{ value: string, className?: string }} props
 */
export default function Odometer({ value, className = "" }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState("final"); // final | armed | run

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    setPhase("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // two frames: let the "armed" (all zeros) position paint first
          requestAnimationFrame(() => requestAnimationFrame(() => setPhase("run")));
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let digitIndex = 0;
  return (
    <span ref={ref} className={`odo odo--${phase} ${className}`}>
      <span className="sr-only">{value}</span>
      <span className="odo-face" aria-hidden="true">
        {[...value].map((ch, i) => {
          if (!/\d/.test(ch)) return <span key={i} className="odo-char">{ch}</span>;
          const d = Number(ch);
          const stop = SPINS * 10 + d;
          const delay = digitIndex++ * 120;
          return (
            <span key={i} className="odo-cell">
              <span
                className="odo-strip"
                style={{ "--stop": stop, "--delay": `${delay}ms` }}
              >
                {Array.from({ length: SPINS * 10 + 10 }, (_, n) => (
                  <span key={n}>{n % 10}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
