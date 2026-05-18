"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/lib/hooks";
import { STATS } from "@/lib/constants";

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat }: { stat: (typeof STATS)[0] }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(stat.value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={itemRef} className="text-center fade-in">
      <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-[#9B9BB4] text-sm">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #13131E, #1A1A2E)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Rakamlar <span className="gradient-text">Konuşuyor</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
