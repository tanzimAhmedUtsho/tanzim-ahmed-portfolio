import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS } from "../../constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#05050f]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/20"
          : "py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight"
          style={{
            fontFamily: "'Sora', sans-serif",
            background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          T.Utsho
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
        >
          <Sparkles size={14} /> Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-white/60 hover:text-white transition-colors p-1"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full inset-x-0 bg-[#080820]/96 backdrop-blur-xl border-b border-white/10 px-6 py-7 flex flex-col gap-5"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/65 hover:text-white text-base transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 py-2.5 rounded-full text-white text-sm font-medium text-center"
            style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </header>
  );
}
