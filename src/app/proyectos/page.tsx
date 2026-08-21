'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import MediaModal from './MediaModal';
import WorkTile from './WorkTile';
import { featured, others, type FeaturedProject, type OtherProject, type Spec } from './projects';

const BASE = '/PortofolioIksvaku';

/** Renderiza **negrita** sin recurrir a HTML crudo */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((chunk, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {chunk}
          </strong>
        ) : (
          chunk
        ),
      )}
    </>
  );
}

function Lamp({ label, live }: { label: string; live: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.13em] ${
        live ? 'text-live' : 'text-ink-soft'
      }`}
    >
      <span
        aria-hidden
        className={`h-[7px] w-[7px] shrink-0 rounded-full ${live ? 'bg-live-lamp' : 'bg-ink-soft opacity-60'}`}
      />
      {label}
    </span>
  );
}

function SpecValue({ spec }: { spec: Spec }) {
  if (spec.pending) {
    return <span className="border-b border-dashed border-signal font-semibold text-signal">{spec.value}</span>;
  }
  return (
    <>
      {spec.value.split('\n').map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

/** Placa con el logo de la empresa: el PNG es opaco, así que va enmarcado */
function CompanyPlate() {
  return (
    <span className="mr-2 inline-block h-[19px] w-[19px] shrink-0 overflow-hidden border border-rule bg-white align-[-5px]">
      <Image src={`${BASE}/liftel-logo.png`} alt="" width={19} height={19} className="h-full w-full object-contain" />
    </span>
  );
}

/** Índice lateral: pegajoso en escritorio, tira horizontal en móvil */
function ProjectIndex({ active }: { active: string }) {
  return (
    <nav
      aria-label="Índice de proyectos"
      className="sticky top-[58px] z-20 -mx-5 min-w-0 max-w-full self-start border-b border-rule bg-ground px-5 py-2 sm:-mx-7 sm:px-7 lg:top-20 lg:mx-0 lg:max-w-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0"
    >
      <h2 className="mb-5 hidden font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-ink lg:block">
        Trabajo destacado
      </h2>
      <ul className="-mx-1 flex min-w-0 gap-1 overflow-x-auto pb-1 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
        {featured.map((project) => {
          const current = active === project.slug;
          return (
            <li key={project.slug} className="shrink-0 lg:shrink lg:border-b lg:border-rule-soft">
              <a
                href={`#${project.slug}`}
                aria-current={current ? 'true' : undefined}
                className={`flex items-center gap-2.5 whitespace-nowrap px-1 py-2.5 text-[12.5px] font-medium transition-colors lg:whitespace-normal ${
                  current ? 'text-ink' : 'text-ink-soft hover:text-ink-mid'
                }`}
              >
                <span
                  aria-hidden
                  className={`h-[6px] w-[6px] shrink-0 rounded-full transition-colors ${
                    current ? 'bg-signal-lamp' : 'bg-rule'
                  }`}
                />
                {project.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Record({ project }: { project: FeaturedProject }) {
  const portraitVideo = project.video && project.videoOrientation === 'portrait';
  const landscapeVideo = project.video && project.videoOrientation === 'landscape';

  return (
    <article
      id={project.slug}
      className="scroll-mt-32 grid min-w-0 gap-8 border-t border-rule py-10 first:border-t-0 first:pt-0 md:scroll-mt-24 md:grid-cols-[180px_1fr] md:gap-11 md:py-11 md:first:pt-0"
    >
      {/* Rail de datos duros. En móvil va después del cuerpo: primero el nombre, luego la ficha */}
      <div className="order-2 min-w-0 md:order-1">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 md:flex md:flex-col md:gap-4">
          {project.specs.map((spec) => (
            <div key={spec.label}>
              <dt className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">{spec.label}</dt>
              <dd className="text-[13.5px] font-medium leading-snug">
                <SpecValue spec={spec} />
              </dd>
            </div>
          ))}
          <div>
            <dt className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">Stack</dt>
            <dd className="font-mono text-[11.5px] leading-[1.85] text-ink-mid">
              {project.stack.map((tech) => (
                <span key={tech} className="block">
                  {tech}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">Estado</dt>
            <dd>
              <Lamp label={project.status} live={project.live} />
            </dd>
          </div>
        </dl>
      </div>

      {/* Cuerpo */}
      <div className="order-1 min-w-0 md:order-2">
        <h3 className="mb-1 text-[clamp(26px,3.6vw,38px)] leading-[1.02]">{project.title}</h3>
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
          {project.withLogo && <CompanyPlate />}
          {project.company}
        </p>

        <div className="flex max-w-[62ch] flex-col gap-3.5">
          {project.paragraphs.map((text, i) => (
            <p key={i} className="font-prose text-[17.5px] leading-[1.62] text-ink-mid">
              <RichText text={text} />
            </p>
          ))}
        </div>

        {/* Capturas y, si el vídeo es vertical, el vídeo como una pantalla más */}
        {(project.shots || portraitVideo) && (
          <div className="mt-7 grid grid-cols-2 items-start gap-3.5 sm:flex sm:flex-wrap">
            {project.shots?.map((shot) => (
              <figure key={shot.src} className="border border-rule bg-panel px-2 pt-2">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  width={150}
                  height={326}
                  className="block h-auto w-full sm:w-[150px]"
                />
                <figcaption className="px-0.5 pb-2.5 pt-2 text-center font-mono text-[9px] uppercase tracking-[0.1em] text-ink-soft">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
            {portraitVideo && (
              <figure className="border border-rule bg-panel px-2 pt-2">
                <video
                  src={project.video}
                  className="block h-auto w-full bg-ink sm:w-[150px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${project.title} en funcionamiento`}
                />
                <figcaption className="px-0.5 pb-2.5 pt-2 text-center font-mono text-[9px] uppercase tracking-[0.1em] text-signal">
                  En funcionamiento
                </figcaption>
              </figure>
            )}
          </div>
        )}

        {/* Vídeo horizontal: bloque a todo el ancho, con póster y controles */}
        {landscapeVideo && (
          <figure className="mt-7 border border-rule bg-panel p-2">
            <video
              src={project.video}
              poster={project.videoPoster}
              className="block aspect-video w-full bg-ink"
              controls
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className="pb-1 pt-2.5 text-center font-mono text-[9px] uppercase tracking-[0.1em] text-ink-soft">
              {project.title} en funcionamiento
            </figcaption>
          </figure>
        )}

        {project.turningPoint && (
          <div className="mt-7 grid items-center gap-4 border border-rule bg-panel px-6 py-5 sm:grid-cols-[1fr_auto_1fr]">
            <div>
              <span className="mb-1.5 block font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">
                {project.turningPoint.beforeLabel}
              </span>
              <p className="text-[15px] font-semibold leading-snug">{project.turningPoint.before}</p>
            </div>
            <div aria-hidden className="text-xl leading-none text-signal-lamp max-sm:rotate-90">
              →
            </div>
            <div>
              <span className="mb-1.5 block font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">
                {project.turningPoint.afterLabel}
              </span>
              <p className="text-[15px] font-semibold leading-snug">{project.turningPoint.after}</p>
            </div>
          </div>
        )}

        {project.quote && (
          <blockquote className="mt-7 border-l-2 border-signal-lamp pl-5">
            <p className="font-prose text-[19px] italic leading-[1.5] text-ink">“{project.quote.text}”</p>
            <cite className="mt-2 block font-mono text-[10px] uppercase not-italic tracking-[0.11em] text-ink-soft">
              {project.quote.source}
            </cite>
          </blockquote>
        )}

        {project.links && (
          <div className="mt-6 flex flex-wrap gap-5">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-signal-lamp pb-0.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Proyectos() {
  const [playing, setPlaying] = useState<{ title: string; video: string } | null>(null);
  const [active, setActive] = useState(featured[0].slug);

  // Marca en el índice el proyecto que se está leyendo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (first) setActive(first.target.id);
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );

    featured.forEach((project) => {
      const node = document.getElementById(project.slug);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-ground">
      {/* Cabecera: compacta, y la columna derecha lleva información en vez de aire */}
      <div className="border-b border-rule bg-panel">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 sm:px-7 py-8 md:flex-row md:items-end md:justify-between md:gap-14">
          <div>
            <p className="mb-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Frontend · Web y móvil
            </p>
            <h1 className="text-[clamp(30px,4vw,42px)] leading-[1]">Trabajo</h1>
          </div>

          <div className="md:max-w-[46ch] md:text-right">
            <p className="font-prose text-[16px] leading-relaxed text-ink-mid">
              Interfaces que la gente usa para abrir su portal, configurar las pantallas de un ascensor o pedir cita
              con su nutricionista.
            </p>
            <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.11em] text-ink-soft md:justify-end">
              <div className="flex gap-1.5">
                <dt className="sr-only">En producción</dt>
                <dd className="text-ink">{featured.length}</dd>
                <dd>en producción</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="sr-only">Trabajos anteriores</dt>
                <dd className="text-ink">{others.length}</dd>
                <dd>anteriores</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="sr-only">Periodo</dt>
                <dd>2021 — 2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Destacados */}
      <section className="border-b border-rule pb-16 pt-12">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
          <h2 className="mb-6 font-mono text-[13px] font-medium uppercase tracking-[0.18em] lg:hidden">
            Trabajo destacado
          </h2>

          <div className="grid min-w-0 gap-10 lg:grid-cols-[170px_1fr] lg:gap-14">
            <ProjectIndex active={active} />
            <div className="min-w-0">
              {featured.map((project) => (
                <Record key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Otros trabajos: hoja de contactos. Casi todo está retirado,
          así que el vídeo es la única prueba que queda del diseño */}
      <section className="py-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-5">
            <h2 className="font-mono text-[13px] font-medium uppercase tracking-[0.18em]">Otros trabajos</h2>
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink-soft">Por empresa · 2021 — 2024</span>
          </div>
          <p className="mb-9 max-w-[62ch] font-prose text-[16px] leading-relaxed text-ink-mid">
            Casi todo esto ya no está en pie: los dominios se dieron de baja y los juegos se retiraron de sus
            plataformas. Lo grabé mientras funcionaba, así que el vídeo es lo único que queda. Pasa por encima para
            verlo en marcha.
          </p>

          <div className="grid gap-x-6 gap-y-9 border-t border-rule pt-9 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <WorkTile
                key={`${item.company}-${item.title}`}
                item={item}
                onOpen={(target: OtherProject) =>
                  target.video && setPlaying({ title: target.title, video: target.video })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {playing && (
        <MediaModal title={playing.title} videoSrc={playing.video} onClose={() => setPlaying(null)} />
      )}
    </main>
  );
}
