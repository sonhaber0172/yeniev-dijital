"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { PROBLEMS } from "@/lib/constants";

export default function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 px-6 bg-[#13131E]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Bunları <span className="gradient-text">Yaşıyor Musunuz?</span>
          </h2>
          <p className="text-[#9B9BB4] max-w-xl mx-auto text-base leading-relaxed">
            Adana'daki mobilya ve çeyiz firmalarının çoğu aynı sorunlarla karşılaşıyor. Yalnız değilsiniz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="fade-in glass rounded-2xl p-8 flex flex-col gap-4 cursor-default transition-all duration-300 hover:border-[#7B5CF0] hover:shadow-[0_0_24px_rgba(123,92,240,0.3)] group"
            >
              <span className="text-4xl">{problem.icon}</span>
              <h3 className="text-lg font-semibold text-[#F8F8FF] group-hover:text-[#A78BFA] transition-colors">
                {problem.title}
              </h3>
              <p className="text-sm text-[#9B9BB4] leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
