import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Portfolio de Iksvaku",
  description: "Proyectos desarrollados por Iksvaku en diferentes tecnologías",
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
