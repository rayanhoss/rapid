import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Philadelphia PA – Free Estimates | Rapid Renovation",
  description: "Expert kitchen remodeling in Philadelphia, Upper Darby & Lansdowne PA. Custom cabinets, quartz countertops, tile backsplash, open concept conversions. Licensed & insured. Call 347-977-3212 for a free quote.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/services/kitchen-remodeling" },
  openGraph: {
    title: "Kitchen Remodeling Philadelphia PA | Rapid Renovation & Demolition",
    description: "Professional kitchen remodeling in Philadelphia PA. Full gut renovations to targeted upgrades. Free estimates. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/services/kitchen-remodeling",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does kitchen remodeling cost in Philadelphia PA?", acceptedAnswer: { "@type": "Answer", text: "Kitchen remodeling in Philadelphia typically ranges from $8,000–$40,000+ depending on scope. A basic refresh averages $10,000–$18,000. A full gut renovation with layout changes runs $20,000–$40,000+. We provide free detailed quotes." } },
    { "@type": "Question", name: "How long does a kitchen remodel take in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "A typical kitchen remodel takes 3–6 weeks from demolition to final walkthrough. Full gut renovations can take 6–10 weeks depending on material lead times and permit requirements." } },
    { "@type": "Question", name: "Do you handle kitchen permits in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle all permit coordination for kitchen remodeling projects in Philadelphia and surrounding municipalities including Upper Darby and Lansdowne." } },
    { "@type": "Question", name: "Can I stay in my home during a kitchen remodel?", acceptedAnswer: { "@type": "Answer", text: "Yes — most homeowners stay in their homes during kitchen renovations. We set up dust barriers, maintain a clean site daily, and schedule noisy work during agreed hours." } },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen Remodeling Philadelphia PA",
  provider: { "@id": "https://www.rapidrenovationdemolition.com/#business" },
  areaServed: [{ "@type": "City", name: "Philadelphia" }, { "@type": "City", name: "Upper Darby" }, { "@type": "City", name: "Lansdowne" }],
  description: "Complete kitchen remodeling services in Philadelphia PA including cabinet installation, countertop fabrication, tile backsplash, flooring, and open concept conversions.",
  offers: { "@type": "Offer", priceCurrency: "USD", priceRange: "$$" },
};

const faqs = [
  { q: "How much does kitchen remodeling cost in Philadelphia PA?", a: "Kitchen remodeling in Philadelphia typically ranges from $8,000–$40,000+ depending on scope. A basic refresh (cabinets, countertops, backsplash) averages $10,000–$18,000. A full gut renovation with layout changes runs $20,000–$40,000+. We provide free detailed quotes with no obligation." },
  { q: "How long does a kitchen remodel take?", a: "A typical kitchen remodel takes 3–6 weeks from demolition to final walkthrough. Full gut renovations can take 6–10 weeks. Timeline depends on material lead times, permit requirements, and scope." },
  { q: "Do I need a permit for kitchen remodeling in Philadelphia?", a: "Most structural changes, electrical work, and plumbing modifications require permits in Philadelphia. We handle all permit coordination as part of our service." },
  { q: "Can I stay in my home during a kitchen remodel?", a: "Yes — most homeowners stay in their homes during kitchen renovations. We set up dust barriers, maintain a clean site daily, and schedule noisy work during agreed hours." },
];

const included = ["Cabinet removal & installation","Quartz & granite countertops","Tile backsplash installation","Open concept wall removal","LVP & tile flooring","Plumbing rough-in coordination","Electrical rough-in coordination","Kitchen island additions","Recessed lighting","Appliance installation","Drywall & painting","Final trim & punch list"];
const cities = ["Philadelphia","Upper Darby","Lansdowne","Drexel Hill","Havertown","Springfield","Media","Ardmore","Broomall","Swarthmore","Collingdale","Clifton Heights"];

export default function KitchenRemodelingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                <li className="text-brand-orange">Kitchen Remodeling</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              KITCHEN<br /><span className="text-brand-orange">REMODELING</span><br />PHILADELPHIA PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              From a simple cabinet refresh to a full gut renovation, Rapid Renovation & Demolition LLC delivers expert kitchen remodeling across Philadelphia, Upper Darby, and Lansdowne. Licensed, insured, and transparent on price.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Get a Free Kitchen Quote</Link>
              <a href="tel:+13479773212" className="border border-white/20 hover:border-brand-orange text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Call 347-977-3212</a>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-8">WHAT WE HANDLE</h2>
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">WHY PHILADELPHIA HOMEOWNERS CHOOSE US</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[["Transparent Flat Pricing","We provide detailed line-item quotes before any work begins. No surprise change orders, no vague estimates."],["Fully Insured & Bonded","Every kitchen remodel is covered by comprehensive general liability insurance. Your home is protected."],["Local Philadelphia Crew","We're based in the Philadelphia area and know local permitting, building codes, and neighborhoods."],["Clean Job Sites Daily","We contain dust, remove debris daily, and respect your home throughout the project."]].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-condensed text-white tracking-wider uppercase mb-2">{title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">KITCHEN REMODELING SERVICE AREA</h2>
            <p className="text-brand-slate leading-relaxed mb-6">We provide kitchen remodeling throughout the Philadelphia metro area, including:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {cities.map((city) => (
                <span key={city} className="bg-brand-steel-light border border-white/5 text-brand-slate-light font-condensed text-sm tracking-wider px-3 py-2 rounded-sm text-center">{city}, PA</span>
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">READY FOR YOUR NEW KITCHEN?</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">Free, no-obligation kitchen remodeling estimate. Serving Philadelphia, Upper Darby, Lansdowne & all of Delaware County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-orange font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-brand-cream transition-colors inline-block">Request Free Estimate</Link>
              <a href="tel:+13479773212" className="border border-white text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white/10 transition-colors inline-block">Call 347-977-3212</a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
