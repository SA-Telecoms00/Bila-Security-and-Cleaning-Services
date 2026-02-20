"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  Loader2,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const inputClass =
  "w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-primary placeholder-muted/40 text-sm focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(45,107,255,0.12)] transition-all";

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/confirmed");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bila_security_and_cleaning_9.png" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/70 to-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/50" />
        </div>

        {/* Animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.22, 0.38, 0.22] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[600px] h-[600px] rounded-full bg-accent-blue -top-60 -left-40 blur-[130px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.28, 0.14] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute w-[400px] h-[400px] rounded-full bg-accent-green bottom-0 -right-20 blur-[100px]"
          />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent-green/35 bg-accent-green/10 text-accent-green text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_rgba(0,227,140,0.9)]" />
                Reach Out
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight"
            >
              Contact{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Us</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green origin-left rounded-full"
                />
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 max-w-xl mx-auto text-lg leading-relaxed">
              Request a customised quote or just say hello — we&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section className="py-28 bg-dark-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent-green/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="lg:col-span-3"
            >
              <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green rounded-t-3xl" />
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-blue/10 rounded-full blur-[70px]" />
                <div className="relative">
                  <h2 className="text-2xl font-black text-primary mb-2">Request a Quote</h2>
                  <p className="text-muted text-sm mb-8">
                    Fill in the form below and we&apos;ll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted mb-1.5">
                          Full Name <span className="text-accent-blue">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted mb-1.5">
                          Email Address <span className="text-accent-blue">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-muted mb-1.5">
                        Phone Number <span className="text-muted/50 font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+27 10 000 0000"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted mb-1.5">
                        Message <span className="text-accent-blue">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your security or cleaning needs..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && (
                      <div className="px-4 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={loading ? {} : { scale: 1.02, boxShadow: "0 0 30px rgba(45,107,255,0.3)" }}
                      whileTap={loading ? {} : { scale: 0.98 }}
                      className="w-full btn-accent flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="lg:col-span-2 space-y-5"
            >
              <div>
                <p className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-3">Direct Contact</p>
                <h2 className="text-2xl font-black text-primary mb-2">Get In Touch</h2>
                <p className="text-muted text-sm">
                  Prefer to call or email directly? We&apos;re always available.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { href: "tel:+27100176761", icon: Phone, label: "Phone", value: "+27 10 017 6761", accent: "bg-accent-blue/10 border-accent-blue/20 text-accent-blue", hover: "hover:border-accent-blue/40 hover:bg-accent-blue/5" },
                  { href: "mailto:info@bilasecurity.co.za", icon: Mail, label: "Email", value: "info@bilasecurity.co.za", accent: "bg-accent-green/10 border-accent-green/20 text-accent-green", hover: "hover:border-accent-green/40 hover:bg-accent-green/5" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ y: -3, boxShadow: "0 0 30px rgba(45,107,255,0.1)" }}
                    className={`flex items-center gap-4 p-4 rounded-2xl glass border border-white/[0.07] transition-all group ${item.hover}`}
                  >
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center flex-shrink-0 ${item.accent}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted/60 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-semibold text-primary group-hover:text-accent-cyan transition-colors text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/[0.07] transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted/60 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="font-semibold text-primary text-sm leading-relaxed">
                      Greatermans Building,<br />
                      220 Commissioner Street,<br />
                      City Suburban, Johannesburg, 2094
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/[0.07] transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted/60 uppercase tracking-wider mb-0.5">Website</p>
                    <p className="font-semibold text-primary text-sm">www.bilasecurity.co.za</p>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/+27736923549"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, boxShadow: "0 0 30px rgba(0,227,140,0.2)" }}
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-accent-green/10 border border-accent-green/25 text-accent-green hover:bg-accent-green/20 font-semibold transition-all text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </motion.a>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-glass">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.764287114711!2d28.051507075415213!3d-26.204344977076463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e84d4267af3%3A0x27a052a4de9637c1!2sGreatermans!5e0!3m2!1sen!2sus!4v1748884664401!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bila Security office location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
