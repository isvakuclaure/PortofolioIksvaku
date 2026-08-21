import type { Metadata } from "next";
import { Archivo, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Titulares e interfaz: el eje de anchura da el aire de placa grabada
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Prosa de los casos de proyecto
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

// Datos duros: años, stack, métricas
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Portfolio de Iksvaku | Iksvaku Claure Manchón",
    template: "%s | Portfolio de Iksvaku",
  },
  description:
    "Iksvaku Claure Manchón, desarrollador frontend en Alicante. Interfaces web y móviles en producción con React, Next.js y React Native.",
  keywords: [
    "portfolio iksvaku",
    "Iksvaku Claure Manchón",
    "desarrollador frontend",
    "frontend Alicante",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
  ],
  authors: [{ name: "Iksvaku Claure Manchón" }],
  alternates: {
    canonical: "/PortofolioIksvaku/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Portfolio de Iksvaku",
    description:
      "Iksvaku Claure Manchón, desarrollador frontend en Alicante. Interfaces web y móviles en producción con React, Next.js y React Native.",
    url: "/PortofolioIksvaku/",
    siteName: "Portfolio de Iksvaku",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Iksvaku",
    description:
      "Iksvaku Claure Manchón, desarrollador frontend en Alicante. Interfaces web y móviles en producción con React, Next.js y React Native.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${archivo.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-[58px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
