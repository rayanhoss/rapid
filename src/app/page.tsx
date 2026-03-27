"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "100%", label: "Insured & Bonded" },
  { value: "5★",   label: "Client Satisfaction" },
  { value: "Free", label: "Estimates Always" },
];

const services = [
  { icon: "🔨", title: "Interior Demolition",  href: "/services/interior-demolition",  desc: "Safe, precise teardown of walls, floors, ceilings, and full room guts — debris removal included." },
  { icon: "🏠", title: "Full Renovation",       href: "/services/full-renovation",       desc: "End-to-end project management from gutted shell to move-in-ready space." },
  { icon: "🍳", title: "Kitchen Remodeling",    href: "/services/kitchen-remodeling",    desc: "Cabinets, countertops, backsplash, flooring, and open-concept conversions." },
  { icon: "🛁", title: "Bathroom Remodeling",   href: "/services/bathroom-remodeling",   desc: "Floor-to-ceiling tile, custom showers, vanity replacement, and proper waterproofing." },
  { icon: "🪵", title: "Flooring Installation", href: "/services/flooring-installation", desc: "Hardwood, LVP, tile, and carpet across Philadelphia homes and businesses." },
  { icon: "🖌️", title: "Drywall & Painting",   href: "/services/drywall-painting",      desc: "Professional hang, skim coat, tape, mud, and interior painting." },
];

const testimonials = [
  { name: "Mark D.",        location: "Upper Darby, PA",  stars: 5, text: "Rapid Renovation gutted and rebuilt our kitchen in Upper Darby. New quartz countertops, tile backsplash, opened up the wall — came in on budget and the crew cleaned up every day. Wouldn't hesitate to hire again." },
  { name: "Sandra K.",      location: "Philadelphia, PA", stars: 5, text: "I got three quotes. Rapid Renovation was the only contractor who itemized every line — waterproofing, backer board, tile separately. Bathroom came out perfect. The tile work is immaculate." },
  { name: "Tony & Lisa B.", location: "Upper Darby, PA",  stars: 5, text: "They handled everything on our fixer-upper rowhouse — full demo, drywall, hardwood floors throughout, and a bathroom renovation. Consistent communication and honest when surprises came up behind the walls." },
];

const neighborhoods = ["Fishtown","Kensington","South Philly","Upper Darby","Lansdowne","Drexel Hill","Havertown","Springfield","Ardmore","Clifton Heights"];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-steel via-brand-steel-light to-brand-steel-mid" />

          {/* Subtle engineering blueprint grid — no giant letters */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <pattern id="grid-lg" width="300" height="300" patternUnits="userSpaceOnUse">
                <path d="M 300 0 L 0 0 0 300" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <rect width="100%" height="100%" fill="url(#grid-lg)"/>
          </svg>

          {/* Orange diagonal accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-brand-orange/10 to-transparent" />

          {/* Diagonal construction-tape stripe — design element, no letters */}
          <div className="absolute top-0 right-0 w-px h-full bg-brand-orange/20" style={{ right: "33%" }} />
          <div className="absolute top-0 right-0 w-px h-full bg-brand-orange/10" style={{ right: "66%" }} />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
          <div className="max-w-3xl">
            {/* SEO-invisible real H1 — screen readers + Google read this */}
            <h1 className="sr-only">
              Renovation &amp; Demolition Contractor — Philadelphia, PA | Rapid Renovation &amp; Demolition LLC
            </h1>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 rounded-sm px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">
                Philadelphia's Renovation &amp; Demolition Contractor — Insured &amp; Bonded
              </span>
            </motion.div>

            {/* Display headline — visually dominant, NOT the H1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              aria-hidden="true"
              className="font-display text-6xl sm:text-7xl lg:text-9xl text-white leading-none tracking-wider"
            >
              BUILD.<br />
              <span className="text-gradient-orange">BREAK.</span><br />
              TRANSFORM.
            </motion.div>

            {/* Subheadline — keyword-rich, readable */}
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-brand-slate-light leading-relaxed max-w-xl"
            >
              Rapid Renovation &amp; Demolition LLC handles interior demolition, kitchen remodeling,
              bathroom renovation, flooring, and full gut renovations across Philadelphia,
              Upper Darby, and Lansdowne. Licensed, insured, and transparent on price.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg" className="text-base">
                Get My Free Estimate
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Button>
              <Button href="/projects" variant="ghost" size="lg" className="text-base">
                See Philadelphia Projects
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-6 text-brand-slate"
            >
              {["✓ Insured & Bonded", "✓ Free Estimates", "✓ Mon–Sat 8AM–6PM", "✓ Licensed in PA"].map((t) => (
                <span key={t} className="font-condensed text-sm tracking-wider">{t}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-condensed text-brand-slate text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-brand-orange to-transparent"
          />
        </motion.div>
      </section>

      {/* ══ STATS ══ */}
      <section className="relative bg-brand-orange py-12" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-display text-5xl text-white">{stat.value}</div>
                <div className="font-condensed text-sm text-orange-100 tracking-widest uppercase mt-1">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="section-padding bg-brand-steel" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">What We Do</span>
            <h2 id="services-heading" className="font-display text-5xl lg:text-7xl text-white mt-2 tracking-wider">
              RENOVATION &amp; DEMOLITION<br className="hidden lg:block"/> SERVICES — PHILADELPHIA PA
            </h2>
            <p className="text-brand-slate mt-4 max-w-2xl mx-auto">
              From full commercial demolitions to single-room renovations, we handle every phase of your
              construction project across Philadelphia, Upper Darby, Lansdowne, and Delaware County.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <Link href={service.href} className="group bg-brand-steel-light border border-white/5 hover:border-brand-orange/30 p-7 rounded-sm transition-all duration-300 hover:shadow-card-hover h-full flex flex-col">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="font-condensed text-white text-xl tracking-wider uppercase mb-2 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed flex-1">{service.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-brand-orange font-condensed text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button href="/services" variant="outline" size="lg">View All Services</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="section-padding relative bg-brand-steel-light overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">Why Choose Us</span>
              <h2 id="why-heading" className="font-display text-5xl lg:text-6xl text-white mt-2 tracking-wider leading-tight">
                WORK THAT<br />SPEAKS FOR<br />ITSELF
              </h2>
              <p className="text-brand-slate mt-6 leading-relaxed">
                Getting a renovation contractor in Philadelphia who shows up, communicates, and delivers
                on what they quote is harder than it should be. We built Rapid Renovation on the
                opposite of that — transparent pricing before work starts, daily site communication,
                clean jobsites every day, and craftsmanship we stand behind.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ["Licensed &amp; Insured in Pennsylvania",    "Full general liability coverage on every project. Certificate provided on request."],
                  ["Transparent, Flat-Rate Quotes",            "Line-item estimates before any work begins. What we quote is what you pay."],
                  ["Clean Job Sites — Every Day",              "Dust containment, daily debris removal. We respect your home throughout the project."],
                  ["Serving Philadelphia &amp; Delaware County", "Local crew. We know the neighborhoods, permitting offices, and building codes."],
                ].map(([title, desc]) => (
                  <div key={title as string} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-sm bg-brand-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-condensed text-white tracking-wider" dangerouslySetInnerHTML={{ __html: title as string }} />
                      <div className="text-brand-slate text-sm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10"><Button href="/contact" size="lg">Get Started Today</Button></div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "100%", label: "Client Satisfaction" },
                  { num: "150+", label: "Projects in Philadelphia" },
                  { num: "5★",   label: "Average Rating" },
                  { num: "$0",   label: "Hidden Fees" },
                ].map((item) => (
                  <div key={item.label} className="bg-glass p-8 text-center rounded-sm">
                    <div className="font-display text-4xl text-brand-orange">{item.num}</div>
                    <div className="font-condensed text-brand-slate-light text-sm tracking-wider uppercase mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              {/* Neighborhood coverage */}
              <div className="mt-6 bg-brand-steel border border-white/5 rounded-sm p-5">
                <div className="font-condensed text-brand-orange text-xs tracking-widest uppercase mb-3">Recent projects in</div>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((n) => (
                    <span key={n} className="text-brand-slate-light font-condensed text-xs tracking-wider bg-white/5 px-2 py-1 rounded-sm">{n}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-padding bg-brand-steel" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">Client Stories</span>
            <h2 id="testimonials-heading" className="font-display text-5xl lg:text-7xl text-white mt-2 tracking-wider">WHAT PHILADELPHIA<br/>HOMEOWNERS SAY</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-brand-steel-light border border-white/5 p-7 rounded-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                    {Array(t.stars).fill(0).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-brand-slate-light leading-relaxed flex-1 italic">"{t.text}"</p>
                  <div className="mt-5 pt-5 border-t border-white/5">
                    <div className="font-condensed text-white tracking-wider">{t.name}</div>
                    <div className="text-brand-slate text-sm">{t.location}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section-padding bg-brand-steel-mid relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,84,26,0.12)_0%,transparent_60%)]" />
        <AnimatedSection className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl lg:text-7xl text-white tracking-wider">
            READY TO START<br /><span className="text-gradient-orange">YOUR PROJECT</span><br />IN PHILADELPHIA?
          </h2>
          <p className="text-brand-slate mt-6 text-lg">
            Call us Monday through Saturday, 8AM–6PM, or request a free estimate online.
            We serve Philadelphia, Upper Darby, Lansdowne, and all of Delaware County.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">Start My Free Estimate</Button>
            <Button href="tel:+13479773212" variant="ghost" size="lg" external>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call 347-977-3212
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
