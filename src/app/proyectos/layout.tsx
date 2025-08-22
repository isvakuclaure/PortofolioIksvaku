import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Portfolio de Iksvaku",
  description:
    "Proyectos destacados de Iksvaku Claure Manchón en desarrollo frontend, WordPress y PlayCanvas.",
  alternates: { canonical: "/PortofolioIksvaku/proyectos/" },
  keywords: [
    "portfolio iksvaku",
    "Iksvaku Claure Manchón",
    "proyectos",
    "frontend",
    "WordPress",
    "PlayCanvas",
  ],
  openGraph: {
    type: "website",
    title: "Proyectos | Portfolio de Iksvaku",
    description:
      "Proyectos destacados de Iksvaku Claure Manchón en desarrollo frontend, WordPress y PlayCanvas.",
    url: "/PortofolioIksvaku/proyectos/",
    siteName: "Portfolio de Iksvaku",
  },
};

export default function ProyectosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
