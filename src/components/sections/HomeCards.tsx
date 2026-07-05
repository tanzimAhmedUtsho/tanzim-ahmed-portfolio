import { motion } from "motion/react";

const cards = [
  {
    title: "Tanzim’s Story",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    link: "/story",
  },
  {
    title: "Projects & Code",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    link: "/projects",
  },
  {
    title: "Hide n Hype",
    image:
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=1200&q=80",
    link: "/venture",
  },
];

export default function HomeCards() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.link}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_30px_90px_rgba(2,8,23,0.35)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 overflow-hidden bg-slate-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6 right-6 rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{card.title}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
