import Image from 'next/image';
import type { Juego } from '../../lib/juegos';

/**
 * Carátula de un juego. Si el juego no tiene `portada`, dibuja una
 * carátula provisional con sus `colores` y su título.
 */
export default function Caratula({
  juego,
  className = '',
  sizes = '(max-width: 640px) 50vw, 25vw',
}: {
  juego: Juego;
  className?: string;
  sizes?: string;
}) {
  if (juego.portada) {
    return (
      <Image
        src={juego.portada}
        alt={juego.titulo}
        fill
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  const [desde = '#af6c3e', hasta = '#9ec5d3'] = juego.colores;

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center p-6 text-center ${className}`}
      style={{ background: `linear-gradient(145deg, ${desde}, ${hasta})` }}
    >
      <span className="font-heading text-3xl font-semibold leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
        {juego.titulo}
      </span>
    </div>
  );
}
