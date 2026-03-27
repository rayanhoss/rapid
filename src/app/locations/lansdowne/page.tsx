import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renovation & Demolition Contractor Lansdowne PA | Rapid Renovation",
  description: "Local renovation and demolition contractor in Lansdowne PA. Kitchen remodeling, bathroom renovation, interior demolition, flooring & drywall. Licensed, insured & free estimates. Call 347-977-3212.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/locations/lansdowne" },
  openGraph: {
    title: "Renovation Contractor Lansdowne PA | Rapid Renovation & Demolition",
    description: "Trusted local renovation contractor in Lansdowne PA. Kitchen remodels, bathroom renovations, demo & flooring. Free estimates. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/locations/lansdowne",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Renovation & Demolition Contractor Lansdowne PA",
  provider: { "@id": "https://www.rapidrenovationdemolition.com/#business" },
  areaServed: { "@type": "City", name: "Lansdowne", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
  description: "Complete renovation and demolition services in Lansdowne PA.",
};

const services = [
  { title: "Kitchen Remodeling", href: "/services/kitchen-remodeling", desc: "Full kitchen renovations and targeted upgrades in Lansdowne homes." },
  { title: "Bathroom Remodeling", href: "/services/bathroom-remodeling", desc: "Custom tile, vanities, waterproofed showers for Lansdowne bathrooms." },
  { title: "Interior Demolition", href: "/services/interior-demolition", desc: "Walls, floors, full guts with debris removal in Lansdowne PA." },
  { title: "Flooring Installation", href: "/services/flooring-installation", desc: "Hardwood, LVP, tile & carpet throughout Lansdowne homes." },
  { title: "Full Renovation", href: "/services/full-renovation", desc: "End-to-end home renovations in Lansdowne from demo to finish." },
  { title: "Drywall & Painting", href: "/services/drywall-painting", desc: "Professional drywall and painting services in Lansdowne PA." },
];

export default function LansdownePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <article className="pt-32 bg-brand-steel min-h-screen">
        <header className="pb-20 bg-brand-steel-light relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 to-transparent" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav aria-label="Breadcrumb" className="text-brand-slate text-sm font-condensed tracking-wider uppercase mb-6">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
                <li className="text-brand-slate/40">/</li>
                <li className="text-brand-orange">Lansdowne</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              CONTRACTOR<br /><span className="text-brand-orange">LANSDOWNE</span><br />PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              Rapid Renovation & Demolition LLC serves Lansdowne, PA with full renovation and demolition services. Kitchens, bathrooms, flooring, demo, and more — local crew, fast response, fair prices.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Free Estimate in Lansdowne</Link>
              <a href="tel:+13479773212" className="border border-white/20 hover:border-brand-orange text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Call 347-977-3212</a>
            </div>
          </div>
        </header>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-8">SERVICES IN LANSDOWNE PA</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ title, href, desc }) => (
                <Link key={title} href={href} className="group bg-brand-steel-light border border-white/5 hover:border-brand-orange/40 p-6 rounded-sm transition-all">
                  <h3 className="font-condensed text-white tracking-wider uppercase mb-2 group-hover:text-brand-orange transition-colors">{title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </section>
          <section className="bg-brand-orange rounded-sm p-10 text-center">
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">LANSDOWNE PROJECT? LET'S TALK.</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">Free estimate on any renovation or demolition in Lansdowne PA. We respond within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-orange font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-brand-cream transition-colors inline-block">Get Free Estimate</Link>
              <a href="tel:+13479773212" className="border border-white text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white/10 transition-colors inline-block">Call 347-977-3212</a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
