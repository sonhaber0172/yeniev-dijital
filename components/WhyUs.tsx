"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { WHY_US } from "@/lib/constants";

export default function WhyUs() {
  const ref = useScrollAnimation();

  return (
    <section id="why-us" ref={ref} className="py-32 px-6 bg-[#13131E]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Neden <span className="gradient-text">YeniEv Dijital?</span>
          </h2>
          <p className="text-[#9B9BB4] max-w-xl mx-auto text-base leading-relaxed">
            Yüzlerce ajans arasında bizi farklı kılan şeyler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="fade-in glass rounded-2xl p-8 flex gap-6 items-start transition-all duration-300 hover:border-[#7B5CF0] hover:shadow-[0_0_24px_rgba(123,92,240,0.2)] group"
            >
              <span className="text-4xl flex-shrink-0 mt-1">{item.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-[#F8F8FF] mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9B9BB4] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
