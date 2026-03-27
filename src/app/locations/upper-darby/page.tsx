import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renovation & Demolition Contractor Upper Darby PA | Rapid Renovation",
  description: "Top-rated renovation and demolition contractor in Upper Darby PA. Kitchen remodeling, bathroom renovation, interior demolition & flooring. Licensed, insured & local. Free estimates. Call 347-977-3212.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/locations/upper-darby" },
  openGraph: {
    title: "Renovation Contractor Upper Darby PA | Rapid Renovation & Demolition",
    description: "Local renovation and demolition contractor serving Upper Darby PA. Kitchen remodeling, bathroom renovation, flooring & more. Free estimates. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/locations/upper-darby",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Renovation & Demolition Contractor Upper Darby PA",
  provider: { "@id": "https://www.rapidrenovationdemolition.com/#business" },
  areaServed: { "@type": "City", name: "Upper Darby", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
  description: "Complete renovation and demolition services in Upper Darby PA including kitchen remodeling, bathroom renovation, interior demolition, flooring installation, drywall and painting.",
};

const services = [
  { title: "Kitchen Remodeling", href: "/services/kitchen-remodeling", desc: "Full kitchen gut-and-rebuilds to targeted upgrades. Cabinets, countertops, backsplash, and layout changes." },
  { title: "Bathroom Remodeling", href: "/services/bathroom-remodeling", desc: "Floor-to-ceiling tile, custom showers, vanities, and waterproofing done right." },
  { title: "Interior Demolition", href: "/services/interior-demolition", desc: "Clean, fast teardown of walls, floors, ceilings, and full rooms with debris removal." },
  { title: "Flooring Installation", href: "/services/flooring-installation", desc: "Hardwood, LVP, tile, and carpet across homes and commercial spaces in Upper Darby." },
  { title: "Full Renovation", href: "/services/full-renovation", desc: "End-to-end renovations from gutted shell to move-in-ready space." },
  { title: "Drywall & Painting", href: "/services/drywall-painting", desc: "Professional skim coat, hang, tape, and interior/exterior painting." },
];

export default function UpperDarbyPage() {
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
                <li><Link href="/locations" className="hover:text-brand-orange transition-colors">Locations</Link></li>
                <li className="text-brand-slate/40">/</li>
                <li className="text-brand-orange">Upper Darby</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              CONTRACTOR<br /><span className="text-brand-orange">UPPER DARBY</span><br />PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              Rapid Renovation & Demolition LLC is your local renovation and demolition contractor in Upper Darby, PA. We handle kitchens, bathrooms, demo, flooring, and full renovations — licensed, insured, and ready to work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Free Estimate in Upper Darby</Link>
              <a href="tel:+13479773212" className="border border-white/20 hover:border-brand-orange text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Call 347-977-3212</a>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-8">OUR SERVICES IN UPPER DARBY PA</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ title, href, desc }) => (
                <Link key={title} href={href} className="group bg-brand-steel-light border border-white/5 hover:border-brand-orange/40 p-6 rounded-sm transition-all">
                  <h3 className="font-condensed text-white tracking-wider uppercase mb-2 group-hover:text-brand-orange transition-colors">{title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-brand-steel-light border border-white/5 rounded-sm p-8">
            <h2 className="font-display text-3xl text-white tracking-wider mb-5">WHY UPPER DARBY HOMEOWNERS TRUST US</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                ["Local & Responsive","We're in the area and can be on site quickly. Same-week estimates for most Upper Darby projects."],
                ["Delaware County Licensed","Properly licensed and insured for all renovation and demolition work in Delaware County municipalities."],
                ["Transparent Quotes","Line-item estimates so you know exactly what you're paying for — no vague ballparks."],
                ["Clean Sites Every Day","Daily debris cleanup and dust containment. Your neighbors won't even know we're there."],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-condensed text-white tracking-wider uppercase mb-1">{title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-brand-orange rounded-sm p-10 text-center">
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">UPPER DARBY PROJECT? CALL US.</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">Free estimate on any renovation or demolition project in Upper Darby, PA. We respond within 24 hours.</p>
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
