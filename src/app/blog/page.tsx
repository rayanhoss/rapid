"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { posts } from "@/lib/blog-data";

const categories = ["All", "Demolition", "Kitchen", "Bathroom", "Flooring", "Renovation", "Tips"];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const filtered  = filter === "All" ? posts : posts.filter(p => p.category === filter);
  const featured  = posts.filter(p => p.featured);
  const rest      = filtered.filter(p => !p.featured);

  return (
    <>
      <section className="pt-32 pb-20 bg-brand-steel-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">Insights & Advice</span>
            <h1 className="font-display text-6xl lg:text-8xl text-white mt-2 tracking-wider">THE BLOG</h1>
            <p className="text-brand-slate mt-4 max-w-xl text-lg">Renovation tips, project guides, and contractor advice from our Philadelphia team.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured */}
          {filter === "All" && (
            <div className="grid lg:grid-cols-2 gap-6 mb-12">
              {featured.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group bg-brand-steel-light border border-white/5 hover:border-brand-orange/30 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-card-hover h-full flex flex-col">
                    <div className="relative h-60 overflow-hidden bg-brand-steel-mid flex-shrink-0">
                      <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" priority={i === 0}/>
                      <div className="absolute inset-0 bg-brand-steel/35 group-hover:bg-brand-steel/15 transition-colors duration-300" />
                      <div className="absolute top-3 left-3 z-10 flex gap-2">
                        <span className="bg-brand-orange font-condensed text-xs text-white tracking-widest uppercase px-2.5 py-1 rounded-sm">{post.category}</span>
                        <span className="bg-brand-gold font-condensed text-xs text-brand-steel tracking-widest uppercase px-2.5 py-1 rounded-sm">Featured</span>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-brand-slate text-xs font-condensed tracking-wider uppercase mb-3">
                        <span>{post.date}</span><span className="w-1 h-1 rounded-full bg-brand-slate" /><span>{post.readTime}</span>
                      </div>
                      <h2 className="font-condensed text-white text-xl tracking-wider uppercase mb-3 group-hover:text-brand-orange transition-colors leading-snug flex-1">{post.title}</h2>
                      <p className="text-brand-slate text-sm leading-relaxed">{post.excerpt}</p>
                      <div className="mt-5 flex items-center gap-2 text-brand-orange font-condensed text-xs tracking-widest uppercase">
                        Read Article
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`font-condensed text-sm tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
                  filter === cat ? "bg-brand-orange border-brand-orange text-white" : "border-white/10 text-brand-slate hover:border-brand-orange/40 hover:text-white"
                }`}>{cat}</button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filter === "All" ? rest : filtered).map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} className="group bg-brand-steel-light border border-white/5 hover:border-brand-orange/30 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-card-hover flex flex-col">
                  <div className="relative h-44 overflow-hidden bg-brand-steel-mid flex-shrink-0">
                    <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    <div className="absolute inset-0 bg-brand-steel/40 group-hover:bg-brand-steel/20 transition-colors duration-300" />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-brand-orange font-condensed text-xs text-white tracking-widest uppercase px-2.5 py-1 rounded-sm">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-brand-slate text-xs font-condensed tracking-wider uppercase mb-2">
                      <span>{post.date}</span><span className="w-1 h-1 rounded-full bg-brand-slate" /><span>{post.readTime}</span>
                    </div>
                    <h3 className="font-condensed text-white text-lg tracking-wider uppercase mb-2 group-hover:text-brand-orange transition-colors leading-snug flex-1">{post.title}</h3>
                    <p className="text-brand-slate text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-brand-orange font-condensed text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Newsletter */}
          <AnimatedSection className="mt-16 bg-brand-steel-light border border-white/5 rounded-sm p-10 text-center">
            <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">Stay In The Loop</span>
            <h2 className="font-display text-4xl text-white tracking-wider mt-2 mb-3">GET RENOVATION TIPS</h2>
            <p className="text-brand-slate max-w-md mx-auto mb-6">Join our mailing list for project tips, maintenance guides, and contractor news from Philadelphia.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 bg-brand-steel border border-white/10 text-white placeholder-brand-slate font-body text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors"/>
              <Button size="md">Subscribe</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
