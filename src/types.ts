import { ReactNode } from "react";

export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Tools" | "Backend";
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
