"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { WHY_US } from "@/lib/constants";

export default function WhyUs() {
  const ref = useScrollAnimation();

  return (
    <section id="why-us" ref={ref} style={{ backgroundColor: "#0A0A0F", padding: "100px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <div className="fade-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px", color: "#F8F8FF" }}>
            Neden <span className="gradient-text">YeniEv Dijital?</span>
          </h2>
          <p style={{ color: "#9B9BB4", fontSize: "16px", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto" }}>
            Yüzlerce ajans arasında bizi farklı kılan şeyler.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="fade-in glass"
              style={{ borderRadius: "20px", padding: "36px", display: "flex", gap: "20px", alignItems: "flex-start", transition: "all 0.3s ease" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#7B5CF0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(123,92,240,0.25)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(123,92,240,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "36px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#F8F8FF", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#9B9BB4", lineHeight: "1.7" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
