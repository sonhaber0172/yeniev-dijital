"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/lib/hooks";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollAnimation();

  return (
    <section id="faq" ref={ref} style={{ backgroundColor: "#13131E", padding: "100px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        <div className="fade-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px", color: "#F8F8FF" }}>
            Sık Sorulan <span className="gradient-text">Sorular</span>
          </h2>
          <p style={{ color: "#9B9BB4", fontSize: "16px", lineHeight: "1.7" }}>
            Aklınızdaki soruların cevapları burada.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="fade-in glass"
              style={{ borderRadius: "16px", overflow: "hidden" }}
            >
              <button
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 28px", textAlign: "left", background: "transparent", border: "none", cursor: "pointer" }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span style={{ fontWeight: 500, color: "#F8F8FF", fontSize: "15px", paddingRight: "24px", lineHeight: "1.5" }}>{faq.question}</span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #7B5CF0, #A78BFA)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                    transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div style={{ maxHeight: openIndex === index ? "200px" : "0px", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                <p style={{ padding: "0 28px 24px", color: "#9B9BB4", fontSize: "14px", lineHeight: "1.7" }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
