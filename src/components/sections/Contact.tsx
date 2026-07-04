import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { SectionLabel, GradientOrb } from "../../utils";
import type { ContactForm } from "../../types";

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "tanzim.utsho@example.com",
      href: "mailto:tanzim.utsho@example.com",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/tanzim-utsho",
      href: "#",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/tanzim-utsho",
      href: "#",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
    },
  ];

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
    <section id="contact" className="py-32 px-6 relative">
      <GradientOrb className="w-[600px] h-[600px] bg-blue-600/[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-white/45 mt-4 max-w-md mx-auto text-sm">
            Have a project in mind or just want to say hello? My inbox is always
            open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-blue-500/30 transition-colors duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/35 uppercase tracking-widest">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-white/75 hover:text-cyan-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/75">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social row */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/45 hover:border-blue-500/50 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 p-7 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md"
          >
            {[
              {
                id: "name",
                label: "Your Name",
                type: "text",
                placeholder: "Tanzim Ahmed",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "you@example.com",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="space-y-1.5">
                <label
                  htmlFor={id}
                  className="text-xs font-mono text-white/45 uppercase tracking-widest"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={form[id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
                />
              </div>
            ))}

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-mono text-white/45 uppercase tracking-widest"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project, or just say hi..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              <Send size={15} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
