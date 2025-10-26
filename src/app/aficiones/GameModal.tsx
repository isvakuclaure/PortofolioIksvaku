'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";

interface GameData {
  title: string;
  description: string;
  rating: number;
  images: string[];
  genre: string;
  releaseYear: string;
  developer: string;
}

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameData: GameData | null;
}

export default function GameModal({ isOpen, onClose, gameData }: GameModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaurar scroll cuando el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !gameData) return null;



  return (
    <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white bg-opacity-90 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close button - more visible */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[85vh]">
          {/* Header with image */}
          <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
            {gameData.images.length > 0 && (
              <Image
                src={gameData.images[currentImageIndex]}
                alt={gameData.title}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{gameData.title}</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{gameData.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Game Info - more compact */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Género:</span>
                <p className="text-gray-600">{gameData.genre}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Año:</span>
                <p className="text-gray-600">{gameData.releaseYear}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Desarrollador:</span>
                <p className="text-gray-600">{gameData.developer}</p>
              </div>
            </div>

            {/* Description - more compact */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{gameData.description}</p>
            </div>

            {/* Image Gallery - compact thumbnails */}
            {gameData.images.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Galería</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
                  {gameData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${gameData.title} - miniatura ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}