import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Portfolio de Iksvaku",
  description:
    "Contacto de Iksvaku Claure Manchón: conecta a través de LinkedIn y conoce más sobre su perfil profesional.",
  alternates: { canonical: "/PortofolioIksvaku/contacto/" },
  keywords: [
    "portfolio iksvaku",
    "Iksvaku Claure Manchón",
    "contacto",
    "LinkedIn",
    "desarrollador frontend",
  ],
  openGraph: {
    type: "website",
    title: "Contacto | Portfolio de Iksvaku",
    description:
      "Contacto de Iksvaku Claure Manchón: conecta a través de LinkedIn y conoce más sobre su perfil profesional.",
    url: "/PortofolioIksvaku/contacto/",
    siteName: "Portfolio de Iksvaku",
  },
};

export default function ContactoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
