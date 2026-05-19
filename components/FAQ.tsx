"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/lib/hooks";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollAnimation();

  return (
    <section id="faq" ref={ref} className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Sık Sorulan <span className="gradient-text">Sorular</span>
          </h2>
          <p className="text-[#9B9BB4] text-base leading-relaxed">
            Aklınızdaki soruların cevapları burada.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="fade-in glass rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-7 text-left hover:bg-[#7B5CF0]/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-[#F8F8FF] pr-6 text-base">{faq.question}</span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #7B5CF0, #A78BFA)",
                    transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === index ? "200px" : "0px" }}
              >
                <p className="px-7 pb-7 text-[#9B9BB4] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
