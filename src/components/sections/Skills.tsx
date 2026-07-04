import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Wrench, Database } from "lucide-react";
import { SKILLS } from "../../constants";
import { SectionLabel, SkillBar, GradientOrb } from "../../utils";
import type { Skill } from "../../types";

export default function Skills() {
  const [activeSkillCat, setActiveSkillCat] = useState<Skill["category"]>(
    "Frontend"
  );

  const cats: Skill["category"][] = ["Frontend", "Tools", "Backend"];

  const catIcons: Record<string, React.ReactNode> = {
    Frontend: <Globe size={18} />,
    Tools: <Wrench size={18} />,
    Backend: <Database size={18} />,
  };

  return (
    <section id="skills" className="py-32 px-6 relative">
      <GradientOrb className="w-[450px] h-[450px] bg-purple-600/10 top-0 right-0" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Expertise</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Skills & Technologies
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {cats.map((cat) => {
            const active = activeSkillCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveSkillCat(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? "text-white shadow-lg shadow-blue-500/20"
                    : "border border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                }`}
                style={
                  active
                    ? {
                        background:
                          "linear-gradient(135deg, #3b82f6, #06b6d4)",
                      }
                    : {}
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cats.map((cat, catIdx) => {
            const catSkills = SKILLS.filter((s) => s.category === cat);
            const isActive = activeSkillCat === cat;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm space-y-5 transition-all duration-300 ${
                  isActive
                    ? "border-blue-500/40 bg-blue-500/[0.06] shadow-xl shadow-blue-500/10"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/15"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    }}
                  >
                    {catIcons[cat]}
                  </div>
                  <h3
                    className="text-base font-semibold text-white"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {cat}
                  </h3>
                  <span className="ml-auto text-xs font-mono text-white/30">
                    {catSkills.length} skills
                  </span>
                </div>
                <div className="space-y-4">
                  {catSkills.map((skill, idx) => (
                    <SkillBar key={skill.name} skill={skill} index={idx} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
