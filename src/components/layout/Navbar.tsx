"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog",     label: "Blog" },
  { href: "/contact",  label: "Contact" },
];

function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="80" height="80" rx="14" fill="#1A2332"/>
      {/* Hammer head */}
      <rect x="14" y="15" width="28" height="20" rx="4" fill="#E8541A"/>
      {/* Hammer handle — angled white bar */}
      <rect
        x="34" y="28" width="9" height="38" rx="4" fill="#F5F0E8"
        transform="rotate(-40 38.5 47)"
      />
      {/* Strike accent dots */}
      <circle cx="22" cy="59" r="3.5" fill="#E8541A" opacity="0.6"/>
      <circle cx="15" cy="51" r="2"   fill="#E8541A" opacity="0.35"/>
    </svg>
  );
}

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-glass shadow-glow-steel py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Rapid Renovation & Demolition LLC — Home">
            <div className="group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <LogoMark size={40} />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-white text-lg leading-none tracking-wider">
                RAPID RENOVATION
              </div>
              <div className="font-condensed text-brand-orange text-xs tracking-[0.25em] uppercase">
                &amp; Demolition LLC
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-condensed text-sm tracking-widest uppercase transition-colors duration-200 animated-underline ${
                  pathname === link.href
                    ? "text-brand-orange"
                    : "text-brand-slate-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13479773212"
              className="font-condensed text-sm tracking-wider text-brand-slate hover:text-white transition-colors"
            >
              347-977-3212
            </a>
            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed text-sm tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 hover:shadow-glow-orange"
            >
              Free Quote
            </Link>
          </div>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-steel-light lg:hidden"
          >
            {/* Mobile logo top-left */}
            <div className="absolute top-5 left-4 flex items-center gap-3">
              <LogoMark size={36} />
              <div className="font-display text-white text-base tracking-wider leading-none">
                RAPID RENOVATION
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-5xl tracking-wider transition-colors ${
                      pathname === link.href
                        ? "text-brand-orange"
                        : "text-white hover:text-brand-orange"
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="tel:+13479773212"
                className="mt-4 font-condensed text-xl text-brand-orange tracking-wider"
              >
                347-977-3212
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
