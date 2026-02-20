"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Shield, Sparkles, CheckCircle, ArrowRight, Phone,
  Users, Award, TrendingUp, Clock, Star, Zap, Eye,
} from "lucide-react";

/* ── variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── data ── */
const heroImages = [
  "/images/bila_security_and_cleaning_1.png",
  "/images/bila_security_and_cleaning_2.png",
  "/images/bila_security_and_cleaning_3.png",
];

const services = [
  { icon: Shield,      title: "Armed & Unarmed Guarding",         desc: "Professional security officers for homes, businesses, and events — 24/7.",          img: "/images/bila_security_and_cleaning_1.png",  accent: "blue"  as const },
  { icon: Users,       title: "Residential & Commercial Security", desc: "Tailored protection plans for every property type across South Africa.",             img: "/images/bila_security_and_cleaning_2.png",  accent: "cyan"  as const },
  { icon: Eye,         title: "Industrial Security",               desc: "Securing factories, warehouses, and industrial sites with trained personnel.",        img: "/images/bila_security_and_cleaning_9.png",  accent: "blue"  as const },
  { icon: Sparkles,    title: "Residential Cleaning",              desc: "Spotless homes with eco-friendly products and professionally trained teams.",         img: "/images/bila_security_and_cleaning_12.png", accent: "green" as const },
  { icon: TrendingUp,  title: "Commercial & Office Cleaning",      desc: "Consistent, professional cleaning for workspaces that impress clients.",             img: "/images/bila_security_and_cleaning_3.png",  accent: "green" as const },
  { icon: Clock,       title: "24/7 Surveillance & Response",      desc: "Round-the-clock monitoring and rapid incident response teams.",                      img: "/images/bila_security_and_cleaning_17.png", accent: "cyan"  as const },
];

const stats = [
  { value: "100+", label: "Certified Personnel", icon: Users },
  { value: "250+", label: "Cleaning Contracts",  icon: Sparkles },
  { value: "10+",  label: "Years Experience",    icon: Award },
  { value: "1000+",label: "Satisfied Clients",   icon: Star },
];

const trustItems = [
  { icon: Shield,       label: "PSIRA Registered",  color: "text-accent-blue",  bg: "bg-accent-blue/10  border-accent-blue/20"  },
  { icon: Clock,        label: "24/7 Response",      color: "text-accent-cyan",  bg: "bg-accent-cyan/10  border-accent-cyan/20"  },
  { icon: CheckCircle,  label: "Fully Vetted Staff", color: "text-accent-green", bg: "bg-accent-green/10 border-accent-green/20" },
  { icon: Zap,          label: "Rapid Deployment",   color: "text-accent-blue",  bg: "bg-accent-blue/10  border-accent-blue/20"  },
  { icon: Eye,          label: "CCTV Monitoring",    color: "text-accent-cyan",  bg: "bg-accent-cyan/10  border-accent-cyan/20"  },
  { icon: Sparkles,     label: "Eco-Friendly",       color: "text-accent-green", bg: "bg-accent-green/10 border-accent-green/20" },
];

const accentMap = {
  blue:  { icon: "bg-accent-blue/10  border-accent-blue/20  text-accent-blue  group-hover:bg-accent-blue/25",  link: "text-accent-blue  hover:text-accent-cyan",  glow: "0 0 55px rgba(45,107,255,0.2)",   bar: "from-accent-blue  to-accent-cyan"  },
  cyan:  { icon: "bg-accent-cyan/10  border-accent-cyan/20  text-accent-cyan  group-hover:bg-accent-cyan/25",  link: "text-accent-cyan  hover:text-accent-green", glow: "0 0 55px rgba(0,184,255,0.2)",    bar: "from-accent-cyan  to-accent-green" },
  green: { icon: "bg-accent-green/10 border-accent-green/20 text-accent-green group-hover:bg-accent-green/25", link: "text-accent-green hover:text-accent-cyan",  glow: "0 0 55px rgba(0,227,140,0.2)",   bar: "from-accent-green to-accent-cyan"  },
};

const galleryImages = [
  "/images/bila_security_and_cleaning_5.png",
  "/images/bila_security_and_cleaning_7.png",
  "/images/bila_security_and_cleaning_12.png",
  "/images/bila_security_and_cleaning_15.png",
  "/images/bila_security_and_cleaning_17.png",
  "/images/bila_security_and_cleaning_1.png",
];

/* ── animated counter ── */
function Counter({ target }: { target: string }) {
  const num = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((num * frame) / total));
      if (frame >= total) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [started, num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1],    ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Parallax carousel */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <AnimatePresence mode="sync">
            <motion.div
              key={heroIdx}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src={heroImages[heroIdx]} alt="" fill className="object-cover object-center" priority />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
        </motion.div>

        {/* Animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.18, 1], opacity: [0.22, 0.38, 0.22] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[700px] h-[700px] rounded-full bg-accent-blue -top-64 -left-64 blur-[130px]"
          />
          <motion.div
            animate={{ scale: [1, 1.22, 1], opacity: [0.14, 0.28, 0.14] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute w-[500px] h-[500px] rounded-full bg-accent-green top-1/2 -right-48 blur-[110px]"
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute w-[400px] h-[400px] rounded-full bg-accent-cyan bottom-0 left-1/3 blur-[100px]"
          />
        </div>

        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-44">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">

              {/* Live badge */}
              <motion.div variants={fadeUp} className="mb-8">
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent-green/35 bg-accent-green/10 text-accent-green text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_rgba(0,227,140,0.9)]" />
                  PSIRA Registered · Proudly South African
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.0] mb-6 tracking-tight"
              >
                Security &amp;{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Cleaning</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green origin-left rounded-full"
                  />
                </span>
                <br />
                <span className="text-white/90">You Can Trust.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">  
                Armed &amp; unarmed guarding, residential &amp; commercial cleaning — tailored to your needs across South Africa.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-sm">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/30 text-white font-semibold hover:bg-white/15 hover:border-white/50 transition-all backdrop-blur-sm text-sm bg-white/5"
                >
                  Explore Services
                </Link>
              </motion.div>

              {/* Phone */}
              <motion.a
                variants={fadeUp}
                href="tel:+27100176761"
                className="inline-flex items-center gap-2.5 text-white/80 hover:text-accent-cyan transition-colors text-sm group"
              >
                <span className="w-8 h-8 rounded-xl bg-accent-green/15 border border-accent-green/25 flex items-center justify-center group-hover:bg-accent-green/25 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-accent-green" />
                </span>
                +27 10 017 6761
              </motion.a>
            </motion.div>

            {/* Carousel dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIdx(i)}
                  className={`transition-all duration-300 rounded-full ${i === heroIdx ? "w-8 h-2 bg-accent-green shadow-[0_0_10px_rgba(0,227,140,0.7)]" : "w-2 h-2 bg-white/25 hover:bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="py-12 bg-dark-200 border-y border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/[0.04] via-transparent to-accent-green/[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {trustItems.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.04 }}
                className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl border ${item.bg} transition-all cursor-default`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-xs font-semibold text-muted text-center leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-20">
            <motion.p variants={fadeUp} className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-4">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-primary mb-5 tracking-tight">
              Where Safety Meets <span className="gradient-text">Spotlessness</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted max-w-lg mx-auto text-lg">
              From armed guarding to deep cleaning — every corner of your security and hygiene needs covered.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((svc) => {
              const a = accentMap[svc.accent];
              return (
                <motion.div
                  key={svc.title}
                  variants={scaleIn}
                  whileHover={{ y: -8, boxShadow: a.glow }}
                  className="glass rounded-3xl overflow-hidden group transition-all flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={svc.img} alt={svc.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${a.bar}`} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 transition-colors ${a.icon}`}>
                      <svc.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-[15px] leading-snug">{svc.title}</h3>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{svc.desc}</p>
                    <Link href="/services" className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mt-auto ${a.link}`}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-14"
          >
            <Link href="/services" className="btn-accent inline-flex items-center gap-2 text-sm">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bila_security_and_cleaning_2.png" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-dark/92" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/8 via-transparent to-accent-green/8" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={scaleIn}
                whileHover={{ scale: 1.05, boxShadow: "0 0 45px rgba(45,107,255,0.18)" }}
                className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden cursor-default"
              >
                <motion.div
                  animate={{ opacity: [0.05, 0.14, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.9 }}
                  className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-green/10 rounded-3xl"
                />
                <div className="relative">
                  <s.icon className="w-6 h-6 text-accent-cyan mx-auto mb-3 opacity-70" />
                  <p className="text-4xl font-black gradient-text mb-2"><Counter target={s.value} /></p>
                  <p className="text-sm text-muted font-medium">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT PREVIEW ══ */}
      <section className="py-28 bg-dark-100 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent-green/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden h-80 shadow-2xl">
                <Image src="/images/bila_security_and_cleaning_3.png" alt="Bila team" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>

              {/* Floating secondary image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="absolute -bottom-8 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-2 border-dark-100 shadow-2xl"
              >
                <Image src="/images/bila_security_and_cleaning_9.png" alt="Bila security" fill className="object-cover object-center" />
              </motion.div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-5 -left-5 glass-strong rounded-2xl px-5 py-4 border border-accent-green/20"
              >
                <p className="text-2xl font-black gradient-text leading-none">10+</p>
                <p className="text-xs text-muted mt-1">Years of Excellence</p>
              </motion.div>

              {/* Pulsing glow ring */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-3 rounded-3xl border border-accent-blue/15 pointer-events-none"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-4">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-black text-primary mb-6 tracking-tight leading-tight">
                A Proudly South<br />African Company
              </h2>
              <p className="text-muted leading-relaxed mb-4 text-[15px]">
                At Bila Security &amp; Cleaning Services, we are committed to delivering top-tier security and cleaning
                solutions that meet the unique needs of our clients across South Africa.
              </p>
              <p className="text-muted leading-relaxed mb-8 text-[15px]">
                Whether you require professional guarding services or spotless cleaning solutions, we bring reliability,
                integrity, and excellence to every site we serve.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "PSIRA registered & fully compliant",
                  "Trained, vetted security personnel",
                  "Eco-friendly cleaning products",
                  "Customised plans for every client",
                ].map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent-green/15 border border-accent-green/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-accent-green" />
                    </span>
                    <span className="text-muted">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 text-primary font-semibold hover:bg-white/[0.06] hover:border-white/25 transition-all text-sm"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ GALLERY STRIP (auto-scroll) ══ */}
      <section className="py-8 bg-dark overflow-hidden border-y border-white/[0.04]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <div key={i} className="relative w-56 h-36 rounded-2xl overflow-hidden flex-shrink-0 border border-white/[0.06]">
              <Image src={src} alt="" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/30 hover:bg-dark/10 transition-colors" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bila_security_and_cleaning_5.png" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-dark/91" />
        </div>

        {/* Animated glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-accent-blue -top-32 -right-32 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute w-[400px] h-[400px] rounded-full bg-accent-green -bottom-32 -left-32 blur-[100px]"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs font-bold text-accent-cyan uppercase tracking-[0.2em] mb-5">
              Ready to get started?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">
              Get a Customised{" "}
              <span className="gradient-text">Quote Today</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Fully registered and compliant with PSIRA. Let&apos;s protect and clean your space.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-sm">
                Contact Us Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+27100176761"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/35 transition-all backdrop-blur-sm text-sm"
              >
                <Phone className="w-4 h-4 text-accent-green" />
                +27 10 017 6761
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
