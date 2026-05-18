"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" ref={ref} className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sistemi Nasıl <span className="gradient-text">Çalışıyor?</span>
          </h2>
          <p className="text-[#9B9BB4] max-w-xl mx-auto">
            3 adımda firmanızı büyütüyoruz. Karmaşık değil, şeffaf ve sonuç odaklı.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5" style={{ background: "linear-gradient(90deg, #7B5CF0, #A78BFA)" }} />
          <div className="md:hidden absolute left-10 top-10 bottom-10 w-0.5" style={{ background: "linear-gradient(180deg, #7B5CF0, #A78BFA)" }} />

          {STEPS.map((step) => (
            <div key={step.number} className="fade-in flex-1 flex flex-col md:items-center md:text-center text-left pl-20 md:pl-6 pr-6 relative">
              <div
                className="absolute md:relative left-0 md:left-auto top-0 md:top-auto w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-0 md:mb-6 z-10 flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7B5CF0, #A78BFA)", boxShadow: "0 0 25px rgba(123,92,240,0.5)" }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-[#F8F8FF] mb-3">{step.title}</h3>
              <p className="text-[#9B9BB4] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
