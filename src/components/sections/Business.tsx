import { motion } from "motion/react";
import {
  Palette,
  Package,
  Monitor,
  ShoppingBag,
  Target,
  Zap,
  TrendingUp,
  Star,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import { SectionLabel, GradientOrb } from "../../utils";

export default function Business() {
  const responsibilities = [
    { label: "Brand Development", icon: <Palette size={16} /> },
    { label: "Product Design", icon: <Package size={16} /> },
    { label: "Website Development", icon: <Monitor size={16} /> },
    { label: "Mfg. & Sourcing", icon: <ShoppingBag size={16} /> },
    { label: "Business Strategy", icon: <Target size={16} /> },
    { label: "Digital Presence", icon: <Zap size={16} /> },
  ];

  const stats = [
    {
      label: "Founded",
      value: "2026",
      icon: <TrendingUp size={20} />,
      desc: "Year established",
    },
    {
      label: "Role",
      value: "Co-Founder",
      icon: <Star size={20} />,
      desc: "Co-founder & CEO",
    },
    {
      label: "Industry",
      value: "Fashion",
      icon: <ShoppingBag size={20} />,
      desc: "& Lifestyle",
    },
    {
      label: "Focus",
      value: "Premium",
      icon: <BarChart3 size={20} />,
      desc: "Quality products",
    },
  ];

  const industries = ["Activewear", "Leather Goods", "Accessories", "Fashion & Lifestyle"];

  return (
    <section id="venture" className="py-32 px-6 relative overflow-hidden">
      <GradientOrb className="w-[450px] h-[450px] bg-blue-600/10 top-0 right-0" />
      <GradientOrb className="w-[350px] h-[350px] bg-cyan-600/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>Business Venture</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Beyond the {" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #06b6d4 50%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Code
            </span>
          </h2>
          <p className="text-white/45 mt-4 max-w-md mx-auto text-sm">
            Engineering mindset applied to entrepreneurship.
          </p>
        </div>

        {/* Main split layout */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* ── Left: Description + Responsibilities ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Brand hero card */}
            <div className="relative rounded-3xl overflow-hidden p-8 border border-white/[0.08] bg-white/[0.03]">
              {/* Monogram + name row */}
              <div className="flex items-center gap-5 mb-7">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #38bdf8, #0ea5e9, #06b6d4)",
                    boxShadow: "0 0 40px rgba(56,189,248,0.25)",
                  }}
                >
                  <span
                    className="text-xl font-bold text-[#1a0e00] tracking-tighter select-none"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    H&amp;H
                  </span>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    Hide n Hype
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-sky-400/25 bg-sky-500/10 text-sky-200">
                     Co-Founder
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-white/40 font-mono">
                      Est. 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/60 leading-relaxed text-[15px]">
                Alongside my journey in Computer Science &amp; Engineering, I am
                building my own brand,{" "}
                <span className="text-white font-medium">Hide n Hype</span>,
                focused on premium activewear, leather goods, and accessories.
                This venture has strengthened my skills in entrepreneurship,
                branding, product sourcing, manufacturing, and digital business
                development.
              </p>

              {/* Industry tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {industries.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border font-mono"
                    style={{
                      color: "rgba(56,189,248,0.95)",
                      borderColor: "rgba(56,189,248,0.2)",
                      background: "rgba(56,189,248,0.06)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative corner glow */}
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(56,189,248,0.12)" }}
              />
            </div>

            {/* Responsibilities grid */}
            <div>
              <p
                className="text-xs font-mono uppercase tracking-widest mb-4"
                style={{ color: "rgba(56,189,248,0.7)" }}
              >
                Responsibilities
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {responsibilities.map(({ label, icon }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="group p-4 rounded-xl border border-white/[0.08] bg-white/[0.04] cursor-default transition-all duration-300"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(56,189,248,0.4)";
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(56,189,248,0.09)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 8px 32px rgba(56,189,248,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(56,189,248,0.15)";
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(56,189,248,0.04)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "none";
                    }}
                  >
                    <div
                      className="mb-2 w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        color: "#7dd3fc",
                        background: "rgba(56,189,248,0.12)",
                      }}
                    >
                      {icon}
                    </div>
                    <p className="text-xs text-white/70 font-medium leading-tight">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Stats + CTAs ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value, icon, desc }, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden cursor-default"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(56,189,248,0.45)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 12px 40px rgba(56,189,248,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(56,189,248,0.2)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Glow on hover */}
                  <div
                    aria-hidden
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "rgba(56,189,248,0.15)" }}
                  />

                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(56,189,248,0.3), rgba(56,189,248,0.1))",
                      color: "#7dd3fc",
                    }}
                  >
                    {icon}
                  </div>
                  <p
                    className="text-2xl font-bold tracking-tight"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      background:
                        "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-[10px] font-mono text-white/35 uppercase tracking-widest mt-0.5">
                    {label}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy card */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <p
                className="text-xs font-mono uppercase tracking-widest mb-3"
                style={{ color: "rgba(56,189,248,0.65)" }}
              >
                Brand Philosophy
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Hide n Hype sits at the intersection of raw performance and
                refined aesthetics — where activewear meets artisanal leather
                craft. Every product is a statement that you refuse to
                compromise between function and luxury.
              </p>
              <div
                className="mt-4 h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(56,189,248,0.4), transparent)",
                }}
              />
              <p
                className="mt-4 text-xs italic"
                style={{ color: "rgba(56,189,248,0.7)" }}
              >
                &ldquo;Performance is the new luxury.&rdquo;
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="https://www.hidenhype.com/"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.2)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 30px rgba(56,189,248,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 20px rgba(59,130,246,0.2)")
                }
              >
                <ShoppingBag size={15} />
                Visit Brand
              </a>
              <a
                href="#projects"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 border border-white/[0.08] bg-white/[0.04] text-white/70 hover:text-white"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(56,189,248,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(56,189,248,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.04)";
                }}
              >
                <ExternalLink size={15} />
                View Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
