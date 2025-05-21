'use client';
import Image from "next/image";
import CustomImage from "@/components/CustomImage";
import Link from "next/link";

export default function Contacto() {
  // URL de LinkedIn para mensaje directo con texto predeterminado
  const linkedInProfile = "Iksvaku";
  const linkedInMessage = encodeURIComponent("Hola, he visto tu portfolio y me gustaría hablar contigo sobre una posible colaboración.");
  const linkedInURL = `https://www.linkedin.com/messaging/compose/?to=${linkedInProfile}&body=${linkedInMessage}`;

  return (
    <main className="min-h-screen">
      {/* Encabezado de la página */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="relative inline-block">
                Contacto
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              ¿Interesado en contactarme? Conecta conmigo directamente en
              LinkedIn
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-24 h-24 relative mb-4">
                  <CustomImage
                    src="/portada.jpg"
                    alt="Foto de perfil"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Iksvaku Claure Manchón
                </h2>
                <p className="text-slate-600 mb-4">
                  Desarrollador Web Frontend
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/iksvaku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/isvakuclaure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-slate-600"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Contáctame en LinkedIn
                </h3>
                <p className="text-slate-600 mb-6">
                  Prefiero mantener todas mis comunicaciones profesionales a
                  través de LinkedIn. Haz clic en el botón de abajo para
                  enviarme un mensaje directo.
                </p>
                <div className="text-center">
                  <a
                    href={linkedInURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Enviar mensaje en LinkedIn
                    </div>
                  </a>
                </div>
              </div>

              <div className="text-center text-slate-600">
                <p>
                  También puedes conectar conmigo siguiéndome en GitHub o
                  LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de llamada a la acción */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            ¿Interesado en conocer más sobre mi trabajo?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Explora mis proyectos y aficiones para conocer mejor mi perfil
            profesional
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/proyectos"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Ver proyectos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/aficiones"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Mis aficiones
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
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
