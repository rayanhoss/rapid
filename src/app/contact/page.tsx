"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

type Step = 1 | 2 | 3 | 4;

const serviceOptions = [
  "Interior Demolition",
  "Full Renovation",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Flooring Installation",
  "Drywall & Painting",
  "Other / Not Sure",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just planning",
];

interface FormData {
  service: string;
  budget: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

export default function ContactPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    service: "", budget: "", timeline: "",
    firstName: "", lastName: "", email: "", phone: "", address: "", message: "",
  });

  const update = (key: keyof FormData, val: string) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `New Quote Request — ${form.service}`,
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      alert("Something went wrong. Please call us directly at 347-977-3212.");
    } finally {
      setSubmitting(false);
    }
  };

  const steps = [
    { num: 1, label: "Project" },
    { num: 2, label: "Details" },
    { num: 3, label: "Contact" },
    { num: 4, label: "Review" },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-steel flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 rounded-full bg-brand-orange mx-auto flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-5xl text-white tracking-wider mb-3">REQUEST SENT!</h2>
          <p className="text-brand-slate text-lg mb-2">
            Thanks, {form.firstName}! We received your quote request for <span className="text-brand-orange">{form.service}</span>.
          </p>
          <p className="text-brand-slate mb-8">
            Our team will contact you within 24 hours. For urgent jobs, call us directly at{" "}
            <a href="tel:+13479773212" className="text-brand-orange hover:underline">347-977-3212</a>.
          </p>
          <Button href="/" variant="outline">Back to Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-brand-steel-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">Free Estimate</span>
            <h1 className="font-display text-6xl lg:text-8xl text-white mt-2 tracking-wider">GET A QUOTE</h1>
            <p className="text-brand-slate mt-4 max-w-xl text-lg">
              Tell us about your project. We'll respond within 24 hours with a detailed estimate — no pressure, no obligation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              {/* Step indicators */}
              <div className="flex items-center gap-0 mb-10">
                {steps.map((s, i) => (
                  <div key={s.num} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div className={`w-9 h-9 rounded-sm flex items-center justify-center font-condensed text-sm tracking-wider transition-all duration-300 ${
                        step > s.num ? "bg-brand-orange text-white" :
                        step === s.num ? "bg-brand-orange text-white shadow-glow-orange" :
                        "bg-brand-steel-light border border-white/10 text-brand-slate"
                      }`}>
                        {step > s.num ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : s.num}
                      </div>
                      <span className={`font-condensed text-xs tracking-widest uppercase mt-1 ${step === s.num ? "text-brand-orange" : "text-brand-slate"}`}>
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-px mx-3 mb-5 transition-colors duration-300 ${step > s.num ? "bg-brand-orange" : "bg-white/10"}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step panels */}
              <div className="bg-brand-steel-light border border-white/5 rounded-sm p-8">
                <AnimatePresence mode="wait">

                  {/* STEP 1 — Service */}
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="font-display text-3xl text-white tracking-wider mb-2">WHAT SERVICE DO YOU NEED?</h2>
                      <p className="text-brand-slate text-sm mb-7">Select the service that best fits your project. Not sure? Pick "Other."</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => update("service", opt)}
                            className={`text-left p-4 border rounded-sm font-condensed text-sm tracking-wider uppercase transition-all duration-200 ${
                              form.service === opt
                                ? "bg-brand-orange border-brand-orange text-white"
                                : "border-white/10 text-brand-slate hover:border-brand-orange/40 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      <div className="mt-8 flex justify-end">
                        <Button onClick={() => setStep(2)} disabled={!form.service} size="lg">
                          Next: Budget & Timeline →
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 — Budget & Timeline */}
                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="font-display text-3xl text-white tracking-wider mb-2">BUDGET & TIMELINE</h2>
                      <p className="text-brand-slate text-sm mb-7">This helps us tailor our estimate to your goals.</p>

                      <div className="mb-8">
                        <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-3 block">Approximate Budget</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {budgetOptions.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => update("budget", opt)}
                              className={`text-left p-3.5 border rounded-sm font-condensed text-sm tracking-wider transition-all duration-200 ${
                                form.budget === opt
                                  ? "bg-brand-orange border-brand-orange text-white"
                                  : "border-white/10 text-brand-slate hover:border-brand-orange/40 hover:text-white"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-3 block">Desired Timeline</label>
                        <div className="flex flex-wrap gap-3">
                          {timelineOptions.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => update("timeline", opt)}
                              className={`px-4 py-2.5 border rounded-sm font-condensed text-sm tracking-wider transition-all duration-200 ${
                                form.timeline === opt
                                  ? "bg-brand-orange border-brand-orange text-white"
                                  : "border-white/10 text-brand-slate hover:border-brand-orange/40 hover:text-white"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button onClick={() => setStep(1)} variant="ghost">← Back</Button>
                        <Button onClick={() => setStep(3)} disabled={!form.budget || !form.timeline} size="lg">
                          Next: Your Info →
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 — Contact info */}
                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="font-display text-3xl text-white tracking-wider mb-2">YOUR CONTACT INFO</h2>
                      <p className="text-brand-slate text-sm mb-7">We'll use this to send your estimate and schedule a walkthrough.</p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-2 block">First Name *</label>
                          <input
                            type="text" value={form.firstName} onChange={e => update("firstName", e.target.value)}
                            className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-slate text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-2 block">Last Name *</label>
                          <input
                            type="text" value={form.lastName} onChange={e => update("lastName", e.target.value)}
                            className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-slate text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors"
                            placeholder="Smith"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-2 block">Email *</label>
                          <input
                            type="email" value={form.email} onChange={e => update("email", e.target.value)}
                            className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-slate text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-2 block">Phone</label>
                          <input
                            type="tel" value={form.phone} onChange={e => update("phone", e.target.value)}
                            className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-slate text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors"
                            placeholder="(215) 555-0100"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-2 block">Project Address</label>
                        <input
                          type="text" value={form.address} onChange={e => update("address", e.target.value)}
                          className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-slate text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors"
                          placeholder="123 Main St, Philadelphia, PA 19103"
                        />
                      </div>
                      <div className="mb-8">
                        <label className="font-condensed text-brand-slate-light text-xs tracking-widest uppercase mb-2 block">Additional Details</label>
                        <textarea
                          rows={4} value={form.message} onChange={e => update("message", e.target.value)}
                          className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-slate text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors resize-none"
                          placeholder="Tell us more about your project — square footage, current condition, special requirements..."
                        />
                      </div>

                      <div className="flex justify-between">
                        <Button onClick={() => setStep(2)} variant="ghost">← Back</Button>
                        <Button
                          onClick={() => setStep(4)}
                          disabled={!form.firstName || !form.email}
                          size="lg"
                        >
                          Review & Submit →
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4 — Review */}
                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="font-display text-3xl text-white tracking-wider mb-2">REVIEW YOUR REQUEST</h2>
                      <p className="text-brand-slate text-sm mb-7">Everything look right? Hit submit and we'll be in touch within 24 hours.</p>

                      <div className="space-y-4 mb-8">
                        {[
                          { label: "Service", value: form.service },
                          { label: "Budget", value: form.budget },
                          { label: "Timeline", value: form.timeline },
                          { label: "Name", value: `${form.firstName} ${form.lastName}` },
                          { label: "Email", value: form.email },
                          { label: "Phone", value: form.phone || "—" },
                          { label: "Address", value: form.address || "—" },
                          { label: "Notes", value: form.message || "—" },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex gap-4 border-b border-white/5 pb-3 last:border-0">
                            <span className="font-condensed text-brand-slate text-xs tracking-widest uppercase w-20 flex-shrink-0 pt-0.5">{label}</span>
                            <span className="text-white text-sm">{value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between">
                        <Button onClick={() => setStep(3)} variant="ghost">← Edit</Button>
                        <Button onClick={handleSubmit} disabled={submitting} size="lg">
                          {submitting ? "Sending…" : "Submit Quote Request ✓"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="bg-brand-steel-light border border-white/5 rounded-sm p-7">
                  <h3 className="font-condensed text-white tracking-widest uppercase mb-5">Contact Us Directly</h3>
                  <ul className="space-y-4">
                    <li>
                      <span className="font-condensed text-brand-orange text-xs tracking-widest uppercase block mb-1">Phone</span>
                      <a href="tel:+13479773212" className="text-white hover:text-brand-orange transition-colors text-lg font-condensed tracking-wider">347-977-3212</a>
                    </li>
                    <li>
                      <span className="font-condensed text-brand-orange text-xs tracking-widest uppercase block mb-1">Email</span>
                      <a href="mailto:rapidrenovationpa@gmail.com" className="text-brand-slate hover:text-white transition-colors text-sm break-all">
                        rapidrenovationpa@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="font-condensed text-brand-orange text-xs tracking-widest uppercase block mb-1">Hours</span>
                      <span className="text-brand-slate text-sm">Monday – Saturday, 8AM – 6PM</span>
                    </li>
                    <li>
                      <span className="font-condensed text-brand-orange text-xs tracking-widest uppercase block mb-1">Service Area</span>
                      <span className="text-brand-slate text-sm">Philadelphia, Upper Darby, Lansdowne & surrounding PA</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.3}>
                <div className="bg-brand-orange rounded-sm p-7">
                  <h3 className="font-condensed text-white tracking-widest uppercase mb-2">Why Choose Us</h3>
                  <ul className="space-y-2.5">
                    {["Fully insured & bonded","Free, detailed estimates","Transparent pricing — no surprises","Local Philadelphia team","Clean job sites, always","Est. 2024 — fresh & hungry"].map(item => (
                      <li key={item} className="flex items-start gap-2 text-orange-100 text-sm">
                        <span className="text-white mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
