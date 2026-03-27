import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Home Renovation Philadelphia PA | Rapid Renovation & Demolition",
  description: "Complete home renovation contractor in Philadelphia, Upper Darby & Lansdowne PA. Gut renovations, open concept conversions, full project management. Licensed & insured. Call 347-977-3212.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/services/full-renovation" },
  openGraph: {
    title: "Full Home Renovation Philadelphia PA | Rapid Renovation & Demolition",
    description: "End-to-end home renovation in Philadelphia PA. Demo to finished space, one crew. Free estimates. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/services/full-renovation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a full home renovation cost in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "Full home renovations in Philadelphia vary widely based on scope. A single-floor renovation typically runs $25,000–$75,000. A full gut renovation of a 3-bedroom rowhouse averages $60,000–$120,000+. We provide detailed line-item quotes before any work begins." } },
    { "@type": "Question", name: "Do you manage all the trades on a full renovation?", acceptedAnswer: { "@type": "Answer", text: "Yes. We coordinate all trades — plumbing, electrical, HVAC, and specialty work — as part of our full renovation service. You have one point of contact for the entire project." } },
    { "@type": "Question", name: "How long does a full home renovation take in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "A full gut renovation of a Philadelphia rowhouse typically takes 8–16 weeks depending on scope, permit timelines, and material lead times. We provide a written project schedule before work begins." } },
  ],
};

const included = [
  "Full gut demolition",
  "Framing & structural work",
  "Insulation & weatherproofing",
  "Drywall hang, tape & skim coat",
  "Kitchen renovation",
  "Bathroom renovation",
  "Flooring throughout",
  "Interior painting",
  "Open concept conversions",
  "Load-bearing wall removal",
  "Trade coordination (plumbing, electrical)",
  "Permits & inspections",
  "Project scheduling & management",
  "Final punch list & walkthrough",
];

const cities = ["Philadelphia", "Upper Darby", "Lansdowne", "Drexel Hill", "Havertown", "Springfield", "Collingdale", "Darby", "Media", "Swarthmore", "Clifton Heights", "Glenolden"];

const faqs = [
  { q: "How much does a full home renovation cost in Philadelphia?", a: "Full home renovations vary widely by scope. A single-floor renovation typically runs $25,000–$75,000. A full gut renovation of a 3-bedroom Philadelphia rowhouse averages $60,000–$120,000+. We provide detailed line-item quotes before any work begins — no guesses." },
  { q: "Do you manage all trades on a full renovation?", a: "Yes. We coordinate all trades — plumbing, electrical, HVAC, and specialty subcontractors — as part of our full renovation service. You have one point of contact for the entire project from demo to final walkthrough." },
  { q: "How long does a full home renovation take?", a: "A full gut renovation of a Philadelphia rowhouse typically takes 8–16 weeks depending on scope, permit timelines, and material lead times. We provide a written project schedule before work begins and keep you updated throughout." },
  { q: "Can I live in my home during a full renovation?", a: "For most full gut renovations, we recommend temporary relocation during the demo and rough work phases (typically 2–4 weeks). After rough-in is complete and drywall is up, many homeowners can return. We'll advise you honestly based on your specific project." },
];

export default function FullRenovationPage() {
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
                <li className="text-brand-orange">Full Renovation</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              FULL HOME<br /><span className="text-brand-orange">RENOVATION</span><br />PHILADELPHIA PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              From gutted shell to move-in-ready space — Rapid Renovation manages every phase of your
              full home renovation in Philadelphia, Upper Darby, and Lansdowne. One crew, one contract,
              zero runaround.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">
                Get a Free Renovation Quote
              </Link>
              <a href="tel:+13479773212" className="border border-white/20 hover:border-brand-orange text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">
                Call 347-977-3212
              </a>
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">WHY PHILADELPHIA HOMEOWNERS CHOOSE US FOR FULL RENOVATIONS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["One Crew, Full Project", "You're not juggling five different contractors. We manage everything — demo, framing, drywall, kitchen, bathroom, flooring, and painting — under one contract."],
                ["Philadelphia Rowhouse Experience", "We know older Philadelphia housing stock. Surprises behind walls don't derail our projects. We assess, adapt, and keep moving."],
                ["Written Schedule Upfront", "Before work begins you get a project schedule. We hit milestones and communicate when anything changes — not after the fact."],
                ["Permits Handled", "We pull and manage all required permits from Philadelphia L&I. No shortcuts, no unpermitted work that comes back to bite you at resale."],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-condensed text-white tracking-wider uppercase mb-2">{title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">FULL RENOVATION SERVICE AREA</h2>
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">READY TO TRANSFORM YOUR SPACE?</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">
              Free full renovation estimate in Philadelphia, Upper Darby, Lansdowne & all of Delaware County PA.
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
