import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aficiones | Portfolio de Iksvaku",
  description:
    "Aficiones de Iksvaku Claure Manchón: jams, videojuegos, crossfit y ajedrez.",
  alternates: { canonical: "/PortofolioIksvaku/aficiones/" },
  keywords: [
    "portfolio iksvaku",
    "Iksvaku Claure Manchón",
    "aficiones",
    "jams",
    "videojuegos",
    "crossfit",
    "ajedrez",
  ],
  openGraph: {
    type: "website",
    title: "Aficiones | Portfolio de Iksvaku",
    description:
      "Aficiones de Iksvaku Claure Manchón: jams, videojuegos, crossfit y ajedrez.",
    url: "/PortofolioIksvaku/aficiones/",
    siteName: "Portfolio de Iksvaku",
  },
};

export default function AficionesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
