import { motion } from "motion/react";
import { TIMELINE } from "../../constants";
import { SectionLabel, GradientOrb } from "../../utils";

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 relative">
      <GradientOrb className="w-[450px] h-[450px] bg-blue-700/10 bottom-10 -left-24" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Background</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            My Journey
          </h2>
        </div>

        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[18px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/60 via-cyan-400/30 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {TIMELINE.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex md:items-start gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon node — on the spine */}
                  <div
                    className="absolute left-0 md:left-1/2 top-4 w-9 h-9 -translate-x-[4.5px] md:-translate-x-1/2 rounded-full flex items-center justify-center text-white z-10 shadow-lg shadow-blue-500/25 flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-blue-500/30 transition-colors duration-300 group">
                      <span className="text-[10px] font-mono text-cyan-400 tracking-[0.18em] uppercase">
                        {item.year}
                      </span>
                      <h3
                        className="text-base font-semibold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
