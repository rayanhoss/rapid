import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-steel border-t border-white/5">
      {/* CTA Strip */}
      <div className="bg-brand-orange py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-white tracking-wider">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="font-body text-orange-100 mt-1">
              Call us Mon–Sat 8AM–6PM or get an instant quote online.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+13479773212"
              className="bg-white text-brand-orange font-condensed text-sm tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-brand-cream transition-colors text-center"
            >
              Call 347-977-3212
            </a>
            <Link
              href="/contact"
              className="border border-white text-white font-condensed text-sm tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white/10 transition-colors text-center"
            >
              Free Online Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="80" height="80" rx="14" fill="#1A2332"/>
                <rect x="14" y="15" width="28" height="20" rx="4" fill="#E8541A"/>
                <rect x="34" y="28" width="9" height="38" rx="4" fill="#F5F0E8" transform="rotate(-40 38.5 47)"/>
                <circle cx="22" cy="59" r="3.5" fill="#E8541A" opacity="0.6"/>
                <circle cx="15" cy="51" r="2" fill="#E8541A" opacity="0.35"/>
              </svg>
              <div>
                <div className="font-display text-white text-lg tracking-wider">RAPID RENOVATION</div>
                <div className="font-condensed text-brand-orange text-xs tracking-[0.25em] uppercase">& Demolition LLC</div>
              </div>
            </div>
            <p className="text-brand-slate text-sm leading-relaxed max-w-xs">
              Philadelphia's trusted renovation & demolition contractors. Serving Upper Darby, Lansdowne,
              and the greater Philadelphia area since 2024.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Insured & Bonded", "Est. 2024", "Mon–Sat 8AM–6PM"].map((badge) => (
                <span
                  key={badge}
                  className="bg-brand-steel-light border border-white/10 text-brand-slate-light font-condensed text-xs tracking-wider uppercase px-3 py-1 rounded-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-condensed text-white tracking-widest uppercase text-sm mb-5 border-b border-white/10 pb-3">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Interior Demolition",  href: "/services/interior-demolition"  },
                { label: "Full Renovation",       href: "/services/full-renovation"       },
                { label: "Kitchen Remodeling",    href: "/services/kitchen-remodeling"    },
                { label: "Bathroom Remodeling",   href: "/services/bathroom-remodeling"   },
                { label: "Flooring Installation", href: "/services/flooring-installation" },
                { label: "Drywall & Painting",    href: "/services/drywall-painting"      },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-brand-slate text-sm hover:text-brand-orange transition-colors animated-underline">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-condensed text-white tracking-widest uppercase text-sm mb-5 border-b border-white/10 pb-3">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-brand-slate">
              <li>
                <span className="text-brand-orange font-condensed tracking-wider block text-xs uppercase mb-0.5">Phone</span>
                <a href="tel:+13479773212" className="hover:text-white transition-colors">347-977-3212</a>
              </li>
              <li>
                <span className="text-brand-orange font-condensed tracking-wider block text-xs uppercase mb-0.5">Email</span>
                <a href="mailto:rapidrenovationpa@gmail.com" className="hover:text-white transition-colors break-all">
                  rapidrenovationpa@gmail.com
                </a>
              </li>
              <li>
                <span className="text-brand-orange font-condensed tracking-wider block text-xs uppercase mb-0.5">Service Area</span>
                Philadelphia, Upper Darby, Lansdowne & surrounding PA communities
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-brand-slate text-xs">
          <p>© {year} Rapid Renovation & Demolition LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
