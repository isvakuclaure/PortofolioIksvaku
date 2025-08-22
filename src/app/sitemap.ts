import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const basePath = "/PortofolioIksvaku";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/proyectos/", "/aficiones/", "/contacto/"];

  return routes.map((route) => {
    const path = `${basePath}${route}`;
    const url = siteUrl ? `${siteUrl}${path}` : path;
    return {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "/" ? 1 : 0.7,
    } as const;
  });
}