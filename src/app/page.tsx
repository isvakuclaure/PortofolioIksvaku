import Image from 'next/image';
import Link from 'next/link';

const BASE = '/PortofolioIksvaku';

// Tres fases, no cuatro empleos: la dispersión contada como progresión
const phases = [
  {
    years: '2021 — 2022',
    title: 'Juegos',
    text: 'Integración de UI y de modelos 2D/3D en PlayCanvas para juegos con miles de usuarios simultáneos. Interfaces sujetas a límites estrictos de rendimiento en navegador.',
  },
  {
    years: '2023 — 2024',
    title: 'Producto',
    text: 'Frontend y servicios en equipos internacionales: React, Node e integración continua con Jenkins. Desarrollo sobre bases de código existentes, en metodología Scrum.',
  },
  {
    years: '2024 — hoy',
    title: 'Móvil e IoT',
    text: 'Aplicaciones móviles y web conectadas a dispositivos IoT instalados en edificios. Interfaces que traducen el estado de un aparato físico en algo que cualquier usuario entiende y puede accionar.',
  },
];

const experience = [
  {
    period: 'Dic 2024 — hoy',
    role: 'Desarrollador Frontend',
    company: 'Liftel',
    detail:
      'Frontend de la app móvil en React Native y de los paneles web en Next.js. Integración de APIs REST y gRPC, definición de contratos de datos junto al equipo de backend y apoyo puntual en servicios Go.',
  },
  {
    period: 'May — Oct 2024',
    role: 'Administrador de Salesforce',
    company: 'Multiply College',
    detail:
      'Montaje de la organización desde cero: arquitectura de datos relacionales, objetos y relaciones a medida, flujos de automatización, reglas de validación y escalado, informes y cuadros de mando.',
  },
  {
    period: 'Jun — Ago 2023',
    role: 'Ingeniero Junior de Software',
    company: 'Solera, Inc.',
    detail:
      'Interfaces con React.js y colaboración en servicios Node.js. Integración continua y testing automatizado con Jenkins, en un equipo multicultural donde el trabajo diario era en inglés.',
  },
  {
    period: 'Oct — Dic 2022',
    role: 'Responsable de IT / Programador web',
    company: 'Krystaline',
    detail:
      'Responsable del sitio corporativo en WordPress y del soporte informático de la oficina: cuentas de usuario, correo empresarial, campañas y material gráfico con Photoshop y Premiere.',
  },
  {
    period: 'Sep 2021 — Jul 2022',
    role: 'Desarrollador Frontend',
    company: 'GGTech Entertainment',
    detail:
      'Integración de UI y de modelos 2D/3D en PlayCanvas. Enlace entre programación, arte, animación y VFX, y desarrollo de herramientas internas para que perfiles no técnicos trabajaran sin programar.',
  },
];

const education = [
  { period: '2018 — 2020', title: 'Grado Superior en Desarrollo de Aplicaciones Web', place: 'IES Mare Nostrum' },
  { period: '2024', title: 'Salesforce x3 Certification', place: 'Trailhead by Salesforce' },
  { period: '2021', title: 'Creación y diseño de videojuegos en Unity', place: 'Escuela de Organización Industrial' },
  { period: '2018', title: 'Internet de las Cosas y Big Data', place: 'Garantía Juvenil' },
];

export default function Home() {
  return (
    <main className="bg-ground">
      {/* ── HERO ── */}
      <section className="border-b border-rule py-16 md:py-20">
        <div className="mx-auto grid max-w-[1240px] items-start gap-9 px-5 sm:px-7 md:grid-cols-[246px_1fr] md:gap-14">
          {/* Retrato con marco de foto impresa */}
          <div className="mx-auto w-full max-w-[246px] md:mx-0">
            <div className="bg-panel p-[11px] pb-[34px] shadow-[0_2px_3px_rgba(20,23,27,0.14),0_16px_34px_-14px_rgba(20,23,27,0.14)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel-sunk">
                <Image
                  src={`${BASE}/retrato.jpg`}
                  alt="Retrato de Iksvaku Claure Manchón"
                  fill
                  priority
                  sizes="(max-width: 767px) 60vw, 224px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-soft">
              Alicante · 2026
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Frontend · Web y móvil
            </p>
            <h1 className="text-[clamp(40px,6.2vw,68px)] leading-[0.98]">
              Interfaces
              <br />
              que abren
              <br />
              puertas.
            </h1>
            <p className="mt-5 max-w-[34ch] font-prose text-[20px] leading-[1.5] text-ink-mid">
              Literalmente. Soy{' '}
              <span className="border-b-2 border-signal-lamp pb-px text-ink">
                la conexión entre la persona y el backend
              </span>
              : la capa que se toca. Detrás hay un equipo y un sistema; mi parte es que entre pulsar el botón y que el
              portal se abra no haya nada que se note.
            </p>

            <dl className="mt-8 flex flex-col border-y border-rule sm:flex-row sm:flex-wrap">
              {[
                { label: 'Trabajando desde', value: '2021' },
                { label: 'Base', value: 'Alicante · remoto' },
                { label: 'Stack', value: 'React · Next.js · React Native' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-rule-soft py-3 sm:mr-6 sm:border-b-0 sm:border-r sm:py-3.5 sm:pr-6 sm:last:mr-0 sm:last:border-r-0 sm:last:pr-0"
                >
                  <dt className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">
                    {item.label}
                  </dt>
                  <dd className="text-[14px] font-semibold">{item.value}</dd>
                </div>
              ))}
              <div className="py-3 sm:py-3.5">
                <dt className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">Estado</dt>
                <dd className="inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.13em] text-live">
                  <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-live-lamp" />
                  Abierto a ofertas
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <Link
                href="/proyectos"
                className="border border-ink bg-ink px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-ground transition-colors hover:border-ink-mid hover:bg-ink-mid"
              >
                Ver proyectos
              </Link>
              <Link
                href="/contacto"
                className="border border-rule px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-ink transition-colors hover:border-ink"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FASES ── */}
      <section className="border-b border-rule py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-5">
            <h2 className="font-mono text-[13px] font-medium uppercase tracking-[0.18em]">Cómo llegué aquí</h2>
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-soft">
              Juegos → producto → móvil
            </span>
          </div>

          <div className="grid border-t border-rule md:grid-cols-3">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="border-b border-rule-soft py-6 pr-0 last:border-b-0 md:border-b-0 md:border-r md:pr-7 md:last:border-r-0"
              >
                <p className="font-mono text-[10.5px] font-medium tracking-[0.12em] text-signal">{phase.years}</p>
                <h3 className="mb-1.5 mt-2 text-[19px]">{phase.title}</h3>
                <p className="max-w-[46ch] font-prose text-[15.5px] leading-[1.55] text-ink-mid">{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAYECTORIA Y FORMACIÓN ── */}
      <section className="py-16">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-7 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 font-mono text-[13px] font-medium uppercase tracking-[0.18em]">Trayectoria</h2>
            <div className="border-t border-rule">
              {experience.map((job) => (
                <div key={job.company} className="border-b border-rule-soft py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">{job.period}</p>
                  <p className="mt-1 text-[15px] font-semibold leading-snug">
                    {job.role} <span className="text-ink-soft">·</span> {job.company}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-ink-mid">{job.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-mono text-[13px] font-medium uppercase tracking-[0.18em]">Formación</h2>
            <div className="border-t border-rule">
              {education.map((item) => (
                <div key={item.title} className="border-b border-rule-soft py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">{item.period}</p>
                  <p className="mt-1 text-[15px] font-semibold leading-snug">{item.title}</p>
                  <p className="mt-1 font-mono text-[11px] text-ink-mid">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
