'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="section-padding bg-brand-orange relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 30px,
            rgba(0,0,0,0.2) 30px,
            rgba(0,0,0,0.2) 31px
          )`,
        }}
      />

      <div className="container-wide relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-6xl md:text-8xl text-white tracking-wider mb-4">
            READY TO START?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Get your free estimate today. We serve Philadelphia, Upper Darby, Lansdowne,
            and all surrounding communities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-semibold px-8 py-4 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              Get Free Estimate
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+13479773212"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white hover:text-brand-orange transition-all duration-300 text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              (347) 977-3212
            </a>
          </div>
          <p className="mt-6 text-white/60 text-xs tracking-wide">
            Mon–Sat 8AM–6PM · Free estimates · 24-hour response
          </p>
        </motion.div>
      </div>
    </section>
  )
}
