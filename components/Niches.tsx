"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { NICHES } from "@/lib/constants";

export default function Niches() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: "#0A0A0F", padding: "100px 24px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        <div className="fade-in" style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "50px", fontSize: "12px", fontWeight: 600, color: "#F5C842", background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.25)", marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>
            Uzmanlık Alanımız
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "16px", color: "#F8F8FF" }}>
            Hangi Ürünleri Satan{" "}
            <span className="gradient-text">Firmalara Hizmet Veriyoruz?</span>
          </h2>
          <p style={{ color: "#9B9BB4", fontSize: "16px", lineHeight: "1.7", maxWidth: "560px", margin: "0 auto" }}>
            Adana'da bu ürün kategorilerinden herhangi birini satan bir mağazanız varsa, tam da size göre bir sistemimiz var.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {NICHES.map((niche) => (
            <div
              key={niche.title}
              className="fade-in glass"
              style={{ borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "16px", transition: "all 0.3s ease" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#7B5CF0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(123,92,240,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(123,92,240,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "36px" }}>{niche.icon}</div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#F8F8FF" }}>{niche.title}</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", margin: 0, padding: 0, listStyle: "none" }}>
                {niche.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#9B9BB4" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "linear-gradient(135deg, #7B5CF0, #A78BFA)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ marginTop: "48px", textAlign: "center" }}>
          <p style={{ color: "#9B9BB4", fontSize: "14px" }}>
            Bu kategorilerden birinde satış yapıyorsanız →{" "}
            <a href="#how-it-works" style={{ color: "#A78BFA", textDecoration: "none", fontWeight: 600 }}>
              Nasıl çalıştığımıza bakın
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
