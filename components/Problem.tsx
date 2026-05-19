"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { PROBLEMS } from "@/lib/constants";

export default function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: "#13131E", padding: "100px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <div className="fade-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px", color: "#F8F8FF" }}>
            Bunları{" "}
            <span className="gradient-text">Yaşıyor Musunuz?</span>
          </h2>
          <p style={{ color: "#9B9BB4", fontSize: "16px", lineHeight: "1.7", maxWidth: "520px", margin: "0 auto" }}>
            Adana'daki mobilya ve çeyiz firmalarının çoğu aynı sorunlarla karşılaşıyor. Yalnız değilsiniz.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="fade-in glass"
              style={{ borderRadius: "20px", padding: "36px", display: "flex", flexDirection: "column", gap: "16px", transition: "all 0.3s ease", cursor: "default" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#7B5CF0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(123,92,240,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(123,92,240,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "40px" }}>{problem.icon}</span>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#F8F8FF" }}>{problem.title}</h3>
              <p style={{ fontSize: "14px", color: "#9B9BB4", lineHeight: "1.7" }}>{problem.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
