'use client';
import { useState } from 'react';

interface ProjectCardProps {
  videoSrc: string;
  posterSrc?: string;
  title: string;
  accentColor: string;
  onClick: () => void;
}

const W      = 220;
const SIDE   = 10;
const TOP    = 10;
const BOTTOM = 22;

export default function ProjectCard({ videoSrc, posterSrc, title, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ width: W, cursor: 'pointer', flexShrink: 0 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        borderRadius: 10,
        paddingTop:    TOP,
        paddingLeft:   SIDE,
        paddingRight:  SIDE,
        paddingBottom: BOTTOM,
        background: '#1a1a1c',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.5)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform 220ms ease',
      }}>

        {/* Cámara */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
          <div style={{
            width: 4, height: 4, borderRadius: '50%',
            background: '#2e2e30',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
          }} />
        </div>

        {/* Pantalla */}
        <div style={{
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          aspectRatio: '16/9',
          background: '#000',
        }}>
          <video
            src={videoSrc}
            poster={posterSrc || undefined}
            autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: isHovered ? 'rgba(0,0,0,0.32)' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 180ms ease',
          }}>
            {isHovered && (
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.07em',
                textTransform: 'uppercase', color: '#fff',
                background: 'rgba(0,0,0,0.6)', borderRadius: 4,
                padding: '3px 8px', border: '1px solid rgba(255,255,255,0.18)',
              }}>Ver proyecto</span>
            )}
          </div>
        </div>

        {/* Chin — nombre del proyecto */}
        <div style={{
          marginTop: 7,
          textAlign: 'center',
        }}>
          <span style={{
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
