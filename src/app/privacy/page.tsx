import { AnimatedSection } from "@/components/ui/AnimatedSection";
export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-brand-steel min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <span className="font-condensed text-brand-orange text-sm tracking-widest uppercase">Legal</span>
          <h1 className="font-display text-5xl text-white mt-2 tracking-wider mb-8">PRIVACY POLICY</h1>
          <div className="space-y-6 text-brand-slate text-sm leading-relaxed">
            <p>Last updated: January 1, 2025</p>
            <p>Rapid Renovation & Demolition LLC operates rapidrenovationdemolition.com. This page describes our policies on personal information collected through the site.</p>
            <h2 className="font-condensed text-white text-lg tracking-wider uppercase mt-8">Information We Collect</h2>
            <p>We collect information you provide via contact forms: name, email, phone, and project details. This is used solely to respond to your inquiry and provide estimates.</p>
            <h2 className="font-condensed text-white text-lg tracking-wider uppercase mt-8">How We Use It</h2>
            <p>Your information is used to respond to inquiries and provide quotes. We do not sell or share your data with third parties for marketing.</p>
            <h2 className="font-condensed text-white text-lg tracking-wider uppercase mt-8">Contact</h2>
            <p>Questions? Email rapidrenovationpa@gmail.com or call 347-977-3212.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
