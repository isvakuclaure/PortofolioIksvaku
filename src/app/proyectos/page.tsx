"use client";
import Link from "next/link";

export default function Proyectos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-800/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">          
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
              Mis Proyectos
            </h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Explora mi portafolio de proyectos desarrollados con diferentes
              tecnologías y para diversos clientes.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="py-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute right-0 top-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px]"></div>
            <div className="absolute left-0 bottom-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[150px]"></div>
          </div>

          {/* Categoría: NextJS */}
          <div className="mb-12 relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-green-500 hover:shadow-green-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.746 4.347 16.538.561 12.189-.842A11.777 11.777 0 0011.572 0z" />
                </svg>
                NextJS
              </h2>
              <div className="space-y-8">
                {/* Proyecto Liftplay */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-2 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/lifplay.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/reactprojects.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Liftplay
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Aplicación moderna para la gestión de ascensores. Mantenimiento y control de
                        ascensores con interfaz intuitiva y tecnología de
                        vanguardia. Conexiones a Apis y un sistema GRPC Streaming.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          NextJS
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          Flowbite
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          gRPC
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          DriverJS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proyecto Sandscripter */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-1 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/sandscripter.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/reactprojects.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-2 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Sandscripter
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Aplicación web para generar y editar código de manera
                        colaborativa. Incluye editor de código en tiempo real,
                        sistema de versionado y integración con APIs de IA para
                        asistencia en programación.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          NextJS
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          AI
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          API
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          Open Source
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">                        
                        <a
                          href="https://github.com/dawalberto/sandscripters-ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Ver proyecto en GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proyecto Jona Nutrición */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-2 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/jonanutricion.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/reactprojects.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Jona Nutrición
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Plataforma web para consultas nutricionales online.
                        Incluye sistema de citas, calculadoras nutricionales,
                        blog de contenido especializado y área de cliente
                        personalizada.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          NextJS
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          AI
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          API
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          Open Source
                        </span>
                      </div>
                      <div className="flex justify-start">
                        <a
                          href="https://jonanutricion.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Ver sitio web
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Categoría: WordPress */}
          <div className="mb-12 relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-blue-500 hover:shadow-blue-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5z" />
                  <path d="M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0zm8.5 6.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" />
                </svg>
                WordPress
              </h2>
              <div className="space-y-8">
                {/* Proyecto VT-TRAINING */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-2 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/vttraining.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/wordpress.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        VT-TRAINING
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Página web corporativa para empresa de formación
                        especializada en el sector del transporte. Diseño
                        moderno y responsive con sistema de gestión de
                        contenidos personalizado.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          WordPress
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          Diseño
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          SEO
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          Responsive
                        </span>
                      </div>
                      <div className="flex justify-start">
                        <a
                          href="https://vt-training.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Ver sitio web
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proyecto Marbac */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-1 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/marbac.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/wordpress.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-2 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Marbac
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Sitio web para empresa especializada en mármoles y
                        acabados de construcción. Incluye catálogo de productos,
                        galería de proyectos y formulario de contacto
                        optimizado.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          WordPress
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          Diseño
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          SEO
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          Responsive
                        </span>
                      </div>
                      <div className="flex justify-start">
                        <a
                          href="https://marbac.es/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Ver sitio web
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categoría: PlayCanvas */}
          <div className="mb-12 relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                PlayCanvas
              </h2>
              <div className="space-y-8">
                {/* Proyecto Blast Heroes */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-1 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/blastheroes.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/playcanvas.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-2 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Blast Heroes
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Juego web 3D desarrollado en PlayCanvas. Mecánicas de
                        combate dinámico con elementos de estrategia en tiempo
                        real. Optimizado para navegadores web con gráficos de
                        alta calidad.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          PlayCanvas
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          3D
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          WebGL
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          Game Dev
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proyecto My Life */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-1 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/projectLife.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/playcanvas.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-2 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        My Life
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Simulador de vida interactivo desarrollado en
                        PlayCanvas. Permite a los usuarios tomar decisiones que
                        afectan el desarrollo del personaje a lo largo de
                        diferentes etapas de la vida.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          PlayCanvas
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          Snatchap
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          Node.js
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                          IDLE Game
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categoría: Unity */}
          <div className="relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-purple-500 hover:shadow-purple-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 7.5L8.5 9.5l2.427 2L8.5 13.5l2.427 2L8.5 17.5l2.427 2L8.5 21.5l2.427-2L13.354 17l-2.427-2L13.354 13l-2.427-2L13.354 9l-2.427-2z" />
                </svg>
                Unity
              </h2>
              <div className="space-y-8">
                {/* Proyecto Interview Dualist */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-1 md:order-1">
                      <div className="relative h-48 lg:h-64 bg-slate-700/50 rounded-lg overflow-hidden">
                        <video
                          src="/PortofolioIksvaku/interviewdualist.mp4"
                          className="object-cover w-full h-full"
                          controls
                          poster="/PortofolioIksvaku/unity.jpg"
                        />
                      </div>
                    </div>
                    <div className="order-2 md:order-2">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Interview Dualist
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        Juego 2D desarrollado para Game Jam. Mecánica innovadora
                        donde el jugador debe responder preguntas de entrevista
                        mientras controla un personaje en un entorno de
                        plataformas. Combina elementos de puzzle y acción.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          Unity
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          C#
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          Game Jam
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          2D
                        </span>
                      </div>
                      <div className="flex justify-start">
                        <a
                          href="https://iksvaku.itch.io/interview-dualist"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Jugar en itch.io
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-white mb-6">
            ¿Te interesa algún proyecto o quieres colaborar?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/aficiones"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Ver mis aficiones
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Contactar conmigo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
