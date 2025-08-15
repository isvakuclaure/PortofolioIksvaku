"use client";
import Link from "next/link";

export default function Proyectos() {
  return (
    <main className="min-h-screen">
      {/* Encabezado de la página */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="relative inline-block">
                Mis Proyectos
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explora mi portafolio de proyectos desarrollados con diferentes
              tecnologías y para diversos clientes
            </p>
          </div>
        </div>
      </div>

      {/* Categoría: WordPress */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5z" />
                <path d="M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0zm8.5 6.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" />
              </svg>
              WordPress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Proyecto VT-TRAINING */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                {" "}
                <div className="relative h-48 md:h-64 bg-slate-200 overflow-hidden">
                  {" "}
                  <video
                    src="/PortofolioIksvaku/vttraining.mp4"
                    className="object-cover w-full h-full"
                    controls
                    poster="/PortofolioIksvaku/wordpress.jpg" 
                  />{" "}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    VT-TRAINING
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Desarrollé la web profesional VT-TRAINING, una web
                    desarrollada en WordPress enfocada al HYROX, de hecho son
                    subcampeones del mundo del HYROX sub 29. Implementé
                    interfaz, instalación de wordpress en servidor, instalación
                    del certificado SSL, instalación de plugins y asesoramiento
                    al cliente.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      WordPress
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Responsive
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Personalización
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      SSL
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://vttraining.es/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Visitar sitio
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </div>

              {/* Proyecto Marbac */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 md:h-64 bg-slate-200">
                  <video
                    src="/PortofolioIksvaku/marbac.mp4"
                    className="object-cover w-full h-full"
                    controls
                    poster="/PortofolioIksvaku/wordpress.jpg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Marbac
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Desarrollé la web profesional Marbac, una web desarrollada
                    en WordPress enfocada a las reformas de casas en Madrid,
                    interiorismo y diseño. Implementé interfaz, instalación de
                    wordpress en servidor, instalación del certificado SSL,
                    instalación de plugins y asesoramiento al cliente.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      WordPress
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Diseño
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      SEO
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Responsive
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://marbac.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Visitar sitio
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categoría: PlayCanvas */}
          <div className="mb-12 pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange-500 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.58 16.09l-1.09-7.66A3.996 3.996 0 0 0 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
              PlayCanvas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Proyecto Blast Heroes */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 md:h-64 bg-slate-200">
                  <video
                    src="/PortofolioIksvaku/blastheroes.mp4"
                    className="object-contain w-full h-full"
                    controls
                    poster="/PortofolioIksvaku/playcanvas.jpg"
                    style={{ maxHeight: "100%" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Blast Heroes
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Proyecto desarrollado dentro del entorno de Snatchap.
                    Participé en el proyecto en una fase avanzada, enfocándome
                    en la integración de UI y modelos 2D/3D en el entorno de
                    juego. Colaboré estrechamente con programación y arte para
                    asegurar una experiencia fluida, y gestioné parches y
                    actualizaciones.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      PlayCanvas
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Snatchap
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      UI/UX
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Juego móvil
                    </span>
                  </div>
                </div>
              </div>

              {/* Proyecto My Life */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 md:h-64 bg-slate-200">
                  <video
                    src="/PortofolioIksvaku/projectLife.mp4"
                    className="object-cover w-full h-full"
                    controls
                    poster="/PortofolioIksvaku/playcanvas.jpg"  
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    My Life
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Proyecto desarrollado dentro del entorno de Snatchap.
                    Participé en el proyecto en una fase inicial, enfocándome en
                    la integración de UI y modelos 2D/3D en el entorno de juego.
                    Colaboré estrechamente con los equipos de programación, arte
                    y diseñadores para asegurar una experiencia fluida.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      PlayCanvas
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Snatchap
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Node.js
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      IDLE Game
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categoría: NextJS */}
          <div className="mb-12 pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              NextJS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Proyecto Sandscripter */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 lg:h-72 bg-slate-200">
                  <video
                    src="/PortofolioIksvaku/sandscripter.mp4"
                    className="object-cover w-full h-full"
                    controls
                    poster="/PortofolioIksvaku/reactprojects.jpg" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Sandscripter
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Sandscripter es una aplicación desarrollada para la Open
                    Source Jam 2023, diseñada para simplificar la creación de
                    contenido visual en el desarrollo web. Utiliza una API
                    basada en inteligencia artificial que automatiza la
                    generación de imágenes genéricas y libres de derechos de
                    autor, lo cual facilita enormemente la creación de páginas
                    web.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      NextJS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      IA
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      API
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Open Source
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://github.com/dawalberto/sandscripters-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ver en Github
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </div>

              {/* Proyecto Jona Nutrición */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 lg:h-72 bg-slate-200">
                  <video
                    src="/PortofolioIksvaku/jonanutricion.mp4"
                    className="object-cover w-full h-full"
                    controls
                    poster="/PortofolioIksvaku/reactprojects.jpg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Jona Nutrición
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Desarrollé la web profesional para Jona Pérez, un dietista-nutricionista
                    especializado en nutrición deportiva con sede en Sant Vicent del Raspeig, Alacant.
                    El sitio presenta sus servicios de planes nutricionales personalizados, consultas
                    y seguimiento para diferentes objetivos como pérdida de peso, definición muscular
                    y bienestar general.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      NextJS
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Responsive
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Diseño Web
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      SEO
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://www.jonanutricion.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Visitar sitio
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categoría: Unity */}
          <div className="pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
              </svg>
              Unity
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {/* Proyecto Interview Dualist */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 lg:h-72 bg-slate-200">
                  <video
                    src="/PortofolioIksvaku/interviewDualist.mp4"
                    className="object-cover w-full h-full"
                    controls
                    poster="/.jpg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Interview Dualist
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Interview Duelist es un juego tipo blackjack creado para la
                    Game Jam 2021 de Game Jam Academy, centrado en la
                    empleabilidad. En este juego de cartas, los jugadores
                    encarnan a Roboto, un robot que busca su primer empleo en
                    una prestigiosa empresa de videojuegos. Para lograrlo, debe
                    impresionar al Boss en una entrevista, destacando en áreas
                    clave como Experience, Tech Skills, Soft Skills, y
                    Portfolio.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Unity
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      C#
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      Game Jam
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded">
                      2D
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="https://kikritz.itch.io/interview-duelist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ver en Itchio
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de llamada a la acción */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            ¿Interesado en mi perfil?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
           Siempre estoy dispuesto a aprender y a trabajar en nuevos proyectos en mi tiempo libre.
          </p>
          <Link
            href="/contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center"
          >
            Contactar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
