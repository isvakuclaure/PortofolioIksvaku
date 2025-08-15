'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* SECCIÓN HERO */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 -mt-4 md:-mt-12">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500 filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-cyan-400 filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          {/* Partículas flotantes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full bg-blue-400 opacity-50 animate-float-particle`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${8 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Contenedor principal con altura completa */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-14 min-h-screen flex flex-col md:flex-row items-center justify-center py-10 md:py-0 relative z-10">
          {/* Lado izquierdo: Contenido de texto */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8 order-2 md:order-1 mt-0 md:mt-0">
            <div className="max-w-xl mx-auto md:mx-0">
              {/* Elementos decorativos inspirados en frontend */}
              <div className="flex flex-wrap items-center gap-2 mb-4 text-xs sm:text-sm font-mono whitespace-nowrap">
                <span className="text-blue-400 opacity-80">&lt;code&gt;</span>
                <span className="text-yellow-400 opacity-80">const</span>
                <span className="text-green-400 opacity-80">
                  &lt;developer &gt;
                </span>
                <span className="text-white opacity-80">=</span>
                <span className="text-blue-400 opacity-80">
                  &#39; frontend &#39;
                </span>
                <span className="text-yellow-400 opacity-80">;</span>
                <span className="text-blue-400 opacity-80">&lt;/code&gt;</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                <span className="inline-block relative pb-2">
                  Programador
                  <span className="absolute -bottom-1 mb-1 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
                </span>
                <br />
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-sm">
                  Frontend
                </span>
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-slate-300 mb-6 border-l-2 border-blue-500 pl-4">
                Creando experiencias web únicas, modernas e interactivas con las
                últimas tecnologías del desarrollo frontend.
              </p>

              {/* Botones de acción */}
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                <Link
                  href="/proyectos"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center overflow-hidden relative text-sm sm:text-base"
                >
                  <span className="z-10 flex items-center">
                    Ver proyectos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Link>

                <Link
                  href="/contacto"
                  className="group bg-transparent border-2 border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base"
                >
                  <span>Contacto</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
              </div>

              {/* Tecnologías */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <p className="text-sm text-slate-400 mb-3">
                  Tecnologías principales:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-800/80 text-blue-400 text-xs px-3 py-1.5 rounded-full border border-blue-500/20">
                    React
                  </span>
                  <span className="bg-slate-800/80 text-blue-400 text-xs px-3 py-1.5 rounded-full border border-blue-500/20">
                    Next.js
                  </span>
                  <span className="bg-slate-800/80 text-blue-400 text-xs px-3 py-1.5 rounded-full border border-blue-500/20">
                    Tailwind CSS
                  </span>
                  <span className="bg-slate-800/80 text-blue-400 text-xs px-3 py-1.5 rounded-full border border-blue-500/20">
                    TypeScript
                  </span>
                  <span className="bg-slate-800/80 text-blue-400 text-xs px-3 py-1.5 rounded-full border border-blue-500/20">
                    Salesforce
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho: Imagen */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end items-center mb-8 md:mb-0">
            <div className="relative w-[65%] sm:w-[70%] md:w-[90%] aspect-square max-w-md mx-auto md:mx-0">
              {/* Fondo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl transform -rotate-3"></div>

              {/* Contenedor de la imagen */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                <Image
                  src="/PortofolioIksvaku/portada.jpg"
                  alt="Iksvaku portrait"
                  fill
                  className="object-cover object-center mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                  priority
                  sizes="(max-width: 768px) 65vw, 45vw"
                />

                {/* Efecto de borde brillante */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-blue-500/30 to-indigo-500/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Flecha de scroll */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden sm:flex">
          <span className="text-slate-400 text-xs mb-2">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* Estilos adicionales */}
        <style jsx>{`
          .bg-grid-pattern {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.15'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
          @media (max-width: 768px) {
            .container.h-screen {
              min-height: 100vh;
              height: auto;
              padding-top: 1.5rem;
              padding-bottom: 5rem;
            }
          }
        `}</style>
      </div>

      {/* SECCIÓN TRAYECTORIA PROFESIONAL */}
      <div className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute right-0 top-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px]"></div>
            <div className="absolute left-0 bottom-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[150px]"></div>
          </div>

          {/* Encabezado de la sección */}
          <div className="text-center mb-12 sm:mb-16 relative z-10">
            <div className="inline-block">
              <span className="text-blue-500 font-mono text-xs sm:text-sm tracking-wider mb-2 block">
                EXPERIENCIA PROFESIONAL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                <span className="relative inline-block">
                  Trayectoria Profesional
                  <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
                </span>
              </h2>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Experiencia en desarrollo frontend, administración Salesforce y
              proyectos multidisciplinarios con tecnologías modernas.
            </p>
          </div>

          {/* Timeline experiencia profesional */}
          <div className="relative z-10">
            {/* Línea central del timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-700 opacity-70"></div>

            {/* Experiencia 1 - Liftel */}
            <div className="mb-16 sm:mb-20 md:mb-32 relative group">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-16 md:text-right order-2 md:order-1">
                  <div className="bg-slate-800/60 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-xl border-r-4 md:border-r-4 md:border-l-0 border-l-4 md:border-blue-500 border-blue-500 md:transform md:-translate-y-4 hover:shadow-blue-500/10 hover:-translate-y-5 transition-all duration-300 hover-lift">
                    <div className="text-blue-400 text-sm font-mono mb-2">
                      2024 - Presente
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Desarrollador de Front-end
                    </h3>
                    <p className="text-blue-300 font-medium mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Liftel
                    </p>
                    <p className="text-slate-300 mb-4 text-sm sm:text-base">
                      Desarrollo de aplicaciones web con Next.js, integración de
                      APIs web, desarrollo de interfaces, creación de
                      animaciones y efectos con CSS, mantenimiento de proyectos
                      existentes.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-2 sm:px-3 py-1 rounded-full border border-blue-500/20">
                        Next.js
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        CSS
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        API
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-16 order-1 md:order-2 mb-8 md:mb-0">
                  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl aspect-video relative group-hover:shadow-blue-500/10 transition-all duration-300 transform group-hover:scale-[1.02] hover-lift">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-60 z-10"></div>
                    <Image
                      src="/PortofolioIksvaku/liftel.jpg"
                      alt="Liftel"
                      fill
                      className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full items-center justify-center shadow-lg z-20">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experiencia 2 - Multiply College */}
            <div className="mb-20 md:mb-32 relative group">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl aspect-video relative min-h-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-60 z-10"></div>
                    <Image
                      src="/PortofolioIksvaku/salesforceProjects.3698565cb252a6ff4286.jpg"
                      alt="Salesforce Projects"
                      fill
                      className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full items-center justify-center shadow-lg z-20">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-blue-500/10 hover:-translate-y-5 transition-all duration-300 hover-lift">
                    <div className="text-blue-400 text-xs sm:text-sm font-mono mb-2">
                      2023 - 2024
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Administrador de Salesforce
                    </h3>
                    <p className="text-blue-300 font-medium mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      Multiply College
                    </p>
                    <p className="text-slate-300 mb-5">
                      Trabajé creando una organización desde cero, desarrollando
                      arquitectura de datos relacionales, personalización de la
                      app de Salesforce, formularios, objetos, relaciones,
                      creación de flujos, dashboards, reportes y reglas de
                      validación.
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Salesforce
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Flows
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Dashboards
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experiencia 3 - Solera, Inc. */}
            <div className="mb-20 md:mb-32 relative group">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1">
                  <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-blue-500/10 hover:-translate-y-5 transition-all duration-300">
                    <div className="text-blue-400 text-sm font-mono mb-2">
                      Junio 2023 - Agosto 2023
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Ingeniero Junior de Software
                    </h3>
                    <p className="text-blue-300 font-medium mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                      Solera, Inc.
                    </p>
                    <p className="text-slate-300 mb-5 text-sm sm:text-base">
                      Desarrollo de aplicaciones frontend con React.js,
                      colaboración en servicios backend con Node.js,
                      automatización y testing con Jenkins, y participación en
                      metodologías ágiles. Trabajo en un entorno multicultural
                      que mejoró mis habilidades de comunicación en inglés.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        React.js
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Node.js
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Jenkins
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Scrum
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0 order-1 md:order-2">
                  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl aspect-video relative min-h-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-60 z-10"></div>
                    <Image
                      src="/PortofolioIksvaku/reactprojects.jpg"
                      alt="Solera Projects"
                      fill
                      className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full items-center justify-center shadow-lg z-20">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experiencia 4 - GGTech Entertainment */}
            <div className="relative group">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl aspect-video relative min-h-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-60 z-10"></div>
                    <Image
                      src="/PortofolioIksvaku/playcanvas.jpg"
                      alt="Blast Heroes"
                      fill
                      className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full items-center justify-center shadow-lg z-20">
                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-blue-500/10 hover:-translate-y-5 transition-all duration-300">
                    <div className="text-blue-400 text-sm font-mono mb-2">
                      Septiembre 2021 - Julio 2022
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Desarrollador Front-end
                    </h3>
                    <p className="text-blue-300 font-medium mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                      GGTech Entertainment
                    </p>
                    <p className="text-slate-300 mb-5">
                      Trabajé en dos proyectos: &quot;Blast Heroes&quot; donde
                      integré UI y modelos 2D/3D, y &quot;My Life&quot; para
                      Snapchat, donde fui enlace entre equipos
                      multidisciplinarios, desarrollando en PlayCanvas con
                      Node.js para el backend.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        PlayCanvas
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Node.js
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        Snap Games
                      </span>
                      <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                        UI/UX
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón para ver más experiencias */}
          <div className="text-center mt-16 relative z-10">
            <Link
              href="/proyectos"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Ver proyectos completos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* SECCIÓN EDUCACIÓN */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute left-0 top-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[120px]"></div>
            <div className="absolute right-0 bottom-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
          </div>

          {/* Encabezado de la sección */}
          <div className="text-center mb-16 sm:mb-20 relative z-10">
            <div className="inline-block">
              <span className="text-blue-400 font-mono text-xs sm:text-sm tracking-wider mb-3 block bg-blue-500/10 px-4 py-1 rounded-full inline-block">
                EDUCACIÓN Y CERTIFICACIONES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                <span className="relative inline-block">
                  Formación Académica
                  <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-600 to-blue-600"></span>
                </span>
              </h2>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mt-6">
              Formación especializada en desarrollo web, videojuegos y
              tecnologías emergentes para crear soluciones innovadoras
            </p>
          </div>

          {/* Grid de educación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10 px-4 sm:px-6 md:px-0 animate-fadeIn">
            {/* Salesforce */}
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border-t-4 border-blue-500 hover:shadow-blue-500/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div className="sm:ml-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Trailhead by Salesforce
                    </h3>
                    <p className="text-blue-400 font-medium">
                      Salesforce x3 Certification
                    </p>
                  </div>
                </div>
                <div className="text-blue-300 text-xs sm:text-sm font-mono mb-4">
                  Marzo 2024 - Noviembre 2024
                </div>
                <div className="space-y-2 sm:space-y-3 text-slate-300 mb-6 text-sm sm:text-base">
                  <p className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> Certificación
                    completa como Administrador de Salesforce
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>{" "}
                    Especialización en gestión de datos y automatización de
                    procesos
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> Desarrollo de
                    flujos, reglas de validación y procesos de aprobación
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                    Admin
                  </span>
                  <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                    Flow Builder
                  </span>
                  <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                    Apex
                  </span>
                </div>
              </div>
            </div>

            {/* IES Mare Nostrum */}
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border-t-4 border-blue-500 hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 group hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="sm:ml-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    IES Mare Nostrum
                  </h3>
                  <p className="text-blue-400 font-medium">
                    Desarrollo de Aplicaciones Web
                  </p>
                </div>
              </div>
              <div className="text-blue-300 text-xs sm:text-sm font-mono mb-4">
                Septiembre 2018 - Junio 2020
              </div>
              <div className="space-y-2 sm:space-y-3 text-slate-300 mb-6 text-sm sm:text-base">
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Formación
                  completa en desarrollo web full-stack
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Especialización
                  en tecnologías frontend y backend
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Desarrollo de
                  proyectos reales con metodologías ágiles
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  HTML/CSS
                </span>
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  JavaScript
                </span>
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  PHP
                </span>
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  MySQL
                </span>
              </div>
            </div>

            {/* EOI */}
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border-t-4 border-blue-500 hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 group hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <div className="sm:ml-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Escuela de Organización Industrial
                  </h3>
                  <p className="text-blue-400 font-medium">
                    Creación y Diseño de Videojuegos en Unity
                  </p>
                </div>
              </div>
              <div className="text-blue-300 text-xs sm:text-sm font-mono mb-4">
                Febrero 2021 - Junio 2021
              </div>
              <div className="space-y-2 sm:space-y-3 text-slate-300 mb-6 text-sm sm:text-base">
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Desarrollo
                  completo de videojuegos en Unity
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Programación en
                  C# y diseño de mecánicas
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Creación de
                  interfaces y experiencia de usuario
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Optimización y
                  publicación de juegos
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  Unity
                </span>
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  C#
                </span>
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  Game Design
                </span>
              </div>
            </div>

            {/* IoT y Big Data */}
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border-t-4 border-blue-500 hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 group hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div className="sm:ml-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Garantía Juvenil
                  </h3>
                  <p className="text-blue-400 font-medium">
                    Internet de las Cosas y Big Data
                  </p>
                </div>
              </div>
              <div className="text-blue-300 text-xs sm:text-sm font-mono mb-4">
                Septiembre 2018 - Diciembre 2018
              </div>
              <div className="space-y-2 sm:space-y-3 text-slate-300 mb-6 text-sm sm:text-base">
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Fundamentos de
                  IoT y conectividad
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Fundamentos de
                  análisis y procesamiento de datos masivos
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  IoT
                </span>
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  Big Data
                </span>
                <span className="bg-slate-700/80 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                  Python
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
