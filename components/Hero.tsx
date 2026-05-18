"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_FULL_URL } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const elements = ref.current.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 150);
    });
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #7B5CF0, transparent)" }} />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #F5C842, transparent)" }} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full opacity-15 blur-2xl" style={{ background: "radial-gradient(circle, #A78BFA, transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-[#A78BFA] mb-6" style={{ background: "rgba(123,92,240,0.15)", border: "1px solid rgba(123,92,240,0.3)" }}>
            <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
            Adana'nın Tek Mobilya & Çeyiz Reklam Ajansı
          </div>

          <h1 className="fade-in text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Mobilya ve Çeyiz{" "}
            <span className="gradient-text">Mağazanıza</span>{" "}
            Her Ay Düzenli Müşteri Getirelim
          </h1>

          <p className="fade-in text-[#9B9BB4] text-lg mb-8 leading-relaxed">
            Adana'nın tek mobilya ve çeyiz nişi Meta reklam ajansı. Organik içerikten ayda 120 mesaj alan firma reklamla 600'e çıkıyor.
          </p>

          <div className="fade-in flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP_FULL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-lg pulse-green"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp'tan Ücretsiz Analiz Al
            </a>
            <a
              href="#how-it-works"
              className="flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[#A78BFA] text-lg border border-[#7B5CF0] hover:bg-[#7B5CF0]/10 transition-colors"
            >
              Nasıl Çalışıyor?
            </a>
          </div>

          <div className="fade-in flex flex-wrap gap-8 sm:gap-6">
            {[
              { value: "50+", label: "Kampanya" },
              { value: "%340", label: "Ortalama Lead Artışı" },
              { value: "Adana", label: "Merkezli" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                <span className="text-xs text-[#9B9BB4]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center relative">
          <div className="fade-in relative w-80 h-80">
            <div className="absolute inset-0 rounded-3xl rotate-6 opacity-30" style={{ background: "linear-gradient(135deg, #7B5CF0, #A78BFA)" }} />
            <div className="absolute inset-4 rounded-2xl glass flex flex-col items-center justify-center gap-4 p-6">
              <div className="text-5xl">📱</div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">+480</div>
                <div className="text-sm text-[#9B9BB4]">Aylık Ek Müşteri Mesajı</div>
              </div>
              <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #7B5CF0, transparent)" }} />
              <div className="flex gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-[#F5C842]">%340</div>
                  <div className="text-xs text-[#9B9BB4]">Lead Artışı</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#A78BFA]">7/24</div>
                  <div className="text-xs text-[#9B9BB4]">Aktif Reklam</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl animate-bounce">🎯</div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl animate-bounce" style={{ animationDelay: "0.5s" }}>💰</div>
          </div>
        </div>
      </div>
    </section>
  );
}
