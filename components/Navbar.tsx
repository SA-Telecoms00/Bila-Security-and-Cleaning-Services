"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-2xl border-b border-white/[0.10] shadow-xl shadow-black/40"
          : "bg-gradient-to-b from-dark/75 to-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-44">
              <Image
                src="/images/logo.png"
                alt="Bila Security & Cleaning Services"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green rounded-full shadow-[0_0_8px_rgba(0,227,140,0.6)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+27100176761"
              className="text-sm text-white/80 hover:text-accent-cyan font-semibold transition-colors tracking-wide"
            >
              +27 10 017 6761
            </a>
            <Link
              href="/contact"
              className="btn-accent text-sm !py-2.5 !px-5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.10] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-dark-100/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                      active
                        ? "bg-white/[0.10] text-white border border-white/[0.12]"
                        : "text-white/75 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 btn-accent text-sm text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
