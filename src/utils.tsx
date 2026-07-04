import { useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import { Skill } from "./types";

/**
 * Custom hook for scroll-triggered animations
 */
export function useScrollInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, isInView };
}

/**
 * Gradient orb background decoration
 */
export function GradientOrb({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
    />
  );
}

/**
 * Section label with accent lines
 */
export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase mb-4">
      <span className="w-5 h-px bg-cyan-400" />
      {children}
      <span className="w-5 h-px bg-cyan-400" />
    </p>
  );
}

/**
 * Animated skill bar with progress animation
 */
export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isInView } = useScrollInView();
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-white/80 font-medium">{skill.name}</span>
        <span className="text-xs font-mono text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)",
          }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : "0%" }}
          transition={{ duration: 1.4, delay: index * 0.07, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
