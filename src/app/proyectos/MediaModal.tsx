'use client';
import { useEffect } from 'react';

interface MediaModalProps {
  title: string;
  videoSrc: string | null;
  onClose: () => void;
}

export default function MediaModal({ title, videoSrc, onClose }: MediaModalProps) {
  // Bloquea el scroll del fondo y permite cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!videoSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(20,23,27,0.82)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative w-full max-w-3xl bg-panel border border-rule"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-rule-soft px-4 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">{title}</p>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-7 w-7 items-center justify-center border border-rule text-ink-mid transition-colors hover:border-ink hover:text-ink"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <video
          key={videoSrc}
          src={videoSrc}
          className="block max-h-[72vh] w-full bg-ink object-contain"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
    </div>
  );
}
