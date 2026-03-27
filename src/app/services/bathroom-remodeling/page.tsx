import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Philadelphia PA – Free Estimates | Rapid Renovation",
  description: "Expert bathroom remodeling in Philadelphia, Upper Darby & Lansdowne PA. Tile installation, shower surrounds, vanity replacement, waterproofing. Licensed & insured. Call 347-977-3212.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/services/bathroom-remodeling" },
  openGraph: {
    title: "Bathroom Remodeling Philadelphia PA | Rapid Renovation & Demolition",
    description: "Professional bathroom remodeling in Philadelphia PA. Floor-to-ceiling tile, custom showers, vanity upgrades. Free estimates. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/services/bathroom-remodeling",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does bathroom remodeling cost in Philadelphia PA?", acceptedAnswer: { "@type": "Answer", text: "Bathroom remodeling in Philadelphia typically ranges from $5,000–$25,000. A basic refresh (vanity, fixtures, tile) runs $5,000–$10,000. A full master bath renovation with custom tile and a walk-in shower averages $12,000–$25,000+." } },
    { "@type": "Question", name: "How long does a bathroom remodel take in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "Most bathroom remodels take 1–3 weeks. A full gut renovation with custom tile work can take 2–4 weeks depending on tile complexity and material availability." } },
    { "@type": "Question", name: "Do you waterproof showers in Philadelphia bathroom remodels?", acceptedAnswer: { "@type": "Answer", text: "Yes. All our shower installations include proper waterproofing membrane behind backer board. We never skip this step — it's the most common cause of mold and water damage in bathroom renovations." } },
  ],
};

const faqs = [
  { q: "How much does bathroom remodeling cost in Philadelphia PA?", a: "Bathroom remodeling in Philadelphia typically ranges from $5,000–$25,000. A basic refresh (vanity, fixtures, tile) runs $5,000–$10,000. A full master bath renovation with custom tile and a walk-in shower averages $12,000–$25,000+." },
  { q: "How long does a bathroom remodel take?", a: "Most bathroom remodels take 1–3 weeks. A full gut renovation with custom tile work can take 2–4 weeks depending on tile complexity and material availability." },
  { q: "Do you waterproof showers?", a: "Yes. All our shower installations include proper waterproofing membrane behind backer board. We never skip this step — it's the most common cause of mold and water damage in bathroom renovations." },
  { q: "Can you remove a tub and install a walk-in shower?", a: "Absolutely. Tub-to-shower conversions are one of our most common bathroom projects in Philadelphia. We handle the plumbing coordination, waterproofing, framing, and all tile work." },
];

const included = ["Full bathroom demolition","Waterproofing membrane installation","Floor & wall tile installation","Custom shower surrounds","Walk-in shower conversions","Tub-to-shower conversions","Vanity & sink replacement","Toilet replacement","Fixture & faucet upgrades","Niche & accent tile work","Drywall & backer board","Exhaust fan installation"];
const cities = ["Philadelphia","Upper Darby","Lansdowne","Drexel Hill","Havertown","Springfield","Media","Ridley Park","Folsom","Broomall","Glenolden","Darby"];

export default function BathroomRemodelingPage() {
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
                <li className="text-brand-orange">Bathroom Remodeling</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              BATHROOM<br /><span className="text-brand-orange">REMODELING</span><br />PHILADELPHIA PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              Complete bathroom renovations from demo to final tile seal. Rapid Renovation handles everything — waterproofing, tile, plumbing coordination, vanities, and fixtures — across Philadelphia, Upper Darby, and Lansdowne.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Get a Free Bathroom Quote</Link>
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

          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">BATHROOM REMODELING SERVICE AREA</h2>
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">READY FOR YOUR NEW BATHROOM?</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">Free, no-obligation bathroom remodeling estimate. Serving Philadelphia, Upper Darby, Lansdowne & all of Delaware County.</p>
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
