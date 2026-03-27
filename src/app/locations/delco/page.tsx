import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renovation & Demolition Contractor Delaware County PA | Rapid Renovation",
  description: "Delaware County PA renovation and demolition contractor. Serving Upper Darby, Lansdowne, Drexel Hill, Havertown & all of Delco. Kitchen, bathroom, flooring, demo. Insured. Call 347-977-3212.",
  alternates: { canonical: "https://www.rapidrenovationdemolition.com/locations/delco" },
};

export default function DelcoPage() {
  const cities = ["Upper Darby","Lansdowne","Drexel Hill","Havertown","Springfield","Collingdale","Clifton Heights","Darby","Folsom","Sharon Hill","Glenolden","Holmes","Ridley Park","Media","Broomall","Swarthmore","Ardmore","Cheltenham"];
  return (
    <article className="pt-32 bg-brand-steel min-h-screen">
      <header className="pb-20 bg-brand-steel-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="font-display text-5xl lg:text-8xl text-white tracking-wider leading-none">
            DELAWARE COUNTY<br /><span className="text-brand-orange">RENOVATION</span><br />CONTRACTOR
          </h1>
          <p className="mt-6 text-brand-slate-light text-lg max-w-2xl leading-relaxed">
            Rapid Renovation & Demolition LLC serves all of Delaware County, PA. Local crew, fast response, free estimates on kitchens, bathrooms, demolition, flooring, and full renovations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Free Delco Estimate</Link>
            <a href="tel:+13479773212" className="border border-white/20 hover:border-brand-orange text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm transition-all inline-block text-center">Call 347-977-3212</a>
          </div>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-4xl text-white tracking-wider mb-6">DELAWARE COUNTY COMMUNITIES WE SERVE</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-16">
          {cities.map((city) => (
            <span key={city} className="bg-brand-steel-light border border-white/5 text-brand-slate-light font-condensed text-sm tracking-wider px-3 py-2 rounded-sm text-center">{city}, PA</span>
          ))}
        </div>
        <section className="bg-brand-orange rounded-sm p-10 text-center">
          <h2 className="font-display text-4xl text-white tracking-wider mb-3">DELCO HOMEOWNER? CALL US.</h2>
          <p className="text-orange-100 mb-7 max-w-lg mx-auto">Free estimate anywhere in Delaware County PA. We respond within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-brand-orange font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-brand-cream transition-colors inline-block">Request Free Quote</Link>
            <a href="tel:+13479773212" className="border border-white text-white font-condensed tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-white/10 transition-colors inline-block">Call 347-977-3212</a>
          </div>
        </section>
      </div>
    </article>
  );
}
