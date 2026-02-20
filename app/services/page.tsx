"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield, Sparkles, Building2, Factory, CalendarCheck,
  MapPin, Eye, Home, Briefcase, Layers, HardHat, Clock,
  Package, ArrowRight, Phone,
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── data ── */
const securityServices = [
  { icon: Shield,        title: "Armed & Unarmed Guarding",          desc: "Professional security officers — armed or unarmed — deployed to protect your people and property around the clock.", img: "/images/bila_security_and_cleaning_1.png" },
  { icon: Building2,     title: "Residential & Commercial Security",  desc: "Tailored protection plans for homes, estates, office parks, retail centres, and commercial properties.",           img: "/images/bila_security_and_cleaning_2.png" },
  { icon: Factory,       title: "Industrial Security",                desc: "Securing factories, warehouses, mining sites, and industrial facilities with trained, PSIRA-compliant officers.",   img: "/images/bila_security_and_cleaning_9.png" },
  { icon: CalendarCheck, title: "Event Security & Crowd Control",     desc: "Safe, professional crowd management for concerts, corporate events, sports fixtures, and public gatherings.",        img: "/images/bila_security_and_cleaning_1.png" },
  { icon: MapPin,        title: "Open Space Community Patrols",       desc: "Visible patrols in open spaces and communities to deter crime and promote safer neighbourhoods.",                   img: "/images/bila_security_and_cleaning_2.png" },
  { icon: Eye,           title: "24/7 Surveillance & Response",       desc: "Round-the-clock monitoring, incident tracking, and rapid response to keep your site secure at all times.",          img: "/images/bila_security_and_cleaning_9.png" },
];

const cleaningServices = [
  { icon: Home,          title: "Residential Cleaning",               desc: "Thorough, eco-friendly cleaning for homes and apartments — scheduled or once-off, tailored to your lifestyle.",    img: "/images/bila_security_and_cleaning_12.png" },
  { icon: Briefcase,     title: "Commercial & Office Cleaning",       desc: "Consistent, professional cleaning for offices, retail spaces, and commercial premises.",                            img: "/images/bila_security_and_cleaning_3.png"  },
  { icon: Layers,        title: "Deep Cleaning Services",             desc: "Intensive deep cleans for kitchens, bathrooms, carpets, and hard-to-reach areas using professional-grade equipment.", img: "/images/bila_security_and_cleaning_7.png"  },
  { icon: HardHat,       title: "Post-Construction Cleaning",         desc: "Specialist cleaning after renovations or construction — removing dust, debris, and residue for a move-in ready finish.", img: "/images/bila_security_and_cleaning_15.png" },
  { icon: Clock,         title: "Scheduled & Once-Off Cleaning",      desc: "Flexible arrangements — daily, weekly, monthly, or a single visit — to match your schedule and budget.",           img: "/images/bila_security_and_cleaning_17.png" },
  { icon: Package,       title: "Customised Cleaning Packages",       desc: "Bespoke cleaning programmes designed around your specific property type, frequency, and requirements.",             img: "/images/bila_security_and_cleaning_5.png"  },
];

const securitySteps = [
  { step: "01", title: "Site Assessment",                  desc: "Thorough risk assessment to understand specific vulnerabilities and needs." },
  { step: "02", title: "Customised Security Plan",         desc: "Tailored security strategy addressing both immediate and long-term risks." },
  { step: "03", title: "Deployment of Trained Personnel",  desc: "PSIRA-registered officers carefully selected and deployed per client requirements." },
  { step: "04", title: "Continuous Monitoring",            desc: "Ongoing patrols, incident tracking, and routine reporting for full transparency." },
  { step: "05", title: "Client Feedback & Adjustment",     desc: "Continuous refinement based on client feedback and evolving security threats." },
];

const cleaningSteps = [
  { step: "01", title: "Initial Consultation",             desc: "On-site visit to understand the scope and type of cleaning required." },
  { step: "02", title: "Customised Cleaning Plan",         desc: "Programme created based on property type, frequency, and specific client needs." },
  { step: "03", title: "Deployment of Cleaning Teams",     desc: "Professional cleaners equipped with high-quality tools and eco-friendly products." },
  { step: "04", title: "Quality Assurance",                desc: "Regular supervision and quality checks to ensure consistent results and satisfaction." },
  { step: "05", title: "Ongoing Client Support",           desc: "Open communication for feedback, service enhancements, and ad-hoc requirements." },
];

/* ── service card ── */
function ServiceCard({
  icon: Icon, title, desc, img, accent,
}: {
  icon: React.ElementType; title: string; desc: string; img: string;
  accent: "blue" | "green";
}) {
  const styles = {
    blue:  { icon: "bg-accent-blue/10  border-accent-blue/20  text-accent-blue  group-hover:bg-accent-blue/25",  link: "text-accent-blue  hover:text-accent-cyan",  glow: "0 0 55px rgba(45,107,255,0.2)",  bar: "from-accent-blue  to-accent-cyan"  },
    green: { icon: "bg-accent-green/10 border-accent-green/20 text-accent-green group-hover:bg-accent-green/25", link: "text-accent-green hover:text-accent-cyan",  glow: "0 0 55px rgba(0,227,140,0.2)",   bar: "from-accent-green to-accent-cyan"  },
  };
  const s = styles[accent];
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8, boxShadow: s.glow }}
      className="glass rounded-3xl overflow-hidden group transition-all flex flex-col"
    >
      <div className="relative h-44 overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.bar}`} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 transition-colors ${s.icon}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-primary mb-2 text-[15px] leading-snug">{title}</h3>
        <p className="text-sm text-muted leading-relaxed flex-1 mb-5">{desc}</p>
        <Link href="/contact" className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mt-auto ${s.link}`}>
          Get a quote <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bila_security_and_cleaning_1.png" alt="" fill className="object-cover object-center" priority />
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
                What We Offer
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight"
            >
              Our{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Services</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green origin-left rounded-full"
                />
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 max-w-xl mx-auto text-lg leading-relaxed">
              Comprehensive security and cleaning solutions across South Africa — where safety meets spotlessness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ SECURITY SERVICES ══ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-accent-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col sm:flex-row sm:items-end gap-6 mb-16"
          >
            <div className="flex-1">
              <motion.p variants={fadeUp} className="text-xs font-bold text-accent-cyan uppercase tracking-[0.2em] mb-3">
                Division 01
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-accent-blue" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                  Security <span className="gradient-text">Services</span>
                </h2>
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-sm">
                Get a Security Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {securityServices.map((svc) => (
              <ServiceCard key={svc.title} {...svc} accent="blue" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent mx-8" />

      {/* ══ CLEANING SERVICES ══ */}
      <section className="py-28 bg-dark-100 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-accent-green/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col sm:flex-row sm:items-end gap-6 mb-16"
          >
            <div className="flex-1">
              <motion.p variants={fadeUp} className="text-xs font-bold text-accent-cyan uppercase tracking-[0.2em] mb-3">
                Division 02
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-accent-green" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                  Cleaning <span className="gradient-text">Services</span>
                </h2>
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-sm">
                Get a Cleaning Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cleaningServices.map((svc) => (
              <ServiceCard key={svc.title} {...svc} accent="green" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ OUR APPROACH ══ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-4">
              How We Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
              Our <span className="gradient-text">Approach</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Security approach */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              whileHover={{ boxShadow: "0 0 55px rgba(45,107,255,0.12)" }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden transition-all"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-blue/10 rounded-full blur-[70px]" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan rounded-t-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-black text-primary">Security Approach</h3>
                </div>
                <div className="space-y-6">
                  {securitySteps.map((item, i) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue text-xs font-black flex-shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm mb-1">{item.title}</p>
                        <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Cleaning approach */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              whileHover={{ boxShadow: "0 0 55px rgba(0,227,140,0.12)" }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden transition-all"
            >
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent-green/10 rounded-full blur-[70px]" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-green to-accent-cyan rounded-t-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-black text-primary">Cleaning Approach</h3>
                </div>
                <div className="space-y-6">
                  {cleaningSteps.map((item, i) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green text-xs font-black flex-shrink-0 mt-0.5 group-hover:bg-accent-green/20 transition-colors">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm mb-1">{item.title}</p>
                        <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bila_security_and_cleaning_3.png" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-dark/85" />
        </div>

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
              Ready to get started?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">
              Get a <span className="gradient-text">Customised Quote</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 text-lg mb-12 max-w-xl mx-auto">
              Tell us about your needs and we&apos;ll design a tailored security or cleaning solution just for you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-accent inline-flex items-center gap-2 text-sm">
                Contact Us Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+27100176761"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/30 text-white font-semibold hover:bg-white/15 hover:border-white/50 transition-all backdrop-blur-sm text-sm bg-white/5"
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
