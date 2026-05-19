"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Sistemi Nasıl <span className="gradient-text">Çalışıyor?</span>
          </h2>
          <p className="text-[#9B9BB4] max-w-xl mx-auto text-base leading-relaxed">
            3 adımda firmanızı büyütüyoruz. Karmaşık değil, şeffaf ve sonuç odaklı.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`fade-in flex flex-col sm:flex-row items-center gap-8 ${index % 2 !== 0 ? "sm:flex-row-reverse" : ""}`}
            >
              <div
                className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #7B5CF0, #A78BFA)",
                  boxShadow: "0 0 30px rgba(123,92,240,0.5)",
                }}
              >
                {step.number}
              </div>
              <div className={`flex-1 glass rounded-2xl p-8 ${index % 2 !== 0 ? "sm:text-right" : ""}`}>
                <h3 className="text-xl font-semibold text-[#F8F8FF] mb-3">{step.title}</h3>
                <p className="text-[#9B9BB4] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
