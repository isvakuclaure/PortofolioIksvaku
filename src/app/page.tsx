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
            <div className="absolute inset-0 bg-slate-400" style={{          
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.15'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="relative w-[90%] h-[90%] shadow-md rounded-sm overflow-hidden">
                <Image
                  src="/portada.jpg"
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
              <div className="text-blue-400/70 font-mono text-xs">&lt;/&gt;</div>
              <div className="text-yellow-400/70 font-mono text-xs">{ }</div>
              <div className="text-cyan-400/70 font-mono text-xs">#</div>
            </div>
            <div className="absolute bottom-5 left-10 w-20 h-[2px] bg-blue-500/40"></div>
            
            <div className="relative z-10 px-6 py-4 max-w-md">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                <span className="inline-block relative">
                  Programador
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></span>
                </span>
                <br/>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
              Experiencia en desarrollo frontend, administración Salesforce y proyectos multidisciplinarios.
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
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Desarrollador de front-end</h3>
                    <p className="text-blue-600 font-medium mb-2">Liftel</p>
                    <p className="text-sm text-slate-500 mb-3">Diciembre 2024 - Presente (6 meses)</p>
                    <p className="text-slate-700 mb-4">
                      Desarrollo de aplicaciones web con Next.js, integración de APIs web, desarrollo de interfaces, creación de animaciones y efectos con CSS, mantenimiento de proyectos existentes.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Next.js</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">CSS</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">API</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
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
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Administrador de Salesforce</h3>
                    <p className="text-blue-600 font-medium mb-2">Multiply College</p>
                    <p className="text-sm text-slate-500 mb-3">Mayo 2024 - Octubre 2024 (6 meses)</p>
                    <p className="text-slate-700 mb-4">
                      Trabajé creando una organización desde cero, desarrollando arquitectura de datos relacionales, personalización de la app de Salesforce, formularios, objetos, relaciones, creación de flujos, dashboards, reportes y reglas de validación.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Salesforce</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Flows</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Dashboards</span>
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
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Ingeniero Junior de Software</h3>
                    <p className="text-blue-600 font-medium mb-2">Solera, Inc.</p>
                    <p className="text-sm text-slate-500 mb-3">Junio 2023 - Agosto 2023 (3 meses)</p>
                    <p className="text-slate-700 mb-4">
                      Desarrollo de aplicaciones frontend con React.js, colaboración en servicios backend con Node.js, automatización y testing con Jenkins, y participación en metodologías ágiles. Trabajo en un entorno multicultural que mejoró mis habilidades de comunicación en inglés.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">React.js</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Node.js</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Jenkins</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Scrum</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                  <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
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
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 md:transform md:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Desarrollador front-end</h3>
                    <p className="text-blue-600 font-medium mb-2">GGTech Entertainment</p>
                    <p className="text-sm text-slate-500 mb-3">Septiembre 2021 - Julio 2022 (11 meses)</p>
                    <p className="text-slate-700 mb-4">
                      Trabajé en dos proyectos: &quot;Blast Heroes&quot; donde integré UI y modelos 2D/3D, y &quot;My Life&quot; para Snapchat, donde fui enlace entre equipos multidisciplinarios, desarrollando en PlayCanvas con Node.js para el backend.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">PlayCanvas</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Node.js</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">Snap Games</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón para ver más experiencias */}
            <div className="text-center mt-16">
              <Link 
                href="/proyectos" 
                className="inline-flex items-center bg-slate-800 text-white text-sm sm:text-base font-medium py-2 px-6 rounded-md hover:bg-blue-900 transition-all duration-300"
              >
                Ver proyectos completos
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
