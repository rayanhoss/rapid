'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const reasons = [
  {
    num: '01',
    title: 'Fully Licensed & Insured',
    desc: 'We carry comprehensive liability insurance and are fully bonded—protecting you, your property, and our crew on every job.',
  },
  {
    num: '02',
    title: 'Fast, Reliable Scheduling',
    desc: 'We respond to quote requests within 24 hours and show up on time, every time. No ghost jobs, no excuses.',
  },
  {
    num: '03',
    title: 'Clean Site Promise',
    desc: 'Every project ends with a thorough cleanup. We haul our debris and leave your site ready for the next phase.',
  },
  {
    num: '04',
    title: 'Transparent Pricing',
    desc: 'Detailed written estimates with no hidden fees. You know exactly what you\'re paying before we lift a hammer.',
  },
]

export function WhyUsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
                alt="Professional demolition crew"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Orange corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-orange" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-orange" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-6 -right-6 bg-brand-steel p-6 rounded-sm shadow-card-hover"
            >
              <div className="font-display text-5xl text-brand-orange tracking-wider">2024</div>
              <div className="text-brand-concrete text-xs tracking-widest uppercase mt-1">Established</div>
              <div className="text-white text-sm mt-2 font-medium">Philadelphia&apos;s Trusted Crew</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="section-label mb-4 block">Why Choose Us</span>
              <h2 className="font-display text-6xl text-brand-steel tracking-wider leading-none mb-4">
                THE RAPID<br />
                <span className="text-gradient-orange">DIFFERENCE</span>
              </h2>
              <div className="divider-orange mb-8" />
              <p className="text-brand-slate leading-relaxed mb-10">
                We&apos;re not just another contractor. We&apos;re a Philadelphia-rooted team that shows
                up prepared, works efficiently, and holds our craft to the highest standard.
              </p>
            </motion.div>

            <div className="space-y-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 font-mono text-brand-orange/30 text-sm font-medium pt-1 group-hover:text-brand-orange transition-colors">
                    {r.num}
                  </div>
                  <div className="pl-5 border-l border-brand-concrete/10 group-hover:border-brand-orange/40 transition-colors">
                    <h3 className="font-semibold text-brand-steel mb-1.5 group-hover:text-brand-orange transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
