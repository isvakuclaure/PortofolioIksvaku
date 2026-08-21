import Image from 'next/image';
import ContactForm from './ContactForm';

const BASE = '/PortofolioIksvaku';

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/iksvaku' },
  { label: 'GitHub', href: 'https://github.com/isvakuclaure' },
];

export default function Contacto() {
  return (
    <main className="bg-ground">
      {/* Cabecera */}
      <div className="border-b border-rule bg-panel">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 sm:px-7 py-8 md:flex-row md:items-end md:justify-between md:gap-14">
          <div>
            <p className="mb-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Alicante · remoto
            </p>
            <h1 className="text-[clamp(30px,4vw,42px)] leading-[1]">Contacto</h1>
          </div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.11em] text-ink-soft md:text-right">
            <span className="inline-flex items-center gap-2 text-live">
              <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-live-lamp" />
              Abierto a ofertas
            </span>
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-7 lg:grid-cols-2 lg:gap-16">
          {/* Quién soy y por dónde encontrarme */}
          <div>
            <div className="flex items-start gap-5">
              <div className="shrink-0 bg-panel p-[7px] pb-5 shadow-[0_2px_3px_rgba(20,23,27,0.12)]">
                <div className="relative h-[92px] w-[74px] overflow-hidden bg-panel-sunk">
                  <Image
                    src={`${BASE}/retrato.jpg`}
                    alt="Retrato de Iksvaku Claure Manchón"
                    fill
                    sizes="74px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div>
                <p className="text-[19px] font-bold leading-tight">Iksvaku Claure Manchón</p>
                <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft">
                  Frontend de producto · Web y móvil
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-[46ch] font-prose text-[17.5px] leading-[1.62] text-ink-mid">
              Busco un equipo donde el frontend se trate como producto y no como maquetación. Si tienes algo así,
              escríbeme — <span className="font-semibold text-ink">contesto a todo</span>.
            </p>

            <dl className="mt-8 border-t border-rule">
              {[
                { label: 'Ubicación', value: 'Alicante, España' },
                { label: 'Modalidad', value: 'Presencial, híbrido o remoto' },
                { label: 'Idiomas', value: 'Español nativo · Inglés B1' },
              ].map((item) => (
                <div key={item.label} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-rule-soft py-3">
                  <dt className="min-w-[110px] font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">
                    {item.label}
                  </dt>
                  <dd className="text-[14px] font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-rule px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-ink transition-colors hover:border-ink"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="mb-6 font-mono text-[13px] font-medium uppercase tracking-[0.18em]">Escríbeme</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
