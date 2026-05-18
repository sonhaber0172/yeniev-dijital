"use client";

import { useScrollAnimation } from "@/lib/hooks";
import { PROBLEMS } from "@/lib/constants";

export default function Problem() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 bg-[#13131E]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bunları <span className="gradient-text">Yaşıyor Musunuz?</span>
          </h2>
          <p className="text-[#9B9BB4] max-w-xl mx-auto">
            Adana'daki mobilya ve çeyiz firmalarının çoğu aynı sorunlarla karşılaşıyor. Yalnız değilsiniz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="fade-in glass rounded-2xl p-6 flex flex-col gap-3 cursor-default transition-all duration-300 hover:border-[#7B5CF0] hover:shadow-[0_0_20px_rgba(123,92,240,0.3)] group"
            >
              <span className="text-4xl">{problem.icon}</span>
              <h3 className="font-semibold text-[#F8F8FF] group-hover:text-[#A78BFA] transition-colors">
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
