'use client';
import { useEffect } from 'react';

export interface ProjectData {
  title: string;
  videoSrc: string;
  thumbnailSrc: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
  accentColor: string;
  githubUrl?: string;
  liveUrl?: string;
  itchUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: ProjectData | null;
}

export default function ProjectModal({ isOpen, onClose, projectData }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !projectData) return null;

  const hexToRgb = (hex: string) => {
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : { r: 34, g: 197, b: 94 };
  };
  const rgb = hexToRgb(projectData.accentColor);
  const tagBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`;
  const tagBorder = `rgba(${rgb.r},${rgb.g},${rgb.b},0.35)`;
  const tagText = `rgb(${Math.min(rgb.r + 90, 255)},${Math.min(rgb.g + 90, 255)},${Math.min(rgb.b + 90, 255)})`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video */}
        <div className="relative bg-black" style={{ height: '16rem' }}>
          <video
            key={projectData.videoSrc}
            src={projectData.videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
          {/* Accent line at bottom of video */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, transparent, ${projectData.accentColor}, transparent)` }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title + category */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <h2 className="text-xl font-bold text-white">{projectData.title}</h2>
            <span
              className="shrink-0 px-2.5 py-1 rounded-md text-xs font-semibold"
              style={{ background: tagBg, border: `1px solid ${tagBorder}`, color: tagText }}
            >
              {projectData.category} · {projectData.year}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-5">{projectData.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {projectData.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ background: tagBg, border: `1px solid ${tagBorder}`, color: tagText }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(projectData.githubUrl || projectData.liveUrl || projectData.itchUrl) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-700/50">
              {projectData.githubUrl && (
                <a
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {projectData.liveUrl && (
                <a
                  href={projectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors"
                  style={{ background: projectData.accentColor }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ver sitio web
                </a>
              )}
              {projectData.itchUrl && (
                <a
                  href={projectData.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors"
                  style={{ background: projectData.accentColor }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jugar en itch.io
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
