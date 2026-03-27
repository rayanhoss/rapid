import Image from "next/image";
import Link from "next/link";
import { BlogPost, posts } from "@/lib/blog-data";

interface Props {
  post: BlogPost;
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array(5).fill(0).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export function BlogPostPage({ post }: Props) {
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const others  = posts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 2 - related.length);
  const suggestedPosts = [...related, ...others].slice(0, 2);

  return (
    <article className="bg-brand-steel min-h-screen pt-24">
      {/* ── Hero image ── */}
      <div className="relative h-72 sm:h-96 lg:h-[480px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-steel/30 via-transparent to-brand-steel/80" />

        {/* Breadcrumb over image */}
        <div className="absolute top-6 left-4 sm:left-8 lg:left-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-condensed text-xs tracking-widest uppercase text-white/70">
              <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-brand-orange">{post.category}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── Content wrapper ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Main article column ── */}
          <div className="lg:col-span-2">
            {/* Article card */}
            <div className="bg-brand-steel-light border border-white/5 rounded-sm p-8 sm:p-12">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-brand-orange font-condensed text-xs text-white tracking-widest uppercase px-3 py-1 rounded-sm">
                  {post.category}
                </span>
                <span className="text-brand-slate font-condensed text-xs tracking-wider">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-brand-slate/40" />
                <span className="text-brand-slate font-condensed text-xs tracking-wider">{post.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-5xl text-white tracking-wider leading-tight mb-8">
                {post.title.toUpperCase()}
              </h1>

              {/* Excerpt lead */}
              <p className="text-brand-slate-light text-lg leading-relaxed border-l-2 border-brand-orange pl-5 mb-10 italic">
                {post.excerpt}
              </p>

              {/* Body HTML */}
              <div
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </div>

            {/* ── CTA card ── */}
            <div className="mt-8 bg-brand-orange rounded-sm p-8">
              <h2 className="font-display text-3xl text-white tracking-wider mb-2">
                READY TO START YOUR PROJECT?
              </h2>
              <p className="text-orange-100 mb-6">
                Rapid Renovation &amp; Demolition LLC serves Philadelphia, Upper Darby, Lansdowne &amp; Delaware County.
                Free estimates. Call 347-977-3212 or request online.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="bg-white text-brand-orange font-condensed tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-brand-cream transition-colors text-center">
                  Get a Free Estimate
                </Link>
                <a href="tel:+13479773212" className="border border-white text-white font-condensed tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white/10 transition-colors text-center">
                  Call 347-977-3212
                </a>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">
            {/* About box */}
            <div className="bg-brand-steel-light border border-white/5 rounded-sm p-6">
              <h3 className="font-condensed text-white tracking-widest uppercase text-sm mb-4 border-b border-white/10 pb-3">
                About Rapid Renovation
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed mb-4">
                Philadelphia's trusted renovation &amp; demolition contractor. Serving Upper Darby, Lansdowne &amp; Delaware County. Insured &amp; bonded.
              </p>
              <StarRating />
              <p className="text-brand-slate text-xs mt-2">5-star rated · 150+ projects</p>
              <div className="mt-5 space-y-2">
                <a href="tel:+13479773212" className="flex items-center gap-3 text-brand-orange font-condensed text-sm tracking-wider hover:text-brand-orange-light transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  347-977-3212
                </a>
                <p className="text-brand-slate text-xs">Mon–Sat 8AM–6PM</p>
              </div>
              <Link href="/contact" className="mt-5 block bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase text-sm px-4 py-2.5 rounded-sm text-center transition-colors">
                Free Estimate
              </Link>
            </div>

            {/* Services quick links */}
            <div className="bg-brand-steel-light border border-white/5 rounded-sm p-6">
              <h3 className="font-condensed text-white tracking-widest uppercase text-sm mb-4 border-b border-white/10 pb-3">
                Our Services
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Interior Demolition",  href: "/services/interior-demolition" },
                  { label: "Kitchen Remodeling",    href: "/services/kitchen-remodeling" },
                  { label: "Bathroom Remodeling",   href: "/services/bathroom-remodeling" },
                  { label: "Flooring Installation", href: "/services/flooring-installation" },
                  { label: "Full Renovation",       href: "/services/full-renovation" },
                  { label: "Drywall & Painting",    href: "/services/drywall-painting" },
                ].map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="flex items-center gap-2 text-brand-slate text-sm hover:text-brand-orange transition-colors group">
                      <span className="text-brand-orange group-hover:translate-x-0.5 transition-transform">→</span>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related posts */}
            {suggestedPosts.length > 0 && (
              <div className="bg-brand-steel-light border border-white/5 rounded-sm p-6">
                <h3 className="font-condensed text-white tracking-widest uppercase text-sm mb-4 border-b border-white/10 pb-3">
                  More Articles
                </h3>
                <div className="space-y-4">
                  {suggestedPosts.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                      <div className="relative h-28 w-full rounded-sm overflow-hidden mb-2">
                        <Image src={rp.image} alt={rp.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="300px"/>
                        <div className="absolute inset-0 bg-brand-steel/30" />
                      </div>
                      <p className="text-white text-sm font-condensed tracking-wider uppercase leading-snug group-hover:text-brand-orange transition-colors">{rp.title}</p>
                      <p className="text-brand-slate text-xs mt-1">{rp.date} · {rp.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
