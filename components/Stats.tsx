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
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
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
    <div
      ref={itemRef}
      className="fade-in glass"
      style={{ borderRadius: "20px", padding: "48px 24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <div className="gradient-text" style={{ fontSize: "clamp(40px, 6vw, 60px)", fontWeight: 700, lineHeight: 1 }}>
        {count}{stat.suffix}
      </div>
      <div style={{ color: "#9B9BB4", fontSize: "14px" }}>{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} style={{ background: "linear-gradient(135deg, #13131E, #1A1A2E)", padding: "100px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <div className="fade-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#F8F8FF" }}>
            Rakamlar <span className="gradient-text">Konuşuyor</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}
