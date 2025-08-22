import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    "Portfolio de Iksvaku Claure Manchón: proyectos y habilidades en desarrollo frontend con Next.js, Tailwind CSS y Salesforce.",
  keywords: [
    "portfolio iksvaku",
    "Iksvaku Claure Manchón",
    "desarrollador frontend",
    "Next.js",
    "Tailwind CSS",
    "Salesforce",
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
      "Portfolio de Iksvaku Claure Manchón: proyectos y habilidades en desarrollo frontend con Next.js, Tailwind CSS y Salesforce.",
    url: "/PortofolioIksvaku/",
    siteName: "Portfolio de Iksvaku",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Iksvaku",
    description:
      "Portfolio de Iksvaku Claure Manchón: proyectos y habilidades en desarrollo frontend con Next.js, Tailwind CSS y Salesforce.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50`}
      >
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
