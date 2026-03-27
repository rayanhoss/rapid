import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
        crawlDelay: 0,
      },
    ],
    sitemap: "https://www.rapidrenovationdemolition.com/sitemap.xml",
    host: "https://www.rapidrenovationdemolition.com",
  };
}
