import { motion, useInView } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../constants";
import { SectionLabel, useScrollInView } from "../../utils";
import type { Project } from "../../types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isInView } = useScrollInView();
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/[0.08] flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-900 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050f] via-transparent to-transparent" />
        {/* Tech count badge */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-white/60 font-mono">
          {project.tech.length} techs
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3
          className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <a
            href={project.live}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            }}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github size={14} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-white/45 mt-4 max-w-lg mx-auto text-sm">
            A curated selection of things I&apos;ve built — from commerce
            platforms to analytics dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
