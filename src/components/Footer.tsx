import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-panel">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 sm:px-7 py-9 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.13em] text-ink-soft">
          Iksvaku Claure Manchón · Frontend · Alicante
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="https://linkedin.com/in/iksvaku"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-rule pb-0.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mid transition-colors hover:border-signal-lamp hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/isvakuclaure"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-rule pb-0.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mid transition-colors hover:border-signal-lamp hover:text-ink"
          >
            GitHub
          </a>
          {/* Lo personal se queda, pero en el pie: acompaña, no compite */}
          <Link
            href="/aficiones"
            className="border-b border-rule pb-0.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mid transition-colors hover:border-signal-lamp hover:text-ink"
          >
            Fuera del trabajo →
          </Link>
        </div>
      </div>
    </footer>
  );
}
