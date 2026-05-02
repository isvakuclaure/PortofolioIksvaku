'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const codeLines = [
  "const role = 'Frontend Developer'",
  "import { Next, React } from 'stack'",
  "const passion = 'clean interfaces'",
  "npm run dev  →  localhost:3000",
  "git commit -m 'ship it 🚀'",
  "const coffee = require('fuel')",
];

function CodeAnimation() {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let lineIdx   = 0;
    let charIdx   = 0;
    let erasing   = false;
    let pauseTicks = 0;

    const id = setInterval(() => {
      if (pauseTicks > 0) { pauseTicks--; return; }

      const target = codeLines[lineIdx];

      if (!erasing) {
        if (charIdx < target.length) {
          charIdx++;
          setDisplayed(target.slice(0, charIdx));
        } else {
          pauseTicks = 28;   // ~1.7s pause antes de borrar
          erasing = true;
        }
      } else {
        if (charIdx > 0) {
          charIdx--;
          setDisplayed(target.slice(0, charIdx));
        } else {
          erasing = false;
          lineIdx = (lineIdx + 1) % codeLines.length;
        }
      }
    }, 60);

    return () => clearInterval(id);
  }, []);   // ← corre UNA sola vez, sin dependencias

  return (
    /* Overlay fijo — pegado al borde inferior de la foto, altura constante */
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(10,12,20,0.88)',
      backdropFilter: 'blur(6px)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '0 0 12px 12px',
      padding: '8px 12px 10px',
      height: 52,                 /* fijo — nunca cambia */
      overflow: 'hidden',
      fontFamily: "'Geist Mono', 'Fira Code', monospace",
      fontSize: 11,
      lineHeight: 1,
    }}>
      {/* Dots */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <span key={c} style={{ width: 6, height: 6, borderRadius: '50%', background: c, display: 'inline-block' }} />
        ))}
      </div>
      {/* Línea animada */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <span style={{ color: '#4b5563' }}>{'>'}</span>
        <span style={{ color: '#93c5fd', marginLeft: 4, whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%' }}>{displayed}</span>
        <span style={{
          display: 'inline-block', width: 1.5, height: 11,
          background: '#60a5fa', flexShrink: 0,
          animation: 'blink 1s step-end infinite',
        }} />
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}

const experience = [
  { period: '2024 — Presente', role: 'Desarrollador Front-end',      company: 'Liftel',              description: 'Next.js, integración de APIs, animaciones CSS y mantenimiento de proyectos.',      tags: ['Next.js', 'CSS', 'API'] },
  { period: '2023 — 2024',     role: 'Administrador de Salesforce',   company: 'Multiply College',    description: 'Arquitectura de datos, flujos, dashboards, reportes y reglas de validación.',     tags: ['Salesforce', 'Flows', 'Dashboards'] },
  { period: 'Jun — Ago 2023',  role: 'Ingeniero Junior de Software',  company: 'Solera, Inc.',        description: 'Frontend con React.js, backend Node.js, automatización Jenkins y Scrum.',         tags: ['React.js', 'Node.js', 'Jenkins'] },
  { period: 'Sep 2021 — Jul 2022', role: 'Desarrollador Front-end',   company: 'GGTech Entertainment', description: 'UI/UX en Blast Heroes y My Life (Snapchat) con PlayCanvas y Node.js.',         tags: ['PlayCanvas', 'Node.js', 'UI/UX'] },
];

const education = [
  { institution: 'Trailhead by Salesforce',          title: 'Salesforce x3 Certification',                   period: 'Mar — Nov 2024',          tags: ['Admin', 'Flow Builder', 'Apex'] },
  { institution: 'IES Mare Nostrum',                  title: 'Desarrollo de Aplicaciones Web',                period: 'Sep 2018 — Jun 2020',     tags: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'] },
  { institution: 'Escuela de Organización Industrial', title: 'Creación y Diseño de Videojuegos en Unity',   period: 'Feb — Jun 2021',          tags: ['Unity', 'C#', 'Game Design'] },
  { institution: 'Garantía Juvenil',                  title: 'Internet de las Cosas y Big Data',              period: 'Sep — Dic 2018',          tags: ['IoT', 'Big Data', 'Python'] },
];

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-14 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

            {/* Texto */}
            <div className="flex-1 order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-3">
                Frontend<br />Developer
              </h1>
              <p className="text-slate-500 text-sm mb-6 max-w-sm leading-relaxed">
                Creando experiencias web modernas e interactivas con las últimas tecnologías.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/proyectos" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm">
                  Ver proyectos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="/contacto" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 text-slate-600 font-medium py-2.5 px-5 rounded-lg transition-colors text-sm">
                  Contacto
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Salesforce'].map(tech => (
                  <span key={tech} className="bg-gray-100 text-slate-500 text-xs px-3 py-1.5 rounded-full border border-gray-200">{tech}</span>
                ))}
              </div>
            </div>

            {/* Foto con marco estilo foto impresa */}
            <div className="order-1 md:order-2 flex-shrink-0 mx-auto md:mx-0">
              <div style={{
                background: '#fff',
                padding: '8px 8px 28px 8px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.08)',
                borderRadius: 4,
                display: 'inline-block',
              }}>
                <div className="relative w-52 h-64 sm:w-56 sm:h-72 overflow-hidden" style={{ borderRadius: 2 }}>
                  <Image
                    src="/PortofolioIksvaku/portada.jpg"
                    alt="Iksvaku portrait"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="224px"
                  />
                  <CodeAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAYECTORIA ── */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 rounded-full bg-slate-300" />
            <h2 className="text-base font-bold text-slate-700 uppercase tracking-wide">Trayectoria profesional</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {experience.map((exp) => (
              <div key={exp.company} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-xs text-slate-400 font-mono mb-0.5">{exp.period}</p>
                    <h3 className="text-sm font-bold text-slate-800 leading-tight">{exp.role}</h3>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{exp.company}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-slate-500 border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCACIÓN ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 rounded-full bg-slate-300" />
            <h2 className="text-base font-bold text-slate-700 uppercase tracking-wide">Formación académica</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {education.map((edu) => (
              <div key={edu.institution} className="bg-gray-50 rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors">
                <p className="text-xs text-slate-400 font-mono mb-0.5">{edu.period}</p>
                <h3 className="text-sm font-bold text-slate-800 leading-tight mb-0.5">{edu.title}</h3>
                <p className="text-xs text-slate-500 font-medium mb-3">{edu.institution}</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white text-slate-500 border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/proyectos" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors text-sm">
              Ver proyectos completos
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
