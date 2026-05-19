"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" ref={ref} style={{ backgroundColor: "#0A0A0F", padding: "100px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div className="fade-in" style={{ textAlign: "center", marginBottom: "72px" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px", color: "#F8F8FF" }}>
            Sistemi Nasıl{" "}
            <span className="gradient-text">Çalışıyor?</span>
          </h2>
          <p style={{ color: "#9B9BB4", fontSize: "16px", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto" }}>
            3 adımda firmanızı büyütüyoruz. Karmaşık değil, şeffaf ve sonuç odaklı.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="fade-in glass"
              style={{
                borderRadius: "20px",
                padding: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7B5CF0, #A78BFA)",
                  boxShadow: "0 0 28px rgba(123,92,240,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {step.number}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#F8F8FF", marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ fontSize: "15px", color: "#9B9BB4", lineHeight: "1.7" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
