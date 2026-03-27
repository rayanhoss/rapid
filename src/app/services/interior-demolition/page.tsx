import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Demolition Contractor Philadelphia PA | Rapid Renovation",
  description: "Professional interior demolition in Philadelphia, Upper Darby & Lansdowne PA. Wall removal, floor demo, full gut, debris hauling. Fast, clean, insured. Call 347-977-3212 for a free quote.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/services/interior-demolition" },
  openGraph: {
    title: "Interior Demolition Philadelphia PA | Rapid Renovation & Demolition",
    description: "Licensed interior demolition contractor in Philadelphia PA. Walls, floors, ceilings, full gut renovations. Fast turnaround. Free quotes. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/services/interior-demolition",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does interior demolition cost in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "Interior demolition in Philadelphia typically ranges from $1,500–$15,000 depending on scope. A single room gut runs $1,500–$4,000. A full floor or multiple rooms runs $5,000–$15,000+. Debris removal and disposal are included in our quotes." } },
    { "@type": "Question", name: "Do you handle asbestos or lead paint before demolition in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "We coordinate with certified abatement contractors when asbestos or lead paint is suspected, especially in Philadelphia homes built before 1980. We do not begin demo until the site has been cleared or treated." } },
    { "@type": "Question", name: "How fast can you complete an interior demolition in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "Most single-room demos are completed in 1–2 days. Full floor demos typically take 2–4 days. Commercial and multi-unit projects are scoped individually. We work around your schedule." } },
  ],
};

const faqs = [
  { q: "How much does interior demolition cost in Philadelphia?", a: "Interior demolition in Philadelphia typically ranges from $1,500–$15,000 depending on scope. A single room gut runs $1,500–$4,000. A full floor or multiple rooms runs $5,000–$15,000+. Debris removal and disposal are included in our quotes." },
  { q: "Do you handle asbestos or lead paint before demo?", a: "We coordinate with certified abatement contractors when asbestos or lead paint is suspected, especially in Philadelphia homes built before 1980. We do not begin demo until the site has been cleared." },
  { q: "How fast can you complete interior demolition?", a: "Most single-room demos are completed in 1–2 days. Full floor demos typically take 2–4 days. Commercial and multi-unit projects are scoped individually." },
  { q: "Do you remove and haul away debris?", a: "Yes. All debris removal and hauling is included in our demolition quotes. We leave the site clean and ready for the next trade." },
];

const included = ["Wall & partition removal","Load-bearing wall removal (with engineering)","Floor demolition (all types)","Ceiling teardown","Kitchen gut","Bathroom gut","Full residential gut","Commercial interior demo","Debris hauling & disposal","Dust containment systems","Site cleanup & broom sweep","Coordination with structural engineer"];

export default function InteriorDemolitionPage() {
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
                <li className="text-brand-orange">Interior Demolition</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              INTERIOR<br /><span className="text-brand-orange">DEMOLITION</span><br />PHILADELPHIA PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              Fast, clean, professional interior demolition in Philadelphia, Upper Darby, and Lansdowne. From single-room guts to full commercial teardowns — we do it safely, quickly, and leave the site ready for the next phase.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Get a Free Demo Quote</Link>
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">NEED A DEMO CREW?</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">Free quote on any demolition project in Philadelphia, Upper Darby, Lansdowne & Delaware County PA.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-orange font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-brand-cream transition-colors inline-block">Get Free Demo Quote</Link>
              <a href="tel:+13479773212" className="border border-white text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white/10 transition-colors inline-block">Call 347-977-3212</a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
