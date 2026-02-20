"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Shield, Sparkles, CheckCircle, Target, Eye, Heart,
  ArrowRight, Users, Award, TrendingUp, Clock, Star, Zap,
} from "lucide-react";

/* ── variants ── */
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
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ── data ── */
const stats = [
  { icon: Users,      value: "100+",  label: "Certified Personnel" },
  { icon: Award,      value: "250+",  label: "Cleaning Contracts"  },
  { icon: Clock,      value: "10+",   label: "Years Experience"    },
  { icon: TrendingUp, value: "1000+", label: "Satisfied Clients"   },
];

const whyUs = [
  { icon: Shield,    text: "PSIRA registered and fully compliant with South African regulations" },
  { icon: Users,     text: "Trained, vetted, and uniformed security personnel"                  },
  { icon: Sparkles,  text: "Eco-friendly, high-quality cleaning products"                       },
  { icon: Target,    text: "Customised security and cleaning plans for every client"             },
  { icon: Clock,     text: "24/7 availability and rapid incident response"                      },
  { icon: Eye,       text: "Transparent reporting and open client communication"                 },
  { icon: Zap,       text: "Serving residential, commercial, industrial, and public spaces"      },
  { icon: Star,      text: "Consistently high client satisfaction and renewal rates"             },
];

const values = [
  { icon: Shield,   title: "Integrity",   desc: "We operate with honesty and transparency in every interaction with our clients and partners.", accent: "blue"  as const },
  { icon: Target,   title: "Excellence",  desc: "We hold ourselves to the highest standards of service delivery, every single day.",            accent: "green" as const },
  { icon: Heart,    title: "Community",   desc: "We invest in local employment and contribute to safer, cleaner neighbourhoods across SA.",      accent: "cyan"  as const },
  { icon: Sparkles, title: "Innovation",  desc: "We continuously refine our methods and adopt best practices to stay ahead of evolving needs.",  accent: "blue"  as const },
];

const accentMap = {
  blue:  { bg: "bg-accent-blue/10",  border: "border-accent-blue/20",  text: "text-accent-blue",  glow: "0 0 50px rgba(45,107,255,0.2)"  },
  green: { bg: "bg-accent-green/10", border: "border-accent-green/20", text: "text-accent-green", glow: "0 0 50px rgba(0,227,140,0.2)"   },
  cyan:  { bg: "bg-accent-cyan/10",  border: "border-accent-cyan/20",  text: "text-accent-cyan",  glow: "0 0 50px rgba(0,184,255,0.2)"   },
};

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
export default function AboutPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bila_security_and_cleaning_2.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
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

        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent-green/35 bg-accent-green/10 text-accent-green text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_rgba(0,227,140,0.9)]" />
                Who We Are
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight"
            >
              About{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Bila</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green origin-left rounded-full"
                />
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 max-w-xl mx-auto text-lg leading-relaxed">
              Proudly South African. Committed to safety, cleanliness, and community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ OUR STORY ══ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <p className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-4">Our Story</p>
              <h2 className="text-4xl sm:text-5xl font-black text-primary mb-8 tracking-tight leading-tight">
                Welcome to Bila Security<br />&amp; Cleaning Services
              </h2>
              <div className="space-y-4 text-muted leading-relaxed text-[15px]">
                <p>
                  At Bila Security &amp; Cleaning Services, we are committed to delivering top-tier security and cleaning
                  solutions that meet the unique needs of our clients across South Africa.
                </p>
                <p>
                  Our security division offers armed and unarmed guarding services for homes, businesses, industrial
                  facilities, and events. We also conduct community patrols in open spaces, contributing to safer
                  neighbourhoods and promoting peace of mind.
                </p>
                <p>
                  Our cleaning division delivers residential and commercial cleaning services with the highest standards
                  of hygiene and professionalism — ensuring a clean, healthy, and welcoming environment in every space we attend to.
                </p>
                <p>
                  We are fully registered and compliant with the Private Security Industry Regulatory Authority (PSIRA)
                  and other relevant industry bodies in South Africa.
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={scaleIn}
                  whileHover={{ y: -6, scale: 1.03, boxShadow: "0 0 45px rgba(45,107,255,0.18)" }}
                  className="glass-strong rounded-3xl p-7 relative overflow-hidden cursor-default"
                >
                  <motion.div
                    animate={{ opacity: [0.04, 0.12, 0.04] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                    className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-green/10 rounded-3xl"
                  />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4">
                      <s.icon className="w-5 h-5 text-accent-blue" />
                    </div>
                    <p className="text-3xl font-black gradient-text mb-1"><Counter target={s.value} /></p>
                    <p className="text-sm text-muted">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="py-28 bg-dark-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.1, 0.04] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[700px] h-[400px] rounded-full bg-accent-blue top-0 left-1/2 -translate-x-1/2 blur-[120px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold text-accent-cyan uppercase tracking-[0.2em] mb-4">
              Our Purpose
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
              Mission &amp; <span className="gradient-text">Vision</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              whileHover={{ y: -6, boxShadow: "0 0 55px rgba(45,107,255,0.18)" }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden group transition-all"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-blue/12 rounded-full blur-[70px] group-hover:bg-accent-blue/20 transition-colors" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan rounded-t-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 border border-accent-blue/25 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent-blue" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">Our Mission</h3>
                <p className="text-muted leading-relaxed text-[15px]">
                  To provide dependable, professional, and value-driven security and cleaning services that ensure the
                  safety, wellbeing, and cleanliness of our clients&apos; environments, while creating opportunities for
                  community development and employment.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              whileHover={{ y: -6, boxShadow: "0 0 55px rgba(0,227,140,0.18)" }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden group transition-all"
            >
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent-green/12 rounded-full blur-[70px] group-hover:bg-accent-green/20 transition-colors" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-green to-accent-cyan rounded-t-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-accent-green/10 border border-accent-green/25 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-green" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed text-[15px]">
                  To be a leading and trusted name in the South African security and cleaning industry, recognised for our
                  commitment to excellence, compliance, innovation, and client satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent-green/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-4">
              The Bila Difference
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
              Why <span className="gradient-text">Choose Us?</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Checklist */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-4"
            >
              {whyUs.map((item) => (
                <motion.div
                  key={item.text}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 0 30px rgba(0,227,140,0.12)" }}
                  className="flex items-start gap-3 glass rounded-2xl p-4 transition-all group"
                >
                  <span className="w-8 h-8 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-green/20 transition-colors">
                    <item.icon className="w-4 h-4 text-accent-green" />
                  </span>
                  <span className="text-sm text-muted leading-snug pt-1">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden h-96 shadow-2xl">
                <Image
                  src="/images/bila_security_and_cleaning_3.png"
                  alt="Bila team"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-4 border border-accent-blue/20"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <div>
                    <p className="text-sm font-black text-primary">PSIRA Compliant</p>
                    <p className="text-xs text-muted">Fully registered &amp; certified</p>
                  </div>
                </div>
              </motion.div>
              {/* Pulsing ring */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-3 rounded-3xl border border-accent-green/15 pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-28 bg-dark-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-accent-cyan/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-blue/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-4">
              What Drives Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
              Our <span className="gradient-text">Values</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => {
              const a = accentMap[v.accent];
              return (
                <motion.div
                  key={v.title}
                  variants={scaleIn}
                  whileHover={{ y: -8, boxShadow: a.glow }}
                  className="glass rounded-3xl p-7 transition-all text-center relative overflow-hidden group"
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                    v.accent === "blue"  ? "from-accent-blue to-accent-cyan"  :
                    v.accent === "green" ? "from-accent-green to-accent-cyan" :
                                          "from-accent-cyan to-accent-blue"
                  } rounded-t-3xl`} />
                  {/* Inner glow */}
                  <motion.div
                    animate={{ opacity: [0.03, 0.09, 0.03] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={`absolute inset-0 ${a.bg} rounded-3xl`}
                  />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl ${a.bg} border ${a.border} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                      <v.icon className={`w-7 h-7 ${a.text}`} />
                    </div>
                    <h3 className="font-black text-primary mb-3 text-lg">{v.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══ TEAM IMAGE STRIP ══ */}
      <section className="py-8 bg-dark overflow-hidden border-y border-white/[0.04]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {[
            "/images/bila_security_and_cleaning_3.png",
            "/images/bila_security_and_cleaning_5.png",
            "/images/bila_security_and_cleaning_9.png",
            "/images/bila_security_and_cleaning_1.png",
            "/images/bila_security_and_cleaning_2.png",
            "/images/bila_security_and_cleaning_7.png",
            "/images/bila_security_and_cleaning_3.png",
            "/images/bila_security_and_cleaning_5.png",
            "/images/bila_security_and_cleaning_9.png",
            "/images/bila_security_and_cleaning_1.png",
            "/images/bila_security_and_cleaning_2.png",
            "/images/bila_security_and_cleaning_7.png",
          ].map((src, i) => (
            <div key={i} className="relative w-56 h-36 rounded-2xl overflow-hidden flex-shrink-0 border border-white/[0.06]">
              <Image src={src} alt="" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-dark/25 hover:bg-dark/5 transition-colors" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bila_security_and_cleaning_5.png" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-dark/85" />
        </div>

        {/* Animated glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-accent-blue -top-32 -right-32 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.26, 0.14] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute w-[400px] h-[400px] rounded-full bg-accent-green -bottom-32 -left-32 blur-[100px]"
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs font-bold text-accent-cyan uppercase tracking-[0.2em] mb-5">
              Ready to work with us?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">
              Let&apos;s Build Something <span className="gradient-text">Safer</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 text-lg mb-12 max-w-xl mx-auto">
              Get in touch today for a customised quote tailored to your security and cleaning needs.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-sm">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/30 text-white font-semibold hover:bg-white/15 hover:border-white/50 transition-all backdrop-blur-sm text-sm bg-white/5"
              >
                View Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
