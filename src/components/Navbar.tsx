'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Portfolio de Iksvaku
            </Link>
          </div>

          {/* Enlaces de navegación para desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="hover:bg-blue-900 px-3 py-2 rounded-md"
              >
                Inicio
              </Link>
              <Link
                href="/proyectos"
                className="hover:bg-blue-900 px-3 py-2 rounded-md"
              >
                Proyectos
              </Link>
              <Link
                href="/aficiones"
                className="hover:bg-blue-900 px-3 py-2 rounded-md"
              >
                Aficiones
              </Link>
              <Link
                href="/contacto"
                className="hover:bg-blue-900 px-3 py-2 rounded-md"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-900"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/proyectos"
                className="block px-3 py-2 rounded-md hover:bg-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/aficiones"
                className="block px-3 py-2 rounded-md hover:bg-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Aficiones
              </Link>
              <Link
                href="/contacto"
                className="block px-3 py-2 rounded-md hover:bg-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 