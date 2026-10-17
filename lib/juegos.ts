import datos from '../data/juegos.json';
import type { Language } from '../app/components/LanguageProvider';

/** Un texto puede ser igual en ambos idiomas ("Hola") o traducido ({ es, en }). */
export type Texto = string | { es: string; en?: string };

export type Estado = 'publicado' | 'en-desarrollo' | 'prototipo';

export type Avance = {
  fecha: string;
  titulo: Texto;
  texto: Texto;
  imagen?: string;
};

export type Juego = {
  id: string;
  titulo: string;
  resumen: Texto;
  descripcion: Texto;
  portada: string;
  colores: string[];
  estado: Estado;
  plataformas: string[];
  generos: string[];
  url: string;
  incrustar: boolean;
  controles?: Texto;
  destacado?: boolean;
  /** true para no mostrarlo en la web (sin borrar sus datos). */
  oculto?: boolean;
  /** Enlace opcional a una página con más información. */
  masInfo?: string;
  capturas: string[];
  avances: Avance[];
};

export const juegos = (datos.juegos as Juego[]).filter((juego) => !juego.oculto);

export function getJuego(id: string) {
  return juegos.find((juego) => juego.id === id);
}

export function t(texto: Texto | undefined, language: Language) {
  if (!texto) return '';
  if (typeof texto === 'string') return texto;
  return (language === 'en' && texto.en) || texto.es;
}

export const nombresEstado: Record<Estado, Record<Language, string>> = {
  publicado: { es: 'Publicado', en: 'Released' },
  'en-desarrollo': { es: 'En desarrollo', en: 'In development' },
  prototipo: { es: 'Prototipo', en: 'Prototype' },
};

export const coloresEstado: Record<Estado, string> = {
  publicado: 'bg-emerald-700',
  'en-desarrollo': 'bg-[var(--accent-deep)]',
  prototipo: 'bg-[var(--ink)]',
};

/** Avances ordenados del más reciente al más antiguo. */
export function avancesOrdenados(juego: Juego) {
  return [...juego.avances].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function formatearFecha(fecha: string, language: Language) {
  return new Date(`${fecha}T12:00:00`).toLocaleDateString(
    language === 'en' ? 'en-US' : 'es-ES',
    { day: 'numeric', month: 'long', year: 'numeric' },
  );
}
