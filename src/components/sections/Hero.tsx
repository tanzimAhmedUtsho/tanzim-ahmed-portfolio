import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { TITLES } from "../../constants";
import { GradientOrb } from "../../utils";

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);

  // Rotating title animation
  useEffect(() => {
    const id = setInterval(
      () => setTitleIdx((i) => (i + 1) % TITLES.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  const socialLinks = [
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    {
      icon: <Mail size={18} />,
      href: "mailto:tanzim.utsho@example.com",
      label: "Email",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Background orbs */}
      <GradientOrb className="w-[700px] h-[700px] bg-blue-700/20 -top-32 -left-40" />
      <GradientOrb className="w-[550px] h-[550px] bg-purple-700/15 bottom-0 -right-24" />
      <GradientOrb className="w-[350px] h-[350px] bg-cyan-500/10 top-1/2 left-[55%]" />

      {/* Dot grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        {/* Availability chip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/[0.08] text-blue-400 text-xs font-mono tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Open to work · Bangladesh
        </motion.div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #60a5fa 0%, #06b6d4 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tanzim Ahmed
          </span>
          <br />
          <span className="text-white">Utsho</span>
        </h1>

        {/* Rotating subtitle */}
        <div className="h-10 overflow-hidden flex items-center justify-center">
          <motion.span
            key={titleIdx}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-xl sm:text-2xl font-mono text-white/50 select-none"
          >
            {"<"} {TITLES[titleIdx]} {"/>"}
          </motion.span>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
          I am a passionate CSE student and developer focused on building
          modern, scalable, and high-performance digital experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
            style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/75 font-medium text-sm hover:border-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>

        {/* Social quick-links */}
        <div className="flex items-center justify-center gap-4 pt-2">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/40 hover:border-blue-500/50 hover:text-cyan-400 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 text-xs font-mono"
      >
        scroll
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
