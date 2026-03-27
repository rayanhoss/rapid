'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Marcus Johnson',
    location: 'Upper Darby, PA',
    rating: 5,
    text: 'Rapid Renovation knocked out my entire kitchen demo in one day. Super professional crew, clean site, and they were done before noon. Already referred them to my neighbor.',
    project: 'Kitchen Demolition',
    initials: 'MJ',
  },
  {
    name: 'Sandra Williams',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'I needed my basement completely gutted before a renovation. These guys showed up on time, worked fast, and left the place spotless. Fair pricing too. Highly recommend.',
    project: 'Basement Gut-Out',
    initials: 'SW',
  },
  {
    name: 'Tony Reeves',
    location: 'Lansdowne, PA',
    rating: 5,
    text: 'Used them for a commercial property teardown. Very organized, followed all safety protocols, and finished ahead of schedule. Will definitely hire again for our next project.',
    project: 'Commercial Demo',
    initials: 'TR',
  },
  {
    name: 'Alicia Chen',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'The team was incredibly professional. They took great care with selective demo—preserved what needed to stay and cleared the rest efficiently. Couldn\'t be happier.',
    project: 'Selective Demolition',
    initials: 'AC',
  },
  {
    name: 'David Park',
    location: 'Upper Darby, PA',
    rating: 5,
    text: 'Fast quote turnaround, honest pricing, and excellent work. They handled my full bathroom renovation demolition perfectly. Zero complaints.',
    project: 'Bathroom Renovation Prep',
    initials: 'DP',
  },
]

export function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="section-padding bg-brand-steel relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(232,82,26,0.1) 40px,
            rgba(232,82,26,0.1) 41px
          )`,
        }}
      />

      <div className="container-wide relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 block justify-center">Client Reviews</span>
          <h2 className="font-display text-6xl text-white tracking-wider mb-4">
            WHAT CLIENTS <span className="text-brand-orange">SAY</span>
          </h2>
          <p className="text-brand-concrete max-w-xl mx-auto">
            Real reviews from real Philadelphia-area clients. We let our work speak for itself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={t.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="glass border border-white/5 rounded-sm p-6 h-full flex flex-col"
                >
                  {/* Stars */}
                  <div className="stars text-lg mb-4">
                    {'★'.repeat(t.rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-brand-concrete/90 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-brand-orange text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{t.name}</div>
                      <div className="text-brand-concrete/50 text-xs">{t.location}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs font-mono text-brand-orange/60 border border-brand-orange/20 px-2 py-1 rounded-full">
                        {t.project}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
