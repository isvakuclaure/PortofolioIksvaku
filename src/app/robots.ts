export const dynamic = 'force-static';

import type { MetadataRoute } from "next";

// Base del sitio: usa la variable de entorno si está definida, de lo contrario usa GitHub Pages
const siteUrlBase = (process.env.NEXT_PUBLIC_SITE_URL || "https://isvakuclaure.github.io").replace(/\/$/, "");
const basePath = "/PortofolioIksvaku";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `${siteUrlBase}${basePath}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: [`${basePath}/`],
      },
    ],
    sitemap: sitemapUrl,
  };
}