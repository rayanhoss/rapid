import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drywall & Painting Contractor Philadelphia PA | Rapid Renovation",
  description: "Professional drywall installation, skim coat & interior painting in Philadelphia, Upper Darby & Lansdowne PA. Water damage repair, texture matching, smooth finish. Call 347-977-3212.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/services/drywall-painting" },
  openGraph: {
    title: "Drywall & Painting Contractor Philadelphia PA | Rapid Renovation",
    description: "Expert drywall hanging, skim coat, and interior painting in Philadelphia PA. Free estimates. Call 347-977-3212.",
    url: "https://www.rapidrenovationdemolition.com/services/drywall-painting",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does drywall installation cost in Philadelphia PA?", acceptedAnswer: { "@type": "Answer", text: "Drywall installation in Philadelphia typically runs $2–$4 per square foot for hang and tape, $1–$2 additional for skim coat. A full room gut and drywall typically runs $800–$2,500 depending on size and finish level." } },
    { "@type": "Question", name: "Can you match existing texture on drywall patches?", acceptedAnswer: { "@type": "Answer", text: "Yes. Texture matching is one of the harder drywall skills and one we take seriously. We assess the existing texture type and replicate it on patches so repairs are invisible after paint." } },
    { "@type": "Question", name: "Do you repair water-damaged drywall in Philadelphia?", acceptedAnswer: { "@type": "Answer", text: "Yes. We remove damaged drywall, address the moisture source, and install new drywall with proper taping and finishing. We work alongside plumbers when the water source is an active leak." } },
  ],
};

const included = [
  "Drywall hanging (all thicknesses)",
  "Taping & mudding",
  "Skim coat — smooth finish",
  "Level 5 finish (premium smooth)",
  "Texture matching",
  "Water damage repair",
  "Ceiling drywall & repairs",
  "Arch & curve drywall",
  "Interior priming",
  "Interior painting (walls & ceilings)",
  "Trim & door painting",
  "Post-renovation drywall throughout",
];

const cities = ["Philadelphia", "Upper Darby", "Lansdowne", "Drexel Hill", "Havertown", "Springfield", "Sharon Hill", "Darby", "Glenolden", "Clifton Heights", "Collingdale", "Media"];

const faqs = [
  { q: "How much does drywall installation cost in Philadelphia?", a: "Drywall installation in Philadelphia typically runs $2–$4 per sq ft for hang and tape, plus $1–$2 for skim coat. A full room gut and drywall typically runs $800–$2,500 depending on size and finish level. Full-home skim coats are quoted by the project." },
  { q: "Can you match existing texture on drywall patches?", a: "Yes. Texture matching is one of the harder drywall skills. We assess the existing texture type — orange peel, knockdown, smooth — and replicate it so repairs are invisible after paint." },
  { q: "Do you repair water-damaged drywall?", a: "Yes. We remove damaged drywall, address the moisture source (or coordinate with a plumber), and install new drywall with proper taping and finishing. We won't close the wall until the moisture issue is resolved." },
  { q: "What is a skim coat and do I need one?", a: "A skim coat is a thin layer of joint compound applied over the entire wall surface to create a perfectly smooth finish. You need one if you're removing wallpaper (which damages the paper face of drywall), if your walls have visible texture you want to eliminate, or if patches are visible through paint. It's the difference between a good result and a great one." },
];

export default function DrywallPaintingPage() {
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
                <li className="text-brand-orange">Drywall & Painting</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
              DRYWALL &amp;<br /><span className="text-brand-orange">PAINTING</span><br />PHILADELPHIA PA
            </h1>
            <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
              Professional drywall installation, skim coat, and interior painting across Philadelphia,
              Upper Darby, and Lansdowne. Flawless walls, clean lines, zero shortcuts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">
                Get a Free Quote
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">THE DIFFERENCE IN OUR FINISH WORK</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["Multiple Sand Coats", "We sand between every coat of mud. Most contractors skip this. The result is visible in raking light — and so is the difference."],
                ["Proper Priming", "High-hide primer on every surface before paint. This seals patches, prevents flashing, and gives you a true representation of the color."],
                ["Texture Matching", "Patching drywall invisibly requires matching the existing texture. We take time to get it right — not close enough, actually right."],
                ["Clean Edges", "Tight lines at ceilings, trim, and doors. We tape and cut in by hand. The details are where quality shows."],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-condensed text-white tracking-wider uppercase mb-2">{title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-4xl text-white tracking-wider mb-6">SERVICE AREA</h2>
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
            <h2 className="font-display text-4xl text-white tracking-wider mb-3">NEED DRYWALL OR PAINTING?</h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">
              Free estimate on drywall and painting projects in Philadelphia, Upper Darby, Lansdowne &amp; Delaware County.
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
