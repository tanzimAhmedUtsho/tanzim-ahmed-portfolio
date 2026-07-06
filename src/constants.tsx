import {
  Code2,
  Database,
  Wrench,
  GraduationCap,
  Star,
  Briefcase,
} from "lucide-react";
import { NavLink, Skill, Project, TimelineItem } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Story", href: "/story" },
  { label: "Venture", href: "/venture" },
  { label: "Contact", href: "/contact" },
];

export const TITLES: string[] = [
  "Software Engineer",
  "Frontend Developer",
  "React Developer",
];

export const SKILLS: Skill[] = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "GitHub", level: 87, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
  { name: "VS Code", level: 93, category: "Tools" },
  { name: "Node.js", level: 65, category: "Backend" },
  { name: "MongoDB", level: 60, category: "Backend" },
];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured storefront with product listings, cart management, user authentication, and a smooth checkout flow. Optimized for performance and mobile.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=420&fit=crop&auto=format",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Developer Portfolio",
    description:
      "A sleek, animated personal portfolio with dark theme, scroll-driven animations, project showcases, and a working contact form.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&h=420&fit=crop&auto=format",
    tech: ["React", "TypeScript", "Motion", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A modern admin dashboard with real-time data visualisation, user management tables, KPI cards, and dark-mode-first design.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=420&fit=crop&auto=format",
    tech: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2018",
    title: "Started University",
    description:
      "Enrolled in BSc Computer Science & Engineering at Daffodil International University — chose CSE with a clear goal: build things on the web.",
    icon: <GraduationCap size={18} />,
  },
  {
    year: "2022",
    title: "Web Fundamentals",
    description:
      "Mastered HTML, CSS, and vanilla JavaScript through intensive coursework and personal projects. Built first fully responsive static sites.",
    icon: <Code2 size={18} />,
  },
  {
    year: "2023",
    title: "React & TypeScript",
    description:
      "Dived into the React ecosystem — hooks, state management, TypeScript, and Tailwind CSS. Shipped first production-grade front-end applications.",
    icon: <Database size={18} />,
  },
  {
    year: "2024",
    title: "Complex Projects",
    description:
      "Delivered an e-commerce platform and an analytics dashboard. Began exploring full-stack development with Node.js and MongoDB.",
    icon: <Star size={18} />,
  },
  {
    year: "2025 – Now",
    title: "Growing as an Engineer",
    description:
      "Refining software engineering principles, contributing to open source, and targeting a full-stack engineering role at a product-driven company.",
    icon: <Briefcase size={18} />,
  },
];
