import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rapidrenovationdemolition.com";
  const now  = new Date();

  return [
    { url: base,                    lastModified: now, changeFrequency: "monthly",  priority: 1.0 },
    { url: `${base}/services`,      lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: "yearly",   priority: 0.9 },
    { url: `${base}/projects`,      lastModified: now, changeFrequency: "weekly",   priority: 0.85 },
    { url: `${base}/blog`,          lastModified: now, changeFrequency: "weekly",   priority: 0.8 },

    // Service pages
    { url: `${base}/services/kitchen-remodeling`,    lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/services/bathroom-remodeling`,   lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/services/interior-demolition`,   lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/services/flooring-installation`, lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/services/full-renovation`,       lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/services/drywall-painting`,      lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Location pages
    { url: `${base}/locations/upper-darby`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations/lansdowne`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations/delco`,        lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Project detail pages
    { url: `${base}/projects/upper-darby-kitchen-gut-rebuild`,     lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/lansdowne-basement-conversion`,        lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/philadelphia-bathroom-overhaul`,       lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/commercial-demolition-retail-strip`,   lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/hardwood-flooring-2400-sqft`,          lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/open-concept-conversion`,              lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/guest-bathroom-refresh`,               lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/drywall-paint-full-home`,              lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/projects/lvp-flooring-commercial-office`,       lastModified: now, changeFrequency: "yearly", priority: 0.75 },

    // Blog posts
    { url: `${base}/blog/how-to-prepare-for-interior-demolition`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/blog/kitchen-remodel-timeline`,               lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/blog/hardwood-vs-lvp-flooring`,              lastModified: now, changeFrequency: "yearly", priority: 0.75 },
    { url: `${base}/blog/bathroom-waterproofing-mistakes`,        lastModified: now, changeFrequency: "yearly", priority: 0.7  },
    { url: `${base}/blog/open-concept-load-bearing-walls`,        lastModified: now, changeFrequency: "yearly", priority: 0.7  },
    { url: `${base}/blog/choosing-contractor-philadelphia`,       lastModified: now, changeFrequency: "yearly", priority: 0.7  },

    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
