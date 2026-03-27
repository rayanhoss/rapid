import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rapidrenovationdemolition.com"),
  title: {
    default: "Renovation & Demolition Contractor Philadelphia PA | Rapid Renovation",
    template: "%s | Rapid Renovation & Demolition LLC – Philadelphia PA",
  },
  description:
    "Rapid Renovation & Demolition LLC — Philadelphia's trusted local contractor for interior demolition, kitchen remodeling, bathroom renovation, and flooring. Serving Upper Darby, Lansdowne & Delaware County. Insured & bonded. Free quotes. Call 347-977-3212.",
  keywords: [
    "renovation contractor Philadelphia PA",
    "demolition contractor Philadelphia",
    "kitchen remodeling Philadelphia",
    "bathroom renovation Philadelphia PA",
    "interior demolition Philadelphia",
    "flooring contractor Philadelphia",
    "home renovation Upper Darby PA",
    "contractor Lansdowne PA",
    "licensed insured renovation contractor Pennsylvania",
    "drywall contractor Philadelphia",
    "open concept renovation Philadelphia",
    "Delaware County renovation contractor",
    "affordable renovation Philadelphia",
    "residential contractor Philadelphia PA",
    "commercial demolition Philadelphia",
  ],
  authors: [{ name: "Rapid Renovation & Demolition LLC" }],
  creator: "Rapid Renovation & Demolition LLC",
  publisher: "Rapid Renovation & Demolition LLC",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rapidrenovationdemolition.com",
    siteName: "Rapid Renovation & Demolition LLC",
    title: "Renovation & Demolition Contractor Philadelphia PA | Rapid Renovation",
    description:
      "Philadelphia's trusted renovation & demolition experts. Kitchen remodeling, bathroom renovation, interior demolition & flooring. Insured, bonded & serving Upper Darby, Lansdowne & Delaware County.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rapid Renovation & Demolition LLC – Philadelphia PA Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renovation & Demolition Contractor Philadelphia PA",
    description: "Kitchen, bathroom, demolition & flooring contractor serving Philadelphia, Upper Darby & Lansdowne. Insured & bonded. Free quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.rapidrenovationdemolition.com",
  },
  verification: {
    // Add your Google Search Console verification token here after setup:
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": "https://www.rapidrenovationdemolition.com/#business",
  name: "Rapid Renovation & Demolition LLC",
  alternateName: "Rapid Renovation",
  legalName: "Rapid Renovation & Demolition LLC",
  description:
    "Philadelphia's trusted renovation and demolition contractor specializing in interior demolition, kitchen remodeling, bathroom renovation, flooring installation, drywall, and painting. Serving Upper Darby, Lansdowne, and all of Delaware County, PA.",
  url: "https://www.rapidrenovationdemolition.com",
  logo: "https://www.rapidrenovationdemolition.com/logo-primary.svg",
  image: "https://www.rapidrenovationdemolition.com/images/og-image.jpg",
  telephone: "+13479773212",
  email: "rapidrenovationpa@gmail.com",
  foundingDate: "2024",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card, Bank Transfer",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.9526",
    longitude: "-75.1652",
  },
  areaServed: [
    { "@type": "City", name: "Philadelphia", sameAs: "https://en.wikipedia.org/wiki/Philadelphia" },
    { "@type": "City", name: "Upper Darby", sameAs: "https://en.wikipedia.org/wiki/Upper_Darby,_Pennsylvania" },
    { "@type": "City", name: "Lansdowne", sameAs: "https://en.wikipedia.org/wiki/Lansdowne,_Pennsylvania" },
    { "@type": "City", name: "Drexel Hill" },
    { "@type": "City", name: "Havertown" },
    { "@type": "City", name: "Springfield" },
    { "@type": "County", name: "Delaware County", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Renovation & Demolition Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Demolition", url: "https://www.rapidrenovationdemolition.com/services/interior-demolition" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling", url: "https://www.rapidrenovationdemolition.com/services/kitchen-remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling", url: "https://www.rapidrenovationdemolition.com/services/bathroom-remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation", url: "https://www.rapidrenovationdemolition.com/services/flooring-installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Renovation", url: "https://www.rapidrenovationdemolition.com/services/full-renovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall & Painting", url: "https://www.rapidrenovationdemolition.com/services/drywall-painting" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "14",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Marcus T." },
      reviewBody: "Rapid Renovation transformed our dated kitchen into something we're genuinely proud of. Fast, clean, and professional from start to finish.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Jennifer R." },
      reviewBody: "They demolished our basement in two days and left the site spotless. Fair pricing and the crew communicated every step of the way.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "David L." },
      reviewBody: "Bathroom looks like a high-end hotel now. The tile work is flawless. Will absolutely use Rapid Renovation again.",
    },
  ],
  sameAs: [],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.rapidrenovationdemolition.com/#website",
  url: "https://www.rapidrenovationdemolition.com",
  name: "Rapid Renovation & Demolition LLC",
  description: "Philadelphia renovation and demolition contractor",
  publisher: { "@id": "https://www.rapidrenovationdemolition.com/#business" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.rapidrenovationdemolition.com/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Barlow+Condensed:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      </head>
      <body className="bg-brand-steel text-brand-cream font-body antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
