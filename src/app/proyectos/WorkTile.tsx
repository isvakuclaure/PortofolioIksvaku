'use client';
import { useRef } from 'react';
import Image from 'next/image';
import type { OtherProject } from './projects';

interface WorkTileProps {
  item: OtherProject;
  onOpen: (item: OtherProject) => void;
}

/** Ficha de la hoja de contactos: el vídeo se previsualiza al pasar por encima */
export default function WorkTile({ item, onOpen }: WorkTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const preview = () => {
    // Respeta a quien ha pedido menos movimiento en el sistema
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    videoRef.current?.play().catch(() => {});
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <figure className="flex flex-col">
      {item.video ? (
        <button
          onClick={() => onOpen(item)}
          onMouseEnter={preview}
          onMouseLeave={stopPreview}
          onFocus={preview}
          onBlur={stopPreview}
          className="group block cursor-pointer border border-rule bg-panel p-2 text-left transition-colors hover:border-ink"
          aria-label={`Ver ${item.title} a tamaño completo`}
        >
          <span className="relative block aspect-video w-full overflow-hidden bg-ink">
            <video
              ref={videoRef}
              src={item.video}
              poster={item.poster}
              className="h-full w-full object-contain"
              muted
              loop
              playsInline
              preload="none"
            />
            <span className="pointer-events-none absolute bottom-1.5 right-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/70 opacity-100 transition-opacity group-hover:opacity-0">
              Ampliar
            </span>
          </span>
        </button>
      ) : (
        <div className="border border-rule bg-panel p-2">
          <div className="flex aspect-video w-full items-center justify-center bg-panel-sunk">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">
              Sin material público
            </span>
          </div>
        </div>
      )}

      <figcaption className="mt-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">{item.company}</p>
        <p className="mt-0.5 text-[15px] font-semibold leading-snug">{item.title}</p>
        <p className="mt-1 font-mono text-[10.5px] text-ink-mid">{item.stack}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="font-mono text-[10.5px] text-ink-soft">{item.years}</span>
          {item.retired && (
            <span className="inline-flex items-center gap-2 font-mono text-[9.5px] font-medium uppercase tracking-[0.12em] text-ink-soft">
              <span aria-hidden className="h-[6px] w-[6px] shrink-0 rounded-full bg-ink-soft opacity-60" />
              Retirado
            </span>
          )}
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-rule pb-0.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mid transition-colors hover:border-signal-lamp hover:text-ink"
            >
              {item.hrefLabel ?? 'Abrir'}
            </a>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
