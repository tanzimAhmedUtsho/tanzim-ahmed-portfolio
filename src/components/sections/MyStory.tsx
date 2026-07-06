import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  HeartHandshake,
  Image as ImageIcon,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { Button } from "../../app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../app/components/ui/dialog";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

type TravelMemory = {
  image: string;
  location: string;
  story: string;
  date: string;
};

type MemoryImage = {
  image: string;
  location: string;
  date: string;
  caption: string;
};

type Stat = {
  value: number;
  label: string;
  suffix?: string;
};

const timelineItems: TimelineItem[] = [
  {
    date: "13 July 1998",
    title: "Born in Bangladesh",
    description: "The story began with curiosity, wonder, and a love for making things from nothing.",
  },
  {
    date: "Childhood",
    title: "Curious about technology and creativity",
    description: "Exploring ideas, drawing visuals, and discovering how digital worlds could be built.",
  },
  {
    date: "Student Life",
    title: "First steps into programming",
    description: "Started learning web development and found joy in turning ideas into interfaces and experiences.",
  },
  {
    date: "Frontend Development",
    title: "Focused on React, Next.js, and TypeScript",
    description: "Built polished interfaces with modern UI systems, thoughtful interactions, and product-minded thinking.",
  },
  {
    date: "Entrepreneurship",
    title: "Founded Hide n Hype",
    description: "Created a business rooted in fashion, manufacturing, sourcing, and long-term growth.",
  },
  {
    date: "Future Goal",
    title: "Build globally recognized digital products",
    description: "Creating brands and experiences that carry both beauty and meaning across borders.",
  },
];

const travelMemories: TravelMemory[] = [
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    location: "Santorini, Greece",
    story: "Sunset air, blue domes, and moments that felt timeless.",
    date: "September 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80",
    location: "Kyoto, Japan",
    story: "Quiet alleys, lanterns, and the calm of thoughtful spaces.",
    date: "March 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=80",
    location: "Cappadocia, Turkey",
    story: "A dreamlike horizon that felt like a storybook brought to life.",
    date: "July 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
    location: "Bali, Indonesia",
    story: "A balance of culture, silence, and creative energy.",
    date: "December 2023",
  },
];

const memoryWall: MemoryImage[] = [
  {
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    location: "Bandarban",
    date: "January 2025",
    caption: "Morning mist and endless horizons.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    location: "Cox's Bazar",
    date: "November 2024",
    caption: "Sea breeze, stillness, and a clear mind.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=900&q=80",
    location: "Sajek",
    date: "April 2024",
    caption: "Clouds floating low over the hills.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80",
    location: "Sylhet",
    date: "August 2024",
    caption: "Tea gardens and timeless light.",
  },
];

const funFacts = [
  { icon: <Sparkles size={18} />, title: "Coffee + Coding", description: "The best ideas often arrive between the second and third cup." },
  { icon: <Compass size={18} />, title: "Love Traveling", description: "Every new place adds texture to how I design and build." },
  { icon: <ImageIcon size={18} />, title: "Photography Lover", description: "I collect light, texture, and story-driven frames everywhere I go." },
  { icon: <Zap size={18} />, title: "Frontend Developer", description: "I care deeply about performance, clarity, and elegant interactions." },
  { icon: <HeartHandshake size={18} />, title: "Entrepreneur", description: "Building products with purpose, patience, and long-term vision." },
  { icon: <Star size={18} />, title: "Music While Coding", description: "A calm soundtrack turns focus into flow." },
];

const achievements: Stat[] = [
  { value: 7, label: "Years of Learning", suffix: "+" },
  { value: 25, label: "Projects Built", suffix: "+" },
  { value: 12, label: "Technologies Learned", suffix: "+" },
  { value: 1, label: "Business Founded" },
  { value: 12, label: "Countries/Places Visited", suffix: "+" },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const startTime = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(end * eased));
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function MyStory() {
  const [selectedMemory, setSelectedMemory] = useState<TravelMemory | null>(null);

  return (
    <section id="story" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.15),_transparent_30%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-10 shadow-[0_30px_120px_rgba(2,8,23,0.55)] backdrop-blur-2xl sm:px-8 lg:px-12 lg:py-16"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.12),rgba(6,182,212,0.06),transparent)]" />
          <div className="absolute -top-8 left-10 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-36 w-36 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-cyan-300"
              >
                <Sparkles size={14} />
                My Story
              </motion.div>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Every journey begins with curiosity.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Mine is built through code, creativity, travel, and unforgettable memories — a life shaped by craft, courage, and craft in equal measure.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button variant="outline" size="lg" asChild className="rounded-full px-5 py-3 text-sm">
                <a href="#story-timeline">Explore My Journey</a>
              </Button>
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-3">
            {["Premium Experiences", "Meaningful Milestones", "A Life in Motion"].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/70 backdrop-blur-xl"
              >
                <div className="mb-2 text-xs uppercase tracking-[0.27em] text-cyan-300/80">
                  {idx + 1}
                </div>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.header>

        <motion.section
          id="story-timeline"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Life Timeline</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">A story shaped by growth and wonder</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              These milestones highlight the path from curiosity to craft, from learning to building, and from personal growth to meaningful impact.
            </p>
          </div>

          <div className="relative ml-2 border-l border-white/12 pl-6 sm:pl-8">
            {timelineItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ scale: 1.01, y: -3 }}
                className="group relative mb-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/70 p-5 shadow-lg shadow-black/20 backdrop-blur-xl"
              >
                <div className="absolute -left-[1.4rem] top-6 h-3.5 w-3.5 rounded-full border-4 border-slate-950 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-cyan-300">{item.date}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                    {index + 1}
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Travel Memories</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Places that shaped the way I see the world</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Each destination adds a new perspective, a fresh rhythm, and a memory worth keeping close.
            </p>
          </div>

          <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
            {travelMemories.map((memory, index) => (
              <motion.article
                key={memory.location}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/70 shadow-[0_20px_70px_rgba(2,8,23,0.35)]"
              >
                <img src={memory.image} alt={memory.location} className="h-64 w-full object-cover" />
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{memory.location}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.25em] text-white/50">
                      {memory.date}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-white/65">{memory.story}</p>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    onClick={() => setSelectedMemory(memory)}
                  >
                    View Memories
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Memory Wall</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Moments that deserve to be seen again</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              A soft, cinematic gallery of places, pauses, and personal memories that have shaped my path.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {memoryWall.map((item, index) => (
              <motion.figure
                key={item.location}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-900/70"
              >
                <img src={item.image} alt={item.caption} className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">{item.location}</div>
                  <div className="mt-1 text-sm text-white/70">{item.date}</div>
                  <p className="mt-2 text-sm leading-6 text-white/80">{item.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/85 via-slate-900/80 to-slate-800/70 p-6 shadow-[0_24px_90px_rgba(2,8,23,0.45)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-cyan-300">
                <CalendarDays size={14} />
                13 July 1998
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">A milestone that still feels luminous</h2>
                <p className="max-w-2xl text-base leading-8 text-white/70">
                  Born on 13 July 1998 in Bangladesh, my journey has always been about building something that lasts — a life of learning, growing, and creating with heart.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Born on</div>
                  <div className="mt-2 text-lg font-semibold text-white">13 July 1998</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Country</div>
                  <div className="mt-2 text-lg font-semibold text-white">Bangladesh</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:col-span-2">
                  <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Interesting Fact</div>
                  <div className="mt-2 text-base leading-7 text-white/70">
                    The 1998 FIFA World Cup Final was played on 12 July 1998, just one day before my birthday.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.32)]">
              <div className="text-sm uppercase tracking-[0.35em] text-cyan-300">Personal Quote</div>
              <blockquote className="mt-5 text-2xl leading-10 text-white sm:text-[1.7rem]">
                “I believe every year is another opportunity to learn, build, and leave something meaningful behind.”
              </blockquote>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Life Philosophy</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">What drives me</h2>
            <p className="text-lg leading-9 text-white/70 sm:text-xl">
              I enjoy creating meaningful digital experiences, exploring new places, learning continuously, and building businesses that create real value.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Fun Facts</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">A few details that make life richer</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.3rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 shadow-lg shadow-black/20"
              >
                <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                  {fact.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{fact.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Achievements</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Milestones that continue to grow</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[1.3rem] border border-white/10 bg-gradient-to-br from-cyan-500/[0.12] to-blue-500/[0.06] p-5"
              >
                <div className="text-3xl font-semibold text-white sm:text-4xl">
                  <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                </div>
                <div className="mt-3 text-sm leading-7 text-white/70">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-800/70 px-6 py-16 text-center shadow-[0_24px_90px_rgba(2,8,23,0.45)] backdrop-blur-2xl sm:px-8 lg:px-12"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
              <Trophy size={22} />
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Sora', sans-serif" }}>
              The story is still being written...
            </h2>
          </div>
        </motion.footer>
      </div>

      <Dialog open={Boolean(selectedMemory)} onOpenChange={() => setSelectedMemory(null)}>
        <DialogContent className="max-w-5xl border-white/10 bg-slate-950/95 p-0 text-white">
          {selectedMemory && (
            <>
              <img src={selectedMemory.image} alt={selectedMemory.location} className="h-[60vh] w-full object-cover" />
              <div className="space-y-4 p-6">
                <DialogHeader>
                  <div className="flex items-center justify-between gap-3">
                    <DialogTitle className="text-2xl text-white">{selectedMemory.location}</DialogTitle>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                      {selectedMemory.date}
                    </span>
                  </div>
                  <DialogDescription className="text-base leading-8 text-white/70">
                    {selectedMemory.story}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
