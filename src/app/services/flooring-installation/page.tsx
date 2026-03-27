import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flooring Installation Philadelphia PA – Hardwood, LVP & Tile | Rapid Renovation",
  description: "Expert flooring installation in Philadelphia, Upper Darby & Lansdowne PA. Hardwood, luxury vinyl plank, ceramic tile & carpet. Licensed & insured. Free estimates. Call 347-977-3212.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/services/flooring-installation" },
  openGraph: {
    title: "Flooring Installation Philadelphia PA | Rapid Renovation & Demolition",
    description: "Professional hardwood, LVP, tile & carpet installation in Philadelphia PA. Free estimates. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/services/flooring-installation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does flooring installation cost in Philadelphia PA?", acceptedAnswer: { "@type": "Answer", text: "Flooring installation in Philadelphia typically runs $4–$8 per sq ft for LVP, $7–$14 per sq ft for engineered hardwood, and $6–$12 per sq ft for tile — all installed. Subfloor repair is quoted separately based on conditions found." } },
    { "@type": "Question", name: "How long does flooring installation take?", acceptedAnswer: { "@type": "Answer", text: "Most flooring projects take 1–3 days depending on square footage and material. Hardwood requires 3–5 days of acclimation time before installation begins. Large commercial projects may take up to a week." } },
    { "@type": "Question", name: "Do you remove old flooring before installing new?", acceptedAnswer: { "@type": "Answer", text: "Yes. Old flooring removal and disposal is included in our flooring quotes. We also assess and repair the subfloor before installation to ensure a flat, solid surface." } },
  ],
};

const included = [
  "Hardwood flooring (solid & engineered)",
  "Luxury vinyl plank (LVP)",
  "Ceramic & porcelain tile",
  "Carpet installation",
  "Subfloor inspection & repair",
  "Subfloor leveling (self-leveling compound)",
  "Old flooring removal & disposal",
  "Stair tread installation",
  "Transitions & thresholds",
  "Base molding reinstallation",
  "Residential & commercial",
  "Acclimation & layout planning",
];

const cities = ["Philadelphia", "Upper Darby", "Lansdowne", "Drexel Hill", "Havertown", "Springfield", "Media", "Ardmore", "Broomall", "Darby", "Collingdale", "Clifton Heights"];

const faqs = [
  { q: "How much does flooring installation cost in Philadelphia PA?", a: "Flooring installation in Philadelphia typically runs $4–$8 per sq ft for LVP, $7–$14 per sq ft for engineered hardwood, and $6–$12 per sq ft for tile — all installed. Subfloor repair is quoted separately based on conditions." },
  { q: "How long does flooring installation take?", a: "Most flooring projects take 1–3 days depending on square footage and material. Hardwood requires 3–5 days of acclimation time before installation begins. Large commercial projects may take longer." },
  { q: "Do you remove old flooring before installing new?", a: "Yes. Old flooring removal and disposal is included in our flooring quotes. We also assess and repair the subfloor before installation to ensure a flat, solid surface." },
  { q: "Hardwood or LVP — which should I choose?", a: "LVP is waterproof, more affordable, and faster to install — ideal for rentals, basements, or high-moisture areas. Engineered hardwood looks and feels more premium and can be refinished. We'll give you our honest recommendation based on your specific home and budget." },
];

export default function FlooringInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="pt-32 bg-brand-steel min-h-screen">
        <header className="pb-20 bg-brand-steel-light relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 to-transparent" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav aria-label="Breadcrumb" className="text-brand-slate text-sm font-condensed tracking-wider uppercase mb-6">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
                <li className="text-brand-slate/40">/</li>
                <li><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link></li>
                <li className="text-brand-slate/40">/</li>
                <li className="text-brand-orange">Flooring Installation</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              FLOORING<br /><span className="text-brand-orange">INSTALLATION</span><br />PHILADELPHIA PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              Hardwood, LVP, tile, and carpet installation across Philadelphia, Upper Darby, and Lansdowne.
              We handle removal, subfloor prep, installation, and all trim work — one crew, start to finish.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">
                Get a Free Flooring Quote
              </Link>
              <a href="tel:+13479773212" className="border border-white/20 hover:border-brand-orange text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">
                Call 347-977-3212
              </a>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-8">WHAT WE INSTALL</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-brand-steel-light border border-white/5 px-4 py-3 rounded-sm">
                  <span className="text-brand-orange font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-brand-slate-light text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-brand-steel-light border border-white/5 rounded-sm p-8">
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">FLOORING TYPES WE SPECIALIZE IN</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["Hardwood Flooring", "Solid and engineered hardwood — oak, maple, hickory, and more. Includes subfloor leveling, full acclimation period, and stair treads. Can be refinished for decades of use."],
                ["Luxury Vinyl Plank (LVP)", "100% waterproof, durable, and significantly more affordable than hardwood. Ideal for high-traffic areas, rentals, and basements. Fast 1–2 day installation on most projects."],
                ["Ceramic & Porcelain Tile", "Floor tile for kitchens, bathrooms, mudrooms, and commercial spaces. Large-format, mosaic, and custom patterns. Includes proper mortar bed and grout sealing."],
                ["Carpet", "Bedroom and basement carpet installation. We work with your material choice or can source through our supplier network at contractor pricing."],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-condensed text-white tracking-wider uppercase mb-2 text-lg">{title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">FLOORING SERVICE AREA</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {cities.map((city) => (
                <span key={city} className="bg-brand-steel-light border border-white/5 text-brand-slate-light font-condensed text-sm tracking-wider px-3 py-2 rounded-sm text-center">
                  {city}, PA
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-8">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group bg-brand-steel-light border border-white/5 rounded-sm">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-condensed tracking-wider uppercase text-sm list-none">
                    {q}
                    <span className="text-brand-orange group-open:rotate-45 transition-transform text-xl leading-none ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-brand-slate text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-brand-orange rounded-sm p-10 text-center">
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">READY FOR NEW FLOORS?</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">
              Free flooring estimate anywhere in Philadelphia, Upper Darby, Lansdowne & Delaware County PA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-orange font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-brand-cream transition-colors inline-block">
                Request Free Estimate
              </Link>
              <a href="tel:+13479773212" className="border border-white text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white/10 transition-colors inline-block">
                Call 347-977-3212
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
