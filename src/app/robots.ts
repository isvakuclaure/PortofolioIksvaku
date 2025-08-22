import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const basePath = "/PortofolioIksvaku";

export default function robots(): MetadataRoute.Robots {
  const sitemapPath = siteUrl
    ? `${siteUrl}${basePath}/sitemap.xml`
    : `${basePath}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: sitemapPath,
  };
}