"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_FULL_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Nasıl Çalışır?", href: "#how-it-works" },
    { label: "Neden Biz?", href: "#why-us" },
    { label: "SSS", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-1 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#0A0A0F]/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">YeniEv</span>
          <span style={{ fontSize: "11px", color: "#9B9BB4", borderLeft: "1px solid rgba(123,92,240,0.4)", paddingLeft: "10px", lineHeight: "1.4" }}>Dijital<br /><span style={{ color: "#A78BFA", fontSize: "10px", letterSpacing: "1px" }}>REKLAM AJANSI</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#9B9BB4] hover:text-[#F8F8FF] transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white pulse-purple"
            style={{ background: "linear-gradient(135deg, #7B5CF0, #A78BFA)" }}
          >
            Ücretsiz Analiz Al
          </a>
        </div>

        <button
          className="md:hidden text-[#F8F8FF] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#13131E] border-t border-[#7B5CF0]/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#9B9BB4] hover:text-[#F8F8FF] transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full text-sm font-semibold text-white text-center"
            style={{ background: "linear-gradient(135deg, #7B5CF0, #A78BFA)" }}
            onClick={() => setMenuOpen(false)}
          >
            Ücretsiz Analiz Al
          </a>
        </div>
      )}
    </nav>
  );
}
