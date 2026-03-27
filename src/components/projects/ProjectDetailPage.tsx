"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/lib/project-data";

interface Props { project: Project }

export function ProjectDetailPage({ project }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const related = projects.filter(p => p.slug !== project.slug && p.category === project.category).slice(0, 3);
  const others  = projects.filter(p => p.slug !== project.slug && p.category !== project.category).slice(0, Math.max(0, 3 - related.length));
  const suggested = [...related, ...others].slice(0, 3);

  return (
    <article className="bg-brand-steel min-h-screen pt-24">
      {/* ── Hero image + lightbox ── */}
      <div className="relative h-72 sm:h-96 lg:h-[520px] w-full overflow-hidden bg-brand-steel-mid">
        <Image
          src={project.gallery[activeImg]?.src || project.image}
          alt={project.gallery[activeImg]?.alt || project.imageAlt}
          fill priority
          className="object-cover transition-opacity duration-300"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-steel/20 via-transparent to-brand-steel/70" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-4 sm:left-8 lg:left-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-condensed text-xs tracking-widest uppercase text-white/70">
              <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/projects" className="hover:text-brand-orange transition-colors">Projects</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-brand-orange">{project.category}</li>
            </ol>
          </nav>
        </div>

        {/* Gallery thumbnails */}
        {project.gallery.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-14 h-10 rounded-sm overflow-hidden border-2 transition-all ${activeImg === i ? "border-brand-orange" : "border-white/20 hover:border-white/50"}`}
              >
                <Image src={img.src} alt={img.alt} width={56} height={40} className="object-cover w-full h-full"/>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main column */}
          <div className="lg:col-span-2">
            <div className="bg-brand-steel-light border border-white/5 rounded-sm p-8 sm:p-12">
              {/* Category + tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-brand-orange font-condensed text-xs text-white tracking-widest uppercase px-3 py-1 rounded-sm">{project.category}</span>
                {project.tags.filter(t => t !== project.category).map(tag => (
                  <span key={tag} className="bg-white/5 text-brand-slate font-condensed text-xs tracking-wider uppercase px-3 py-1 rounded-sm">{tag}</span>
                ))}
              </div>

              <h1 className="font-display text-3xl sm:text-5xl text-white tracking-wider leading-tight mb-3">
                {project.title.toUpperCase()}
              </h1>
              <p className="text-brand-slate font-condensed text-sm tracking-wider uppercase mb-8">{project.location}</p>

              {/* Project specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                {project.details.map(({ label, value }) => (
                  <div key={label} className="bg-brand-steel border border-white/5 rounded-sm p-4">
                    <div className="font-condensed text-brand-orange text-xs tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-white text-sm font-condensed tracking-wider">{value}</div>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: project.body }}
              />
            </div>

            {/* CTA */}
            <div className="mt-8 bg-brand-orange rounded-sm p-8">
              <h2 className="font-display text-3xl text-white tracking-wider mb-2">WANT A SIMILAR PROJECT?</h2>
              <p className="text-orange-100 mb-6">Free estimate for your renovation or demolition in Philadelphia, Upper Darby, Lansdowne &amp; Delaware County.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="bg-white text-brand-orange font-condensed tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-brand-cream transition-colors text-center">Get Free Estimate</Link>
                <a href="tel:+13479773212" className="border border-white text-white font-condensed tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-white/10 transition-colors text-center">Call 347-977-3212</a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact card */}
            <div className="bg-brand-steel-light border border-white/5 rounded-sm p-6">
              <h3 className="font-condensed text-white tracking-widest uppercase text-sm mb-4 border-b border-white/10 pb-3">Start Your Project</h3>
              <p className="text-brand-slate text-sm leading-relaxed mb-4">Interested in a similar renovation? Get a free, no-obligation estimate.</p>
              <div className="space-y-3">
                <Link href="/contact" className="block bg-brand-orange hover:bg-brand-orange-light text-white font-condensed tracking-widest uppercase text-sm px-4 py-3 rounded-sm text-center transition-colors">Request Free Estimate</Link>
                <a href="tel:+13479773212" className="flex items-center justify-center gap-2 border border-white/10 hover:border-brand-orange text-white font-condensed text-sm tracking-widest uppercase px-4 py-3 rounded-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  347-977-3212
                </a>
              </div>
              <p className="text-brand-slate text-xs mt-4 text-center">Mon–Sat 8AM–6PM · Free Estimates</p>
            </div>

            {/* Related projects */}
            {suggested.length > 0 && (
              <div className="bg-brand-steel-light border border-white/5 rounded-sm p-6">
                <h3 className="font-condensed text-white tracking-widest uppercase text-sm mb-4 border-b border-white/10 pb-3">More Projects</h3>
                <div className="space-y-4">
                  {suggested.map((rp) => (
                    <Link key={rp.slug} href={`/projects/${rp.slug}`} className="group block">
                      <div className="relative h-28 w-full rounded-sm overflow-hidden mb-2">
                        <Image src={rp.image} alt={rp.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="300px"/>
                        <div className="absolute inset-0 bg-brand-steel/30"/>
                        <span className="absolute top-2 left-2 bg-brand-orange font-condensed text-xs text-white tracking-widest uppercase px-2 py-0.5 rounded-sm">{rp.category}</span>
                      </div>
                      <p className="text-white text-sm font-condensed tracking-wider uppercase leading-snug group-hover:text-brand-orange transition-colors">{rp.title}</p>
                      <p className="text-brand-slate text-xs mt-1">{rp.location}</p>
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
