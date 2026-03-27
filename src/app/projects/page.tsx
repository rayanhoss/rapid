"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/project-data";

const categories = ["All", "Renovation", "Demolition", "Kitchen", "Bathroom", "Flooring"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <>
      <section className="pt-32 pb-20 bg-brand-steel-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">Our Work</span>
            <h1 className="font-display text-6xl lg:text-8xl text-white mt-2 tracking-wider">PROJECTS</h1>
            <p className="text-brand-slate mt-4 max-w-xl text-lg">Browse our portfolio of completed renovations and demolitions across Philadelphia, Upper Darby, and Lansdowne, PA.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`font-condensed text-sm tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
                  filter === cat ? "bg-brand-orange border-brand-orange text-white" : "border-white/10 text-brand-slate hover:border-brand-orange/40 hover:text-white"
                }`}>{cat}</button>
            ))}
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.06}>
                <Link href={`/projects/${project.slug}`} className="group bg-brand-steel-light border border-white/5 hover:border-brand-orange/30 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-card-hover flex flex-col">
                  <div className="relative h-52 overflow-hidden bg-brand-steel-mid flex-shrink-0">
                    <Image src={project.image} alt={project.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    <div className="absolute inset-0 bg-brand-steel/40 group-hover:bg-brand-steel/20 transition-colors duration-300"/>
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-brand-orange font-condensed text-xs text-white tracking-widest uppercase px-2.5 py-1 rounded-sm">{project.category}</span>
                    </div>
                    {/* View project overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-brand-orange/90 text-white font-condensed text-xs tracking-widest uppercase px-4 py-2 rounded-sm">View Project →</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-brand-slate text-xs font-condensed tracking-wider uppercase mb-2">{project.location}</div>
                    <h3 className="font-condensed text-white text-lg tracking-wider uppercase mb-2 group-hover:text-brand-orange transition-colors flex-1">{project.title}</h3>
                    <p className="text-brand-slate text-sm leading-relaxed">{project.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-white/5 text-brand-slate font-condensed text-xs tracking-wider uppercase px-2 py-0.5 rounded-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 bg-brand-steel-light border border-white/5 rounded-sm p-8 text-center">
            <h2 className="font-display text-3xl text-white tracking-wider mb-2">HAVE A PROJECT IN MIND?</h2>
            <p className="text-brand-slate max-w-lg mx-auto mb-6">Free estimates on renovation and demolition projects across Philadelphia, Upper Darby, Lansdowne &amp; Delaware County.</p>
            <Button href="/contact" size="md">Get a Free Estimate</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
