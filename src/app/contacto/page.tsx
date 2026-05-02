'use client';
import Link from "next/link";
import Image from "next/image";

export default function Contacto() {
  const linkedInMessage = encodeURIComponent("Hola, he visto tu portfolio y me gustaría hablar contigo sobre una posible colaboración.");
  const linkedInURL = `https://www.linkedin.com/messaging/compose/?to=Iksvaku&body=${linkedInMessage}`;

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Contacto</h1>
          <p className="text-slate-400 text-sm mt-1">¿Interesado en colaborar? Escríbeme por LinkedIn.</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-lg">

          {/* Tarjeta de perfil */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center mb-6">
            <div className="w-24 h-24 relative mx-auto mb-4">
              <Image
                src="/PortofolioIksvaku/portada.jpg"
                alt="Iksvaku Claure Manchón"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">Iksvaku Claure Manchón</h2>
            <p className="text-slate-500 text-sm mb-5">Desarrollador Web Frontend</p>

            {/* Social links */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://linkedin.com/in/iksvaku"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/isvakuclaure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-slate-500 text-sm mb-5">
                Prefiero mantener mis comunicaciones profesionales a través de LinkedIn.
              </p>
              <a
                href={linkedInURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Enviar mensaje en LinkedIn
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <Link href="/proyectos" className="flex-1 text-center px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
              Ver proyectos
            </Link>
            <Link href="/aficiones" className="flex-1 text-center px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
              Mis aficiones
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
