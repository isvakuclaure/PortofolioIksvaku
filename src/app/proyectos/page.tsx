'use client';
import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import ProjectModal, { ProjectData } from './ProjectModal';

const projectsData: ProjectData[] = [
  {
    title: 'Liftplay',
    videoSrc: '/PortofolioIksvaku/lifplay.mp4',
    thumbnailSrc: '/PortofolioIksvaku/reactprojects.jpg',
    description: 'Aplicación moderna para la gestión de ascensores. Mantenimiento y control con interfaz intuitiva y tecnología de vanguardia. Conexiones a APIs y un sistema gRPC Streaming.',
    year: '2024',
    category: 'NextJS',
    tags: ['NextJS', 'Flowbite', 'gRPC', 'DriverJS'],
    accentColor: '#22c55e',
  },
  {
    title: 'Jona Nutrición',
    videoSrc: '/PortofolioIksvaku/jonanutricion.mp4',
    thumbnailSrc: '/PortofolioIksvaku/reactprojects.jpg',
    description: 'Plataforma de consultas nutricionales online. Acceso al portal personal para gestionar citas sin contraseñas mediante enlace mágico. Backend en Supabase con citas en tiempo real.',
    year: '2024',
    category: 'NextJS',
    tags: ['NextJS', 'Supabase', 'Tailwind CSS', 'Magic Link'],
    accentColor: '#22c55e',
    liveUrl: 'https://jonanutricion.com',
  },
  {
    title: 'Sandscripter',
    videoSrc: '/PortofolioIksvaku/sandscripter.mp4',
    thumbnailSrc: '/PortofolioIksvaku/reactprojects.jpg',
    description: 'Editor de código colaborativo en tiempo real. Sistema de versionado e integración con APIs de IA para asistencia en programación.',
    year: '2024',
    category: 'NextJS',
    tags: ['NextJS', 'AI', 'API', 'Open Source'],
    accentColor: '#22c55e',
    githubUrl: 'https://github.com/dawalberto/sandscripters-ai',
  },
  {
    title: 'VT-TRAINING',
    videoSrc: '/PortofolioIksvaku/vttraining.mp4',
    thumbnailSrc: '/PortofolioIksvaku/wordpress.jpg',
    description: 'Web corporativa para empresa de formación en el sector del transporte. Diseño moderno y responsive con CMS personalizado.',
    year: '2023',
    category: 'WordPress',
    tags: ['WordPress', 'Diseño', 'SEO', 'Responsive'],
    accentColor: '#3b82f6',
    liveUrl: 'https://vt-training.com/',
  },
  {
    title: 'Marbac',
    videoSrc: '/PortofolioIksvaku/marbac.mp4',
    thumbnailSrc: '/PortofolioIksvaku/wordpress.jpg',
    description: 'Sitio web para empresa de mármoles y acabados de construcción. Catálogo de productos, galería de proyectos y contacto optimizado.',
    year: '2023',
    category: 'WordPress',
    tags: ['WordPress', 'Diseño', 'SEO', 'Responsive'],
    accentColor: '#3b82f6',
    liveUrl: 'https://marbac.es/',
  },
  {
    title: 'Blast Heroes',
    videoSrc: '/PortofolioIksvaku/blastheroes.mp4',
    thumbnailSrc: '/PortofolioIksvaku/playcanvas.jpg',
    description: 'Juego web 3D en PlayCanvas. Combate dinámico con estrategia en tiempo real, optimizado para navegadores con WebGL.',
    year: '2023',
    category: 'PlayCanvas',
    tags: ['PlayCanvas', '3D', 'WebGL', 'Game Dev'],
    accentColor: '#f97316',
  },
  {
    title: 'My Life',
    videoSrc: '/PortofolioIksvaku/projectLife.mp4',
    thumbnailSrc: '/PortofolioIksvaku/playcanvas.jpg',
    description: 'Simulador de vida para Snapchat. Las decisiones del usuario afectan el desarrollo del personaje a lo largo del juego.',
    year: '2023',
    category: 'PlayCanvas',
    tags: ['PlayCanvas', 'Snapchat', 'Node.js', 'IDLE Game'],
    accentColor: '#f97316',
  },
  {
    title: 'Interview Dualist',
    videoSrc: '/PortofolioIksvaku/interviewDualist.mp4',
    thumbnailSrc: '',
    description: 'Juego 2D de Game Jam. El jugador responde preguntas de entrevista mientras controla un personaje en un entorno de plataformas.',
    year: '2023',
    category: 'Unity',
    tags: ['Unity', 'C#', 'Game Jam', '2D'],
    accentColor: '#a855f7',
    itchUrl: 'https://iksvaku.itch.io/interview-dualist',
  },
];

const categories = [
  { name: 'NextJS',     color: '#22c55e' },
  { name: 'WordPress',  color: '#3b82f6' },
  { name: 'PlayCanvas', color: '#f97316' },
  { name: 'Unity',      color: '#a855f7' },
];

export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const byCategory = (cat: string) => projectsData.filter(p => p.category === cat);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Mis proyectos</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {categories.map(cat => {
            const projects = byCategory(cat.name);
            if (!projects.length) return null;

            return (
              <section key={cat.name}>

                {/* Category label */}
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                  <h2 className="text-xl font-bold text-slate-800">{cat.name}</h2>
                  <span className="text-slate-300 text-sm">{projects.length} proyecto{projects.length > 1 ? 's' : ''}</span>
                </div>

                {/* Cards grid */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  style={{ gap: '4rem 3rem', paddingTop: '1rem', paddingBottom: '3rem' }}
                >
                  {projects.map(project => (
                    <div key={project.title} className="flex flex-col items-start gap-3">
                      <ProjectCard
                        videoSrc={project.videoSrc}
                        posterSrc={project.thumbnailSrc || undefined}
                        title={project.title}
                        accentColor={project.accentColor}
                        onClick={() => { setSelectedProject(project); setIsModalOpen(true); }}
                      />
                      {/* Tags strip below card */}
                      <div className="flex flex-wrap gap-1 pl-1">
                        {project.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 rounded text-slate-400 bg-slate-100 border border-slate-200"
                            style={{ fontSize: 10 }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100" />
              </section>
            );
          })}

        </div>
      </div>

      {/* CTA */}
      <div className="bg-white border-t border-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/aficiones" className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
              Ver mis aficiones
            </Link>
            <Link href="/contacto" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
              Contactar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setSelectedProject(null); }}
        projectData={selectedProject}
      />
    </main>
  );
}
