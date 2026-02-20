"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Phone, Home } from "lucide-react";

export default function ConfirmedPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/images/bila_security_and_cleaning_3.png" alt="" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-dark/93" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] rounded-full bg-accent-blue -top-60 -left-40 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[500px] h-[500px] rounded-full bg-accent-green bottom-0 -right-20 blur-[110px]"
        />
      </div>

      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass-strong rounded-3xl p-10 sm:p-14 max-w-lg w-full text-center overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green rounded-t-3xl" />
        {/* Inner glows */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-green/12 rounded-full blur-[70px]" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-blue/10 rounded-full blur-[60px]" />

        {/* Animated check icon */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 220, damping: 14 }}
            className="relative w-24 h-24 rounded-full bg-accent-green/10 border-2 border-accent-green/30 flex items-center justify-center mx-auto mb-6"
          >
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-accent-green/40"
            />
            <CheckCircle className="w-12 h-12 text-accent-green" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold text-accent-green uppercase tracking-[0.2em] mb-3">Success</p>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">
              Message Received!
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-2">
              Thanks for reaching out to Bila Security &amp; Cleaning Services.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              We&apos;ve received your enquiry and will get back to you as soon as possible — usually within one business day.
            </p>

            {/* Quick contact */}
            <div className="glass rounded-2xl p-5 mb-8 border border-white/[0.07]">
              <p className="text-sm font-semibold text-muted mb-4">Need to reach us sooner?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="tel:+27100176761"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(45,107,255,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-accent inline-flex items-center justify-center gap-2 text-sm !py-2.5"
                >
                  <Phone className="w-4 h-4" />
                  +27 10 017 6761
                </motion.a>
                <motion.a
                  href="https://wa.me/+27736923549"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(0,227,140,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-accent-green/10 border border-accent-green/25 text-accent-green hover:bg-accent-green/20 text-sm font-semibold transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </motion.a>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-accent-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
