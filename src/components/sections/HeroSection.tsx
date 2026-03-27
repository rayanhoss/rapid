'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '5★', label: 'Client Rating' },
  { value: '100%', label: 'Insured & Bonded' },
  { value: '24hr', label: 'Quote Response' },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-steel"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>

      {/* Geometric accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden z-0 hidden xl:block">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-0 bottom-0 w-full"
          style={{ y: bgY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
            alt="Renovation work"
            fill
            className="object-cover opacity-20"
            sizes="33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-steel" />
        </motion.div>
      </div>

      {/* Diagonal orange stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange z-10" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container-wide pt-28 pb-16"
      >
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-label mb-6"
          >
            Philadelphia, PA · Est. 2024
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[120px] leading-[0.88] tracking-wider text-white mb-6"
          >
            BUILD
            <span className="block text-brand-orange">BETTER.</span>
            <span className="block text-brand-concrete/60 text-5xl sm:text-6xl md:text-7xl mt-2">TEAR DOWN FAST.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-brand-concrete text-lg max-w-xl leading-relaxed mb-10"
          >
            Professional renovation and demolition services across Philadelphia, Upper Darby,
            and Lansdowne. Fully insured, bonded, and built on craftsmanship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Estimate
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/projects" className="btn-outline text-base px-8 py-4">
              View Our Work
            </Link>
            <a
              href="tel:+13479773212"
              className="flex items-center gap-2 text-white font-medium text-base hover:text-brand-orange transition-colors"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-brand-orange transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
              </span>
              (347) 977-3212
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-steel-light/80 backdrop-blur-sm px-5 py-4 text-center"
              >
                <div className="font-display text-3xl text-brand-orange tracking-wider">{stat.value}</div>
                <div className="font-body text-xs text-brand-concrete/70 mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-brand-concrete/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-brand-orange/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
