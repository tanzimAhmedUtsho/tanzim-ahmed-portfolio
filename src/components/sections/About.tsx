import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Code2, ArrowRight } from "lucide-react";
import { SectionLabel } from "../../utils";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });

  const infoItems = [
    { label: "University", value: "Daffodil Intl. University" },
    { label: "Degree", value: "BSc in CSE" },
    { label: "Location", value: "Dhaka, Bangladesh" },
    { label: "Status", value: "Open to Work" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          ref={aboutRef}
          className="grid md:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center"
        >
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: aboutInView ? 1 : 0,
              x: aboutInView ? 0 : -40,
            }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[360px] mx-auto md:mx-0 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=625&fit=crop&auto=format"
                alt="Tanzim Ahmed Utsho"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050f]/70 via-transparent to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    }}
                  >
                    <Code2 size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      Tanzim Ahmed Utsho
                    </p>
                    <p className="text-xs text-white/50">CSE Student · DIU</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative rings */}
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full border border-blue-500/25 -z-10" />
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full border border-cyan-500/15 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: aboutInView ? 1 : 0,
              x: aboutInView ? 0 : 40,
            }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <SectionLabel>About Me</SectionLabel>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mt-1"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Crafting digital experiences with{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  purpose
                </span>
              </h2>
            </div>

            <p className="text-white/55 leading-relaxed text-[15px]">
              I&apos;m Tanzim, a Computer Science & Engineering student at
              Daffodil International University, passionate about turning complex
              problems into clean, elegant software. I thrive at the intersection
              of design and engineering — writing code that feels as intentional
              as it performs.
            </p>

            <p className="text-white/55 leading-relaxed text-[15px]">
              My journey began with a curiosity about how the web works and grew
              into a deep love for React, TypeScript, and modern front-end
              architecture. I&apos;m actively expanding into back-end development
              and targeting a software engineering role at a product-driven
              company.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {infoItems.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/30 transition-colors duration-300"
                >
                  <p className="text-[10px] font-mono text-white/35 uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
            >
              Let&apos;s collaborate <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
