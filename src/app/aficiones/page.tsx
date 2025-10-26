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
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Datos para las imágenes (secciones que no son videojuegos)
  const jamsImages = [
    { src: "/PortofolioIksvaku/jam0.jpg", alt: "Game jam de programación - imagen 1" },
    { src: "/PortofolioIksvaku/jam1.jpg", alt: "Game jam de programación - imagen 2" },
    { src: "/PortofolioIksvaku/jam2.jpg", alt: "Game jam de programación - imagen 3" }
  ];

  // Datos detallados de los juegos
  const gamesData = {
    "Inscryption": {
      title: "Inscryption",
      description: "Un juego de cartas roguelike que desafía constantemente las expectativas del jugador. Inscryption combina elementos de horror psicológico con mecánicas de deck-building innovadoras. Lo que comienza como un simple juego de cartas evoluciona hacia algo mucho más profundo y perturbador, rompiendo la cuarta pared de maneras inesperadas.",
      rating: 10,
      genre: "Roguelike / Horror / Puzzle",
      releaseYear: "2021",
      developer: "Daniel Mullins Games",
      images: [
        "/PortofolioIksvaku/Inscryption.jpg",
        "/PortofolioIksvaku/Inscryption1.jpg"
      ]
    },
    "XCOM 2": {
      title: "XCOM 2",
      description: "Un juego de estrategia por turnos que pone a prueba tus habilidades tácticas en cada movimiento. Como comandante de la resistencia humana, debes liderar a tu equipo contra una invasión alienígena. Cada decisión cuenta, desde el posicionamiento en el campo de batalla hasta la gestión de recursos en tu base. La permadeath añade tensión real a cada misión.",
      rating: 7.5,
      genre: "Estrategia por turnos / Táctica",
      releaseYear: "2016",
      developer: "Firaxis Games",
      images: [
        "/PortofolioIksvaku/xcom2.jpg",
        "/PortofolioIksvaku/xcom3.jpg"
      ]
    },
    "Baldur's Gate 3": {
      title: "Baldur's Gate 3",
      description: "Un RPG épico basado en Dungeons & Dragons que redefine lo que significa la libertad de elección en los videojuegos. Cada conversación, cada decisión moral y cada combate está lleno de posibilidades. La narrativa se adapta a tus elecciones de manera orgánica, creando una experiencia única para cada jugador. Los personajes están profundamente desarrollados y las relaciones evolucionan de manera natural.",
      rating: 9.7,
      genre: "RPG / Aventura / Fantasía",
      releaseYear: "2023",
      developer: "Larian Studios",
      images: [
        "/PortofolioIksvaku/baldurs.jpg",
        "/PortofolioIksvaku/baldurs1.jpg"
      ]
    },
    "Ball X Pit": {
      title: "Ball X Pit",
      description: "Un increíble juego roguelike en el cual debemos aprender la mecánica de las bolas. Cuenta con muchos personajes únicos y gestión de una base con una interfaz sencilla y buena jugabilidad. La variedad de mecánicas y la progresión constante hacen que cada partida se sienta fresca y emocionante.",
      rating: 9.2,
      genre: "Roguelike / Estrategia / Gestión",
      releaseYear: "2025",
      developer: "Kenny Sun",
      images: [
        "/PortofolioIksvaku/ballxpit.png",
        "/PortofolioIksvaku/ballxpit2.jpg",
        "/PortofolioIksvaku/ballxpit3.png"
      ]
    },
    "Absolum": {
      title: "Absolum",
      description: "El mejor beat 'em up cooperativo local, algo que ya no se suele ver en los juegos actuales. Cuenta con una historia buena y personajes con una jugabilidad inmejorable para cada uno. Aunque flojea un poco en el tema roguelite, sigue siendo un juegazo que brilla especialmente en el modo cooperativo.",
      rating: 9.5,
      genre: "Beat 'em up / Cooperativo / Acción",
      releaseYear: "2025",
      developer: "Dotemu",
      images: [
        "/PortofolioIksvaku/absolum.jpg",
        "/PortofolioIksvaku/absolum2.png",
        "/PortofolioIksvaku/absolum3.png"
      ]
    }
  };

  const videojuegosCards = [
    { src: "/PortofolioIksvaku/Inscryption.jpg", alt: "Inscryption portada", title: "Inscryption", color: "#b47460", gameKey: "Inscryption" },
    { src: "/PortofolioIksvaku/xcom2.jpg", alt: "XCOM portada", title: "XCOM 2", color: "#46666f", gameKey: "XCOM 2" },
    { src: "/PortofolioIksvaku/baldurs.jpg", alt: "Baldur's Gate 3 portada", title: "Baldur's Gate 3", color: "#8d516e", gameKey: "Baldur's Gate 3" },
    { src: "/PortofolioIksvaku/ballxpit.png", alt: "Ball X Pit portada", title: "Ball X Pit", color: "#ff6b35", gameKey: "Ball X Pit" },
    { src: "/PortofolioIksvaku/absolum.jpg", alt: "Absolum portada", title: "Absolum", color: "#4a90e2", gameKey: "Absolum" }
  ];

  const crossfitImages = [
    { src: "/PortofolioIksvaku/crossfit.jpg", alt: "Entrenamiento de CrossFit - imagen 1" },
    { src: "/PortofolioIksvaku/crossfit1.jpg", alt: "Entrenamiento de CrossFit - imagen 2" },
    { src: "/PortofolioIksvaku/crossfit2.jpg", alt: "Entrenamiento de CrossFit - imagen 3" },
    { src: "/PortofolioIksvaku/crossfit4.jpg", alt: "Entrenamiento de CrossFit - imagen 4" }
  ];

  const ajedrezImages = [
    { src: "/PortofolioIksvaku/trofeosajedrez.jpg", alt: "Trofeo de ajedrez" }
  ];

  const handleCardClick = (gameKey: string) => {
    const gameData = gamesData[gameKey as keyof typeof gamesData];
    if (gameData) {
      setSelectedGame(gameData);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-800/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-slate-300 text-sm font-medium tracking-wide">
              SOBRE MI
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
              Mis Aficiones
            </h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Porque se puede descubrir mucho de una persona a través de sus aficiones.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="py-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute right-0 top-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px]"></div>
            <div className="absolute left-0 bottom-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-[150px]"></div>
          </div>
          
          {/* Sección: JAMS */}
          <div className="mb-12 relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-blue-500 hover:shadow-blue-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                  <path d="M7.41 15.41L10 12.83l2.59 2.58L14 14l-4-4-4 4 1.41 1.41z" transform="rotate(180 10 12)"/>
                  <path d="M16 14h-6v2h6v-2z"/>
                </svg>
                JAMS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Galería de imágenes */}
                <div className="order-2 md:order-1">
                  <ImageGallery images={jamsImages} />
                </div>
                
                {/* Descripción */}
                <div className="order-1 md:order-2">
                  <div className="bg-slate-700/50 backdrop-blur-sm p-5 rounded-lg border border-slate-600/30">
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Uno de mis pasatiempos favoritos es participar en jams, ya sean Game jams o Jams de programación. Para las personas que no saben en que consiste una jam, es un concurso donde se da un tema al azar y en un plazo de 48 horas se debe plantear un proyecto que encaje con el tema elegido.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Me encanta la emoción de desarrollar ideas creativas en plazos cortos, explorar nuevas tecnologías, y colaborar con otros entusiastas. Es una gran oportunidad para mejorar mis habilidades y compartir con una comunidad apasionada por la creación y el desarrollo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sección: Videojuegos */}
          <div className="mb-12 relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-green-500 hover:shadow-green-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 16.09l-1.09-7.66A3.996 3.996 0 0 0 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.12.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2-3c-.83 0-1.5-.67-1.5-1.5S16.67 5 17.5 5 19 5.67 19 7.5 18.33 8 17.5 8z"/>
                </svg>
                Videojuegos
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                {/* Galería de juegos */}
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-center">
                    {videojuegosCards.map((card, index) => (
                      <Card
                        key={index}
                        imageSrc={card.src}
                        imageAlt={card.alt}
                        title={card.title}
                        averageColor={card.color}
                        onClick={() => handleCardClick(card.gameKey)}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Descripción */}
                <div className="order-1 lg:order-2">
                  <div className="bg-slate-700/50 backdrop-blur-sm p-5 rounded-lg border border-slate-600/30">
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Los videojuegos son una de mis mayores pasiones, y disfruto explorando una amplia variedad de géneros. Me fascinan especialmente los juegos indie, que destacan por su innovación y originalidad al tomar riesgos en sus mecánicas y narrativa.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Un claro ejemplo es Inscryption, uno de mis juegos favoritos, que desafía al jugador a reaprender sus sistemas a lo largo del gameplay, manteniendo una experiencia dinámica y sorprendente. También disfruto de los juegos que combinan estrategia y gestión, como XCOM y Baldur&apos;s Gate 3.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Estos títulos exigen tanto habilidades tácticas como planificación estratégica, lo cual encuentro enormemente gratificante. En definitiva, los videojuegos no solo son un pasatiempo para mí, sino una fuente de inspiración constante en creatividad e innovación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sección: Crossfit */}
          <div className="mb-12 relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-red-500 hover:shadow-red-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                </svg>
                Crossfit
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Galería de imágenes */}
                <div className="order-2 md:order-1">
                  <ImageGallery images={crossfitImages} />
                </div>
                
                {/* Descripción */}
                <div className="order-1 md:order-2">
                  <div className="bg-slate-700/50 backdrop-blur-sm p-5 rounded-lg border border-slate-600/30">
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        El CrossFit es una de mis pasiones más grandes. Creo firmemente que mantener un estilo de vida saludable es fundamental para ser activo tanto física como mentalmente. Practico CrossFit diariamente, y esta disciplina no solo me ha permitido mejorar mi condición física, sino que también me ha enseñado la importancia de la disciplina, la constancia y el trabajo en equipo.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        He participado en algunas competiciones, donde he podido poner a prueba mis habilidades y superar mis límites. Para mí, el CrossFit es más que un ejercicio; es una comunidad que me motiva a dar lo mejor de mí cada día.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección: Ajedrez */}
          <div className="mb-12 relative group">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-purple-500 hover:shadow-purple-500/10 transition-all duration-300 relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 14.63 21 12.55 21 10V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                </svg>
                Ajedrez
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Galería de imágenes */}
                <div className="order-2 md:order-1">
                  <ImageGallery images={ajedrezImages} />
                </div>
                
                {/* Descripción */}
                <div className="order-1 md:order-2">
                  <div className="bg-slate-700/50 backdrop-blur-sm p-5 rounded-lg border border-slate-600/30">
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Desde que era pequeño, el ajedrez ha sido una parte esencial de mi vida. Este juego no solo me fascina, sino que también me ayudó a enamorarme de la programación.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Recuerdo que en mi primera clase de programación, me frustré mucho al enfrentarme a un problema complicado, pero, al igual que en el ajedrez, logré resolverlo después de un tiempo.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Para mí, cada desafío en la programación se asemeja a una partida de ajedrez; todos los problemas se pueden visualizar en un tablero cuadriculado y, al igual que en el juego, no puedes culpar a otros por tus errores. Cada movimiento cuenta y cada decisión es crucial, lo que me ha enseñado a ser perseverante y analítico en todas las áreas de mi vida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de llamada a la acción */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            ¿Interesado en conocer más sobre mí?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Explora mis proyectos o contacta conmigo para hablar sobre posibles colaboraciones
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/proyectos"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Ver proyectos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/contacto"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              Contactar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal para detalles del juego */}
      <GameModal
        isOpen={isModalOpen}
        onClose={closeModal}
        gameData={selectedGame}
      />
    </main>
  );
}
