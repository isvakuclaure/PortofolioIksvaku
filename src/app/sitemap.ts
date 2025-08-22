export const dynamic = 'force-static';
export const revalidate = 86400; // 24 horas

import type { MetadataRoute } from "next";

const siteUrlBase = (process.env.NEXT_PUBLIC_SITE_URL || "https://isvakuclaure.github.io").replace(/\/$/, "");
const basePath = "/PortofolioIksvaku";

export default function sitemap(): MetadataRoute.Sitemap {
  // Definimos slugs sin la barra inicial para evitar // en el join
  const slugs = ["", "proyectos/", "aficiones/", "contacto/"];

  return slugs.map((slug) => {
    const path = `${basePath}/${slug}`; // siempre exactamente una barra entre basePath y slug
    const url = `${siteUrlBase}${path}`; // siempre absoluto para cumplir el estándar del sitemap
    return {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: slug === "" ? 1 : 0.7,
    } as const;
  });
}