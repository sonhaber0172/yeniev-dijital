"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_FULL_URL } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll(".fade-in").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 150);
    });
  }, []);

  return (
    <section ref={ref} style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden", backgroundColor: "#0A0A0F" }}>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "15%", right: "8%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(123,92,240,0.25), transparent)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "5%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,200,66,0.12), transparent)", filter: "blur(40px)" }} />
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>

          <div className="fade-in" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "50px", fontSize: "12px", fontWeight: 500, color: "#A78BFA", background: "rgba(123,92,240,0.15)", border: "1px solid rgba(123,92,240,0.3)", marginBottom: "28px", width: "fit-content" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#A78BFA", animation: "pulse 2s infinite" }} />
            Adana'nın Tek Mobilya & Çeyiz Reklam Ajansı
          </div>

          <h1 className="fade-in" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.2, color: "#F8F8FF", marginBottom: "24px" }}>
            Mobilya ve Çeyiz{" "}
            <span className="gradient-text">Mağazanıza</span>{" "}
            Her Ay Düzenli Müşteri Getirelim
          </h1>

          <p className="fade-in" style={{ color: "#9B9BB4", fontSize: "17px", lineHeight: "1.7", marginBottom: "40px" }}>
            Adana'nın tek mobilya ve çeyiz nişi Meta reklam ajansı. Organik içerikten ayda 120 mesaj alan firma reklamla 600'e çıkıyor.
          </p>

          <div className="fade-in" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
            <a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-green"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 32px", borderRadius: "50px", fontWeight: 600, color: "white", fontSize: "16px", background: "linear-gradient(135deg, #25D366, #128C7E)", textDecoration: "none", boxShadow: "0 6px 24px rgba(37,211,102,0.3)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp'tan Ücretsiz Analiz Al
            </a>
            <a
              href="#how-it-works"
              style={{ display: "inline-flex", alignItems: "center", padding: "16px 32px", borderRadius: "50px", fontWeight: 600, color: "#A78BFA", fontSize: "16px", border: "1px solid #7B5CF0", textDecoration: "none", transition: "background 0.3s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(123,92,240,0.1)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >
              Nasıl Çalışıyor?
            </a>
          </div>

          <div className="fade-in" style={{ display: "flex", gap: "40px" }}>
            {[
              { value: "50+", label: "Kampanya" },
              { value: "%340", label: "Ortalama Lead Artışı" },
              { value: "Adana", label: "Merkezli" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="gradient-text" style={{ fontSize: "26px", fontWeight: 700 }}>{stat.value}</div>
                <div style={{ color: "#9B9BB4", fontSize: "12px", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "340px", height: "340px" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "24px", transform: "rotate(6deg)", background: "linear-gradient(135deg, #7B5CF0, #A78BFA)", opacity: 0.3 }} />
            <div className="glass" style={{ position: "absolute", inset: "16px", borderRadius: "18px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", padding: "32px" }}>
              <div style={{ fontSize: "52px" }}>📱</div>
              <div style={{ textAlign: "center" }}>
                <div className="gradient-text" style={{ fontSize: "28px", fontWeight: 700 }}>+480</div>
                <div style={{ color: "#9B9BB4", fontSize: "13px", marginTop: "4px" }}>Aylık Ek Müşteri Mesajı</div>
              </div>
              <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, #7B5CF0, transparent)" }} />
              <div style={{ display: "flex", gap: "32px", textAlign: "center" }}>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#F5C842" }}>%340</div>
                  <div style={{ color: "#9B9BB4", fontSize: "11px" }}>Lead Artışı</div>
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#A78BFA" }}>7/24</div>
                  <div style={{ color: "#9B9BB4", fontSize: "11px" }}>Aktif Reklam</div>
                </div>
              </div>
            </div>
            <div className="glass" style={{ position: "absolute", top: "-16px", right: "-16px", width: "64px", height: "64px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", animation: "bounce 2s infinite" }}>🎯</div>
            <div className="glass" style={{ position: "absolute", bottom: "-16px", left: "-16px", width: "56px", height: "56px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", animation: "bounce 2s infinite 0.5s" }}>💰</div>
          </div>
        </div>

      </div>
    </section>
  );
}
