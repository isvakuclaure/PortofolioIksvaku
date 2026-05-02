'use client';
import { useState } from 'react';
import Link from "next/link";
import Card from "./Card";
import ImageGallery from "./ImageGallery";
import GameModal from "./GameModal";

interface GameData {
  title: string;
  description: string;
  rating: number;
  genre: string;
  releaseYear: string;
  developer: string;
  images: string[];
}

export default function Aficiones() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jamsImages = [
    { src: "/PortofolioIksvaku/jam0.jpg", alt: "Game jam 1" },
    { src: "/PortofolioIksvaku/jam1.jpg", alt: "Game jam 2" },
    { src: "/PortofolioIksvaku/jam2.jpg", alt: "Game jam 3" },
  ];
  const crossfitImages = [
    { src: "/PortofolioIksvaku/crossfit.jpg",  alt: "CrossFit 1" },
    { src: "/PortofolioIksvaku/crossfit1.jpg", alt: "CrossFit 2" },
    { src: "/PortofolioIksvaku/crossfit2.jpg", alt: "CrossFit 3" },
    { src: "/PortofolioIksvaku/crossfit4.jpg", alt: "CrossFit 4" },
  ];
  const ajedrezImages = [
    { src: "/PortofolioIksvaku/trofeosajedrez.jpg", alt: "Trofeo de ajedrez" },
  ];

  const gamesData: Record<string, GameData> = {
    "Inscryption":    { title: "Inscryption",    description: "Un juego de cartas roguelike que desafía constantemente las expectativas. Combina horror psicológico con deck-building innovador, rompiendo la cuarta pared de formas inesperadas.", rating: 10,  genre: "Roguelike / Horror", releaseYear: "2021", developer: "Daniel Mullins Games", images: ["/PortofolioIksvaku/Inscryption.jpg",  "/PortofolioIksvaku/Inscryption1.jpg"] },
    "XCOM 2":         { title: "XCOM 2",          description: "Estrategia por turnos que pone a prueba tus habilidades tácticas. La permadeath añade tensión real a cada misión.", rating: 7.5, genre: "Estrategia / Táctica",  releaseYear: "2016", developer: "Firaxis Games",        images: ["/PortofolioIksvaku/xcom2.jpg",        "/PortofolioIksvaku/xcom3.jpg"] },
    "Baldur's Gate 3":{ title: "Baldur's Gate 3", description: "RPG épico basado en D&D que redefine la libertad de elección. La narrativa se adapta a tus decisiones de manera orgánica.", rating: 9.7, genre: "RPG / Aventura",         releaseYear: "2023", developer: "Larian Studios",       images: ["/PortofolioIksvaku/baldurs.jpg",       "/PortofolioIksvaku/baldurs1.jpg"] },
    "Ball X Pit":     { title: "Ball X Pit",      description: "Roguelike con mecánicas de bolas únicas, gestión de base e interfaz sencilla. Cada partida se siente fresca.", rating: 9.2, genre: "Roguelike / Gestión",   releaseYear: "2025", developer: "Kenny Sun",            images: ["/PortofolioIksvaku/ballxpit.png",      "/PortofolioIksvaku/ballxpit2.jpg", "/PortofolioIksvaku/ballxpit3.png"] },
    "Absolum":        { title: "Absolum",          description: "El mejor beat 'em up cooperativo local. Personajes con jugabilidad inmejorable y una historia sólida.", rating: 9.5, genre: "Beat 'em up / Coop",    releaseYear: "2025", developer: "Dotemu",              images: ["/PortofolioIksvaku/absolum.jpg",       "/PortofolioIksvaku/absolum2.png", "/PortofolioIksvaku/absolum3.png"] },
  };

  const videojuegosCards = [
    { src: "/PortofolioIksvaku/Inscryption.jpg", alt: "Inscryption",   title: "Inscryption",    color: "#b47460", gameKey: "Inscryption" },
    { src: "/PortofolioIksvaku/xcom2.jpg",       alt: "XCOM 2",        title: "XCOM 2",         color: "#46666f", gameKey: "XCOM 2" },
    { src: "/PortofolioIksvaku/baldurs.jpg",     alt: "Baldur's Gate", title: "Baldur's Gate 3",color: "#8d516e", gameKey: "Baldur's Gate 3" },
    { src: "/PortofolioIksvaku/ballxpit.png",    alt: "Ball X Pit",    title: "Ball X Pit",     color: "#ff6b35", gameKey: "Ball X Pit" },
    { src: "/PortofolioIksvaku/absolum.jpg",     alt: "Absolum",       title: "Absolum",        color: "#4a90e2", gameKey: "Absolum" },
  ];

  const tabs = [
    {
      label: 'JAMS',
      accent: '#3b82f6',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
        </svg>
      ),
      gallery: <ImageGallery images={jamsImages} />,
      text: "Participar en jams es uno de mis pasatiempos favoritos — Game Jams o Jams de programación. Se da un tema al azar y en 48 horas hay que presentar un proyecto. Me encanta la creatividad bajo presión, explorar nuevas tecnologías y colaborar con la comunidad.",
    },
    {
      label: 'Videojuegos',
      accent: '#22c55e',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.58 16.09l-1.09-7.66A3.996 3.996 0 0 0 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.12.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      gallery: (
        <div className="flex flex-wrap gap-5 py-3 px-2">
          {videojuegosCards.map((card, i) => (
            <Card key={i} imageSrc={card.src} imageAlt={card.alt} title={card.title} averageColor={card.color}
              onClick={() => { setSelectedGame(gamesData[card.gameKey]); setIsModalOpen(true); }} />
          ))}
        </div>
      ),
      text: "Me fascinan los juegos indie por su innovación — Inscryption es mi favorito. También disfruto de los que combinan estrategia y gestión como XCOM y Baldur's Gate 3. Son una fuente constante de inspiración en creatividad.",
    },
    {
      label: 'Crossfit',
      accent: '#ef4444',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
      ),
      gallery: <ImageGallery images={crossfitImages} />,
      text: "El CrossFit es una de mis mayores pasiones. Lo practico a diario y me ha enseñado disciplina, constancia y trabajo en equipo. He participado en competiciones y para mí es mucho más que ejercicio — es una comunidad.",
    },
    {
      label: 'Ajedrez',
      accent: '#a855f7',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 14.63 21 12.55 21 10V7c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      gallery: <ImageGallery images={ajedrezImages} />,
      text: "Desde pequeño el ajedrez ha sido parte esencial de mi vida, y me ayudó a enamorarme de la programación. Cada problema de código se asemeja a una partida — todo se puede visualizar en un tablero y cada decisión es crucial.",
    },
  ];

  const active = tabs[activeTab];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Mis aficiones</h1>
          <p className="text-slate-400 text-sm mt-1">Porque se puede descubrir mucho de una persona a través de sus aficiones.</p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-white border-b border-gray-100 sticky top-14 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className="flex items-center gap-2 px-4 py-3.5 text-sm font-medium transition-colors relative"
                style={{ color: activeTab === i ? '#2563eb' : '#94a3b8' }}
              >
                <span style={{ color: activeTab === i ? '#2563eb' : '#cbd5e1' }}>{tab.icon}</span>
                {tab.label}
                {activeTab === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido del tab activo */}
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden border-l-[3px] border-l-blue-500">
            <div className="p-6 grid md:grid-cols-2 gap-8 items-start">
              {/* Galería */}
              <div>{active.gallery}</div>
              {/* Texto */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-50 text-blue-600">
                    {active.icon}
                  </span>
                  <h2 className="text-lg font-bold text-slate-800">{active.label}</h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{active.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/proyectos" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
              Ver proyectos
            </Link>
            <Link href="/contacto" className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
              Contactar
            </Link>
          </div>
        </div>
      </div>

      <GameModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setSelectedGame(null); }}
        gameData={selectedGame}
      />
    </main>
  );
}
