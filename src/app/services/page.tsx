"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const services = [
  { id: "demolition", icon: "🔨", title: "Interior Demolition", tagline: "Precision teardown, zero surprises.", description: "We safely remove walls, floors, ceilings, and entire room interiors with precision and care. Whether gutting a kitchen, clearing a basement, or opening up a floor plan — we handle it efficiently and cleanly.", features: ["Wall & partition removal","Floor demolition","Ceiling teardown","Debris hauling & disposal","Structural assessment","Dust containment"] },
  { id: "renovation", icon: "🏠", title: "Full Renovation", tagline: "Gutted shells to polished spaces.", description: "From complete gut renovations to targeted room transformations, we manage every phase — framing, drywall, flooring, painting, and finish work — under one roof.", features: ["Full gut & rebuild","Open concept conversions","Framing & structural work","Insulation & soundproofing","Finish carpentry","Project management"] },
  { id: "kitchen", icon: "🍳", title: "Kitchen Remodeling", tagline: "Kitchens that work as hard as you do.", description: "Full kitchen renovations including layout changes, custom cabinetry installation, countertop fabrication, tile backsplash, plumbing rough-in, and appliance installation.", features: ["Cabinet installation","Countertop installation","Tile backsplash","Layout reconfiguration","Island additions","Lighting upgrades"] },
  { id: "bathroom", icon: "🛁", title: "Bathroom Remodeling", tagline: "Luxury finishes, lasting quality.", description: "Complete bathroom renovations from floor to ceiling — tile work, shower surrounds, vanity replacement, plumbing rough-in coordination, and waterproofing.", features: ["Tile installation","Shower & tub surround","Vanity & fixture replacement","Plumbing rough-in","Waterproofing","Accent & niche work"] },
  { id: "flooring", icon: "🪵", title: "Flooring Installation", tagline: "Every floor tells a story.", description: "Expert installation of hardwood, luxury vinyl plank, ceramic tile, carpet, and laminate across residential and commercial properties. Subfloor repair included.", features: ["Hardwood (solid & engineered)","Luxury vinyl plank (LVP)","Ceramic & porcelain tile","Carpet installation","Subfloor repair","Transitions & thresholds"] },
  { id: "drywall", icon: "🖌️", title: "Drywall & Painting", tagline: "Flawless walls, professional finish.", description: "Hanging new drywall to skim coating and painting — we deliver smooth, professional results including water damage repair, texture matching, and interior painting.", features: ["Drywall hanging & taping","Skim coat finish","Texture matching","Water damage repair","Interior painting","Accent walls & trim"] },
];

export default function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <section className="pt-32 pb-20 bg-brand-steel-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">What We Offer</span>
            <h1 className="font-display text-6xl lg:text-8xl text-white mt-2 tracking-wider">OUR SERVICES</h1>
            <p className="text-brand-slate mt-4 max-w-xl text-lg">Professional renovation and demolition across Philadelphia, Upper Darby, and Lansdowne, PA.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.08}>
                <div
                  className={`cursor-pointer border rounded-sm p-7 transition-all duration-300 ${active === service.id ? "bg-brand-orange border-brand-orange" : "bg-brand-steel-light border-white/5 hover:border-brand-orange/30"}`}
                  onClick={() => setActive(active === service.id ? null : service.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <motion.div animate={{ rotate: active === service.id ? 45 : 0 }} className={`text-xl leading-none ${active === service.id ? "text-white" : "text-brand-slate"}`}>+</motion.div>
                  </div>
                  <h3 className="font-condensed text-xl tracking-wider uppercase text-white mb-1">{service.title}</h3>
                  <p className={`text-sm mb-4 ${active === service.id ? "text-orange-100" : "text-brand-slate"}`}>{service.tagline}</p>
                  <AnimatePresence>
                    {active === service.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="text-orange-100 text-sm leading-relaxed mb-5">{service.description}</p>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-2">
                          {service.features.map((f) => (
                            <div key={f} className="flex items-start gap-2 text-orange-100 text-xs leading-snug"><span className="text-white mt-0.5">✓</span> {f}</div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <h2 className="font-display text-4xl text-white tracking-wider mb-4">READY TO GET STARTED?</h2>
            <p className="text-brand-slate mb-8">Free, no-obligation estimates on any service listed above.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Get a Free Quote</Button>
              <Button href="tel:+13479773212" variant="ghost" size="lg" external>Call 347-977-3212</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
