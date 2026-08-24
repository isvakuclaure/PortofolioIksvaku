'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  // El menú se cierra al cambiar de página
  useEffect(() => setIsMenuOpen(false), [pathname]);

  // Con el menú abierto, el fondo no se mueve: el botón de cerrar no se va nunca
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed z-50 w-full border-b border-rule bg-panel">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
        <div className="flex min-h-[58px] items-stretch justify-between gap-5">
          {/* Placa con el nombre */}
          <Link
            href="/"
            className="flex min-w-0 flex-col justify-center gap-0.5 border-r border-rule-soft pr-4 transition-opacity hover:opacity-70 sm:pr-6"
          >
            <span className="truncate text-[13px] font-bold uppercase tracking-[0.06em] sm:text-[14px]">
              Iksvaku Claure
            </span>
            <span className="truncate font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-soft sm:text-[10px] sm:tracking-[0.1em]">
              Frontend de producto
            </span>
          </Link>

          {/* Escritorio */}
          <div className="hidden items-stretch md:flex">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`flex items-center border-b-2 px-3.5 text-[12.5px] font-medium uppercase tracking-[0.04em] transition-colors ${
                  isActive(href)
                    ? 'border-signal-lamp text-ink'
                    : 'border-transparent text-ink-mid hover:text-ink'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className={`my-auto shrink-0 border p-2 transition-colors md:hidden ${
              isMenuOpen
                ? 'border-ink bg-ink text-ground'
                : 'border-rule text-ink-mid hover:border-ink hover:text-ink'
            }`}
          >
            <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="menu-movil" className="border-t border-rule-soft py-2 md:hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`block px-1 py-2.5 text-[13px] font-medium uppercase tracking-[0.04em] transition-colors ${
                  isActive(href) ? 'text-ink' : 'text-ink-mid hover:text-ink'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
