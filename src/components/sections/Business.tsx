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
      value: "2025",
      icon: <TrendingUp size={20} />,
      desc: "Year established",
    },
    {
      label: "Role",
      value: "Founder",
      icon: <Star size={20} />,
      desc: "Solo founder & CEO",
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
      {/* Luxury warm glow */}
      <div
        aria-hidden
        className="absolute w-[600px] h-[600px] bg-amber-500/[0.07] top-0 right-0 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute w-[400px] h-[400px] bg-yellow-600/[0.05] bottom-0 left-0 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Subtle noise texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase mb-4"
            style={{ color: "#d4a853" }}
          >
            <span className="w-5 h-px" style={{ background: "#d4a853" }} />
            Business Venture
            <span className="w-5 h-px" style={{ background: "#d4a853" }} />
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Beyond the{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #d4a853 0%, #f59e0b 50%, #fcd34d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Code
            </span>
          </h2>
          <p className="text-white/40 mt-3 text-sm max-w-md mx-auto">
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
            <div
              className="relative rounded-3xl overflow-hidden p-8 border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                borderColor: "rgba(212,168,83,0.25)",
              }}
            >
              {/* Monogram + name row */}
              <div className="flex items-center gap-5 mb-7">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #92681e, #d4a853, #f5d485)",
                    boxShadow: "0 0 40px rgba(212,168,83,0.3)",
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
                    <span
                      className="text-xs font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                      style={{
                        color: "#d4a853",
                        borderColor: "rgba(212,168,83,0.35)",
                        background: "rgba(212,168,83,0.08)",
                      }}
                    >
                      Founder
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
                      color: "rgba(212,168,83,0.9)",
                      borderColor: "rgba(212,168,83,0.2)",
                      background: "rgba(212,168,83,0.05)",
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
                style={{ background: "rgba(212,168,83,0.12)" }}
              />
            </div>

            {/* Responsibilities grid */}
            <div>
              <p
                className="text-xs font-mono uppercase tracking-widest mb-4"
                style={{ color: "rgba(212,168,83,0.7)" }}
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
                    className="group p-4 rounded-xl border cursor-default transition-all duration-300"
                    style={{
                      borderColor: "rgba(212,168,83,0.15)",
                      background: "rgba(212,168,83,0.04)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(212,168,83,0.4)";
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(212,168,83,0.09)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 8px 32px rgba(212,168,83,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(212,168,83,0.15)";
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(212,168,83,0.04)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "none";
                    }}
                  >
                    <div
                      className="mb-2 w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        color: "#d4a853",
                        background: "rgba(212,168,83,0.12)",
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
                  className="group relative p-5 rounded-2xl border overflow-hidden cursor-default"
                  style={{
                    borderColor: "rgba(212,168,83,0.2)",
                    background:
                      "linear-gradient(135deg, rgba(212,168,83,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(212,168,83,0.45)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 12px 40px rgba(212,168,83,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(212,168,83,0.2)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Glow on hover */}
                  <div
                    aria-hidden
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "rgba(212,168,83,0.15)" }}
                  />

                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212,168,83,0.3), rgba(212,168,83,0.1))",
                      color: "#d4a853",
                    }}
                  >
                    {icon}
                  </div>
                  <p
                    className="text-2xl font-bold tracking-tight"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      background:
                        "linear-gradient(135deg, #d4a853, #fcd34d)",
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
            <div
              className="p-6 rounded-2xl border"
              style={{
                borderColor: "rgba(212,168,83,0.18)",
                background:
                  "linear-gradient(135deg, rgba(212,168,83,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              <p
                className="text-xs font-mono uppercase tracking-widest mb-3"
                style={{ color: "rgba(212,168,83,0.65)" }}
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
                    "linear-gradient(90deg, rgba(212,168,83,0.4), transparent)",
                }}
              />
              <p
                className="mt-4 text-xs italic"
                style={{ color: "rgba(212,168,83,0.7)" }}
              >
                &ldquo;Performance is the new luxury.&rdquo;
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium text-[#1a0e00] transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #d4a853, #f5d485)",
                  boxShadow: "0 4px 20px rgba(212,168,83,0.2)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 30px rgba(212,168,83,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 20px rgba(212,168,83,0.2)")
                }
              >
                <ShoppingBag size={15} />
                Visit Brand
              </a>
              <a
                href="#projects"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(212,168,83,0.3)",
                  color: "rgba(212,168,83,0.85)",
                  background: "rgba(212,168,83,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(212,168,83,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(212,168,83,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(212,168,83,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(212,168,83,0.04)";
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
