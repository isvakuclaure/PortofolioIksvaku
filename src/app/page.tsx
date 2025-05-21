'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* SECCIÓN HERO */}
      <div className="min-h-[300px] relative overflow-hidden">
        {/* Contenedor principal con altura reducida */}
        <div className="relative h-[300px] flex flex-row">
          {/* Lado izquierdo: Imagen */}
          <div className="relative w-1/2 h-full overflow-hidden">
            {/* Fondo texturizado para la imagen */}
            <div
              className="absolute inset-0 bg-slate-400"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.15'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative h-full w-full flex items-center justify-center">
              <div className="relative w-[90%] h-[90%] shadow-md rounded-sm overflow-hidden">
                <Image
                  src="portfolioiksvaku/portada.jpg"
                  alt="Iksvaku portrait"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="50vw"
                />
              </div>
              {/* Efecto de borde brillante */}
              <div className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-b from-blue-400 via-slate-300 to-slate-600"></div>
            </div>
          </div>

          {/* Lado derecho: Contenido de texto */}
          <div className="relative w-1/2 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
            {/* Elementos decorativos inspirados en frontend */}
            <div className="absolute top-4 right-6 flex items-center gap-1.5">
              <div className="text-blue-400/70 font-mono text-xs">
                &lt;/&gt;
              </div>
              <div className="text-yellow-400/70 font-mono text-xs">{}</div>
              <div className="text-cyan-400/70 font-mono text-xs">#</div>
            </div>
            <div className="absolute bottom-5 left-10 w-20 h-[2px] bg-blue-500/40"></div>

            <div className="relative z-10 px-6 py-4 max-w-md">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                <span className="inline-block relative">
                  Programador
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></span>
                </span>
                <br />
                <span className="text-blue-300 drop-shadow-md">Frontend</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg text-slate-200 mb-3 sm:mb-4 border-l-2 border-blue-400/50 pl-3">
                Desarrollando experiencias web únicas y modernas
              </p>

              {/* Botón de contacto */}
              <div className="flex items-start">
                <Link
                  href="/contacto"
                  className="group bg-gradient-to-r from-slate-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white text-sm sm:text-base font-medium py-1.5 sm:py-2 px-4 sm:px-5 rounded-md transition-all duration-300 hover:shadow-lg flex items-center overflow-hidden relative"
                >
                  <span className="z-10 flex items-center">
                    Contacto
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          </div>
        </div>

        {/* Estilos para formas decorativas y responsive móvil */}
        <style jsx>{`
          .clip-corner {
            clip-path: polygon(0 0, 100% 0, 0 100%);
          }
          @media (max-width: 640px) {
            .relative.h-[300px].flex.flex-row {
              flex-direction: column;
            }
            .relative.w-1/2.h-full {
              width: 100%;
              height: 50%;
            }
          }
        `}</style>
      </div>

      {/* SECCIÓN TRAYECTORIA PROFESIONAL */}
      <div className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              <span className="relative inline-block">
                Trayectoria Profesional
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Experiencia en desarrollo frontend, administración Salesforce y
              proyectos multidisciplinarios.
            </p>
          </div>

          {/* Timeline experiencia profesional */}
          <div className="relative">
            {/* Línea central del timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-slate-400"></div>

            {/* Experiencia 1 - Liftel */}
            <div className="mb-12 md:mb-24 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Desarrollador de front-end
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">Liftel</p>
                    <p className="text-sm text-slate-500 mb-3">
                      Diciembre 2024 - Presente
                    </p>
                    <p className="text-slate-700 mb-4">
                      Desarrollo de aplicaciones web con Next.js, integración de
                      APIs web, desarrollo de interfaces, creación de
                      animaciones y efectos con CSS, mantenimiento de proyectos
                      existentes.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Next.js
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        CSS
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        API
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md aspect-video relative">
                    <Image
                      src="public/liftel.jpg"
                      alt="Liftel"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                </div>
              </div>
            </div>

            {/* Experiencia 2 - Multiply College */}
            <div className="mb-12 md:mb-24 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md aspect-video relative">
                    <Image
                      src="portfolioiksvaku/public/salesforceProjects.3698565cb252a6ff4286.jpg"
                      alt="Salesforce Projects"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Administrador de Salesforce
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      Multiply College
                    </p>
                    <p className="text-sm text-slate-500 mb-3">
                      Mayo 2024 - Octubre 2024 (6 meses)
                    </p>
                    <p className="text-slate-700 mb-4">
                      Trabajé creando una organización desde cero, desarrollando
                      arquitectura de datos relacionales, personalización de la
                      app de Salesforce, formularios, objetos, relaciones,
                      creación de flujos, dashboards, reportes y reglas de
                      validación.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Salesforce
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Flows
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Dashboards
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experiencia 3 - Solera, Inc. */}
            <div className="mb-12 md:mb-24 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Ingeniero Junior de Software
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      Solera, Inc.
                    </p>
                    <p className="text-sm text-slate-500 mb-3">
                      Junio 2023 - Agosto 2023 (3 meses)
                    </p>
                    <p className="text-slate-700 mb-4">
                      Desarrollo de aplicaciones frontend con React.js,
                      colaboración en servicios backend con Node.js,
                      automatización y testing con Jenkins, y participación en
                      metodologías ágiles. Trabajo en un entorno multicultural
                      que mejoró mis habilidades de comunicación en inglés.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        React.js
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Node.js
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Jenkins
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Scrum
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md aspect-video relative">
                    <Image
                      src="/reactprojects.jpg"
                      alt="Solera Projects"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                </div>
              </div>
            </div>

            {/* Experiencia 4 - GGTech Entertainment */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md aspect-video relative">
                    <Image
                      src="/playcanvas.jpg"
                      alt="Blast Heroes"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Desarrollador front-end
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      GGTech Entertainment
                    </p>
                    <p className="text-sm text-slate-500 mb-3">
                      Septiembre 2021 - Julio 2022 (11 meses)
                    </p>
                    <p className="text-slate-700 mb-4">
                      Trabajé en dos proyectos: &quot;Blast Heroes&quot; donde
                      integré UI y modelos 2D/3D, y &quot;My Life&quot; para
                      Snapchat, donde fui enlace entre equipos
                      multidisciplinarios, desarrollando en PlayCanvas con
                      Node.js para el backend.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        PlayCanvas
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Node.js
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        Snap Games
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                        UI/UX
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Botón para ver más experiencias */}

          <div className="text-center mt-10">
            <Link
              href="/proyectos"
              className="inline-flex items-center bg-slate-800 text-white text-sm sm:text-base font-medium py-2 px-6 rounded-md hover:bg-blue-900 transition-all duration-300"
            >
              Ver proyectos completos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              <span className="relative inline-block">
                Formación Académica
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Formación especializada en desarrollo web, videojuegos y
              tecnologías emergentes
            </p>
          </div>

          {/* Grid de educación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Salesforce */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
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
                <h3 className="text-xl font-bold text-slate-900 ml-3">
                  Trailhead by Salesforce
                </h3>
              </div>
              <p className="text-blue-600 font-medium">
                Salesforce x3 Certification
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Marzo 2024 - Noviembre 2024
              </p>
              <div className="space-y-2 text-slate-700">
                <p>• Certificación completa como Administrador de Salesforce</p>
                <p>
                  • Especialización en gestión de datos y automatización de
                  procesos
                </p>
                <p>• Desarrollo de flujos de trabajo y reglas de negocio</p>
                <p>• Configuración avanzada de seguridad y permisos</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Admin
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Flow Builder
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Apex
                </span>
              </div>
            </div>

            {/* IES Mare Nostrum */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
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
                <h3 className="text-xl font-bold text-slate-900 ml-3">
                  IES Mare Nostrum
                </h3>
              </div>
              <p className="text-blue-600 font-medium">
                Desarrollo de Aplicaciones Web
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Septiembre 2018 - Junio 2020
              </p>
              <div className="space-y-2 text-slate-700">
                <p>• Formación completa en desarrollo web full-stack</p>
                <p>• Especialización en tecnologías frontend y backend</p>
                <p>• Proyectos prácticos con metodologías ágiles</p>
                <p>• Prácticas en empresa con proyectos reales</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  HTML/CSS
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  JavaScript
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  PHP
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  MySQL
                </span>
              </div>
            </div>

            {/* EOI */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
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
                <h3 className="text-xl font-bold text-slate-900 ml-3">
                  Escuela de Organización Industrial
                </h3>
              </div>
              <p className="text-blue-600 font-medium">
                Creación y Diseño de Videojuegos en Unity
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Febrero 2021 - Junio 2021
              </p>
              <div className="space-y-2 text-slate-700">
                <p>• Desarrollo completo de videojuegos en Unity</p>
                <p>• Programación en C# y diseño de mecánicas</p>
                <p>• Creación de interfaces y experiencia de usuario</p>
                <p>• Optimización y publicación de juegos</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Unity
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  C#
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Game Design
                </span>
              </div>
            </div>

            {/* IoT y Big Data */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
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
                <h3 className="text-xl font-bold text-slate-900 ml-3">
                  Garantía Juvenil
                </h3>
              </div>
              <p className="text-blue-600 font-medium">
                Internet de las Cosas y Big Data
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Septiembre 2018 - Diciembre 2018
              </p>
              <div className="space-y-2 text-slate-700">
                <p>• Fundamentos de IoT y conectividad</p>
                <p>
                  • Fundamentos de análisis y procesamiento de datos masivos
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  IoT
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                  Big Data
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
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
