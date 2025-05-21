'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
}

// Componente para la galería de imágenes
const ImageGallery = ({ images }: { images: ImageItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-40 md:h-56 lg:h-64 mb-6 rounded-lg overflow-hidden max-w-3xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, 90vw"
        />
      </div>
      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrevious} 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx: number) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Ver imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Aficiones() {
  // Datos para las galerías
  const jamsImages: ImageItem[] = [
    { src: "/jam0.jpg", alt: "Jam 1" },
    { src: "/jam1.jpg", alt: "Jam 2" },
    { src: "/jam2.jpg", alt: "Jam 3" }
  ];

  const videojuegosImages: ImageItem[] = [
    { src: "/Inscryption.jpg", alt: "Inscryption portada" },
    { src: "/Inscryption1.jpg", alt: "Inscryption gameplay" },
    { src: "/xcom2.jpg", alt: "XCOM portada" },
    { src: "/xcom3.jpg", alt: "XCOM gameplay" },
    { src: "/baldurs.jpg", alt: "Baldur's Gate 3 portada" },
    { src: "/baldurs1.jpg", alt: "Baldur's Gate 3 gameplay" }
  ];

  const crossfitImages: ImageItem[] = [
    { src: "/crossfit.jpg", alt: "Crossfit uno" },
    { src: "/crossfit1.jpg", alt: "Crossfit dos" },
    { src: "/crossfit2.jpg", alt: "Crossfit tres" },
    { src: "/crossfit4.jpg", alt: "Crossfit cuatro" }
  ];

  const ajedrezImages: ImageItem[] = [
    { src: "/trofeosajedrez.jpg", alt: "Trofeo de ajedrez" }
  ];

  return (
    <main className="min-h-screen">
      {/* Encabezado de la página */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="relative inline-block">
                Mis Aficiones
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Porque se puede descubrir mucho de una persona a través de sus aficiones.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sección: JAMS */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                <path d="M7.41 15.41L10 12.83l2.59 2.58L14 14l-4-4-4 4 1.41 1.41z" transform="rotate(180 10 12)"/>
                <path d="M16 14h-6v2h6v-2z"/>
              </svg>
              JAMS
            </h2>
            
            <ImageGallery images={jamsImages} />
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
              <p className="text-slate-600 mb-4">
                Uno de mis pasatiempos favoritos es participar en jams, ya sean Game jams o Jams de programación. Para las personas que no saben en que consiste una jam, es un concurso donde se da un tema al azar y en un plazo de 48 horas se debe plantear un proyecto que encaje con el tema elegido.
              </p>
              <p className="text-slate-600">
                Me encanta la emoción de desarrollar ideas creativas en plazos cortos, explorar nuevas tecnologías, y colaborar con otros entusiastas. Es una gran oportunidad para mejorar mis habilidades y compartir con una comunidad apasionada por la creación y el desarrollo.
              </p>
            </div>
          </div>
          
          {/* Sección: Videojuegos */}
          <div className="mb-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.58 16.09l-1.09-7.66A3.996 3.996 0 0 0 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
              Videojuegos
            </h2>
            
            <ImageGallery images={videojuegosImages} />
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
              <p className="text-slate-600 mb-4">
                Los videojuegos son una de mis mayores pasiones, y disfruto explorando una amplia variedad de géneros. Me fascinan especialmente los juegos indie, que destacan por su innovación y originalidad al tomar riesgos en sus mecánicas y narrativa.
              </p>
              <p className="text-slate-600 mb-4">
                Un claro ejemplo es Inscryption, uno de mis juegos favoritos, que desafía al jugador a reaprender sus sistemas a lo largo del gameplay, manteniendo una experiencia dinámica y sorprendente. También disfruto de los juegos que combinan estrategia y gestión, como XCOM y Baldur&apos;s Gate 3.
              </p>
              <p className="text-slate-600">
                Estos títulos exigen tanto habilidades tácticas como planificación estratégica, lo cual encuentro enormemente gratificante. En definitiva, los videojuegos no solo son un pasatiempo para mí, sino una fuente de inspiración constante en creatividad e innovación.
              </p>
            </div>
          </div>
          
          {/* Sección: Crossfit */}
          <div className="mb-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
              </svg>
              Crossfit
            </h2>
            
            <ImageGallery images={crossfitImages} />
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
              <p className="text-slate-600 mb-4">
                El CrossFit es una de mis pasiones más grandes. Creo firmemente que mantener un estilo de vida saludable es fundamental para ser activo tanto física como mentalmente. Practico CrossFit diariamente, y esta disciplina no solo me ha permitido mejorar mi condición física, sino que también me ha enseñado la importancia de la disciplina, la constancia y el trabajo en equipo.
              </p>
              <p className="text-slate-600">
                He participado en algunas competiciones, donde he podido poner a prueba mis habilidades y superar mis límites. Para mí, el CrossFit es más que un ejercicio; es una comunidad que me motiva a dar lo mejor de mí cada día.
              </p>
            </div>
          </div>
          
          {/* Sección: Ajedrez */}
          <div className="pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-900 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 14.63 21 12.55 21 10V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
              </svg>
              Ajedrez
            </h2>
            
            <ImageGallery images={ajedrezImages} />
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
              <p className="text-slate-600 mb-4">
                Desde que era pequeño, el ajedrez ha sido una parte esencial de mi vida. Este juego no solo me fascina, sino que también me ayudó a enamorarme de la programación.
              </p>
              <p className="text-slate-600 mb-4">
                Recuerdo que en mi primera clase de programación, me frustré mucho al enfrentarme a un problema complicado, pero, al igual que en el ajedrez, logré resolverlo después de un tiempo.
              </p>
              <p className="text-slate-600">
                Para mí, cada desafío en la programación se asemeja a una partida de ajedrez; todos los problemas se pueden visualizar en un tablero cuadriculado y, al igual que en el juego, no puedes culpar a otros por tus errores. Cada movimiento cuenta y cada decisión es crucial, lo que me ha enseñado a ser perseverante y analítico en todas las áreas de mi vida.
              </p>
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
    </main>
  );
}
