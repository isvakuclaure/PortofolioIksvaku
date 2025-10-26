'use client';
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  averageColor?: string;
  onClick?: () => void;
}

export default function Card({ imageSrc, imageAlt, title, averageColor = "#b0b6a9", onClick }: CardProps) {
  // Convertir el color hex a valores RGB para usar con Tailwind
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 176, g: 182, b: 169 };
  };

  // Generar rotación aleatoria basada en el título para consistencia
  const getRotation = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    const rotations = [-0.8, -0.6, -0.75, -0.3, 0.25, 0.6, 0.8, 0.9];
    return rotations[Math.abs(hash) % rotations.length];
  };

  const rgb = hexToRgb(averageColor);
  const borderColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const shadowColor = `rgb(${Math.floor(rgb.r * 0.75)}, ${Math.floor(rgb.g * 0.75)}, ${Math.floor(rgb.b * 0.75)})`;
  const rotation = getRotation(title);

  return (
    <article 
      className="
        relative
        border-3
        rounded-lg
        bg-opacity-80
        transition-all
        duration-150
        ease-in-out
        transform
        hover:rotate-0
        hover:-translate-y-3
        hover:opacity-100
        opacity-80
        will-change-transform
        group
        w-32 sm:w-36 md:w-40
        cursor-pointer
      "
      style={{
        borderColor: borderColor,
        backgroundColor: borderColor,
        backgroundImage: `radial-gradient(${shadowColor} 1px, transparent 0px)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '6px 6px',
        backgroundPosition: 'center',
        boxShadow: `1px 1px rgb(30 41 59), 3px 3px ${shadowColor}`,
        transform: `rotate(${rotation}deg)`
      } as React.CSSProperties}
      onClick={onClick}
    >
      <figure className="m-0">
        <div className="relative aspect-[3/4] overflow-hidden rounded">
          <Image 
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
          />
        </div>
        <figcaption className="
          font-bold
          text-center
          p-2
          text-xs
          leading-tight
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
        ">
          {title}
        </figcaption>
      </figure>
    </article>
  );
}