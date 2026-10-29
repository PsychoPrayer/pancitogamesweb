'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLanguage } from './components/LanguageSwitcher';
import Caratula from './components/Caratula';
import KofiButton from './components/KofiButton';
import {
  juegos,
  t,
  nombresEstado,
  coloresEstado,
  avancesOrdenados,
  formatearFecha,
  type Estado,
} from '../lib/juegos';

const filtros: Array<Estado | 'todos'> = ['todos', 'publicado', 'en-desarrollo', 'prototipo'];

const content = {
  en: {
    hero: {
      eyebrow: 'Indie game studio',
      title: 'We make games we want to play',
      subtitle:
        'History adventures, tavern golf and whatever comes next. Pick a cover and play right in your browser.',
      explore: 'Play now',
      about: 'The studio',
    },
    games: {
      title: 'Game Collection',
      all: 'All',
      search: 'Search a game…',
      empty: 'No games match that search.',
      play: 'Play',
      details: 'View',
    },
    updates: {
      title: 'Latest updates',
    },
    cta: {
      title: 'Help us make the next game',
      description:
        'PancitoGames is a small independent studio. Every coffee on Ko-fi goes into art, music and more hours of development.',
      action: 'Contact us',
    },
  },
  es: {
    hero: {
      eyebrow: 'Estudio indie de videojuegos',
      title: 'Hacemos los juegos que queremos jugar',
      subtitle:
        'Aventuras por la historia, golf de taberna y lo que venga después. Elige una carátula y juega desde el navegador.',
      explore: 'Jugar ahora',
      about: 'El estudio',
    },
    games: {
      title: 'Colección de juegos',
      all: 'Todos',
      search: 'Buscar un juego…',
      empty: 'Ningún juego coincide con la búsqueda.',
      play: 'Jugar',
      details: 'Ver',
    },
    updates: {
      title: 'Últimos avances',
    },
    cta: {
      title: 'Ayúdanos a hacer el próximo juego',
      description:
        'PancitoGames es un estudio pequeño e independiente. Cada café en Ko-fi se convierte en arte, música y más horas de desarrollo.',
      action: 'Escríbenos',
    },
  },
} as const;

export default function HomePageClient() {
  const language = useLanguage();
  const text = content[language];
  const [filtro, setFiltro] = useState<Estado | 'todos'>('todos');
  const [busqueda, setBusqueda] = useState('');

  const visibles = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return juegos
      .filter((juego) => filtro === 'todos' || juego.estado === filtro)
      .filter(
        (juego) =>
          !q ||
          juego.titulo.toLowerCase().includes(q) ||
          juego.generos.some((g) => g.toLowerCase().includes(q)),
      )
      .sort((a, b) => Number(!!b.destacado) - Number(!!a.destacado));
  }, [filtro, busqueda]);

  const ultimosAvances = useMemo(
    () =>
      juegos
        .flatMap((juego) => avancesOrdenados(juego).map((avance) => ({ juego, avance })))
        .sort((a, b) => b.avance.fecha.localeCompare(a.avance.fecha))
        .slice(0, 4),
    [],
  );

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
              {text.hero.eyebrow}
            </p>
            <h1 className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] text-[var(--text-strong)] text-balance sm:text-5xl md:text-6xl">
              {text.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--text-muted)] lg:mx-0">
              {text.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#games"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 font-semibold text-[var(--on-accent)] shadow-[0_10px_30px_-10px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
              >
                ▶ {text.hero.explore}
              </a>
              <Link
                href="/about"
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-8 py-3.5 font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
              >
                {text.hero.about}
              </Link>
            </div>
          </div>

          {/* Carátulas en abanico */}
          <div className="relative mx-auto h-[340px] w-full max-w-md sm:h-[420px]">
            {juegos.slice(0, 3).map((juego, i) => {
              // El primer juego de la lista (el más nuevo) va al centro.
              const pos = [
                'z-10 -translate-x-1/2 -translate-y-2 scale-105',
                '-rotate-[12deg] -translate-x-[100%] translate-y-8',
                'rotate-[12deg] translate-x-0 translate-y-8',
              ][i];
              return (
                <Link
                  key={juego.id}
                  href={`/juegos/${juego.id}`}
                  aria-label={juego.titulo}
                  className={`absolute left-1/2 top-0 aspect-[3/4] w-44 overflow-hidden rounded-2xl border-2 border-[var(--border)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition duration-300 hover:z-20 hover:border-[var(--accent)] sm:w-56 ${pos} hover:-translate-y-6`}
                >
                  <Caratula juego={juego} sizes="224px" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galería de carátulas */}
      <section id="games" className="relative scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-heading text-3xl text-[var(--ink-deep)] md:text-4xl">
            {text.games.title}
          </h2>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {filtros.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFiltro(f)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                    filtro === f
                      ? 'border-[var(--accent-deep)] bg-[var(--accent)] text-[var(--on-accent)]'
                      : 'border-[var(--ink-soft)] bg-[var(--parchment-card)] text-[var(--ink)] hover:bg-[var(--parchment)]'
                  }`}
                >
                  {f === 'todos' ? text.games.all : nombresEstado[f][language]}
                </button>
              ))}
            </div>
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder={text.games.search}
              className="w-full rounded-full border border-[var(--ink-soft)] bg-[var(--parchment-card)] px-4 py-2 text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:border-[var(--accent-deep)] focus:outline-none sm:w-64"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {visibles.map((juego) => (
              <Link
                key={juego.id}
                href={`/juegos/${juego.id}`}
                className="group overflow-hidden rounded-2xl border border-[var(--ink-soft)] bg-[var(--parchment-card)] shadow-sm transition hover:-translate-y-1.5 hover:shadow-[0_25px_40px_-15px_rgba(34,23,18,0.45)] focus-visible:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-[var(--accent-deep)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Caratula juego={juego} className="transition duration-500 group-hover:scale-105" />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${coloresEstado[juego.estado]}`}
                  >
                    {nombresEstado[juego.estado][language]}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-[rgba(34,23,18,0.5)] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-6 py-3 font-semibold text-[var(--on-accent)] shadow-lg">
                      {juego.incrustar ? `▶ ${text.games.play}` : `${text.games.details} →`}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3 className="font-heading text-xl leading-tight text-[var(--ink-deep)]">
                    {juego.titulo}
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)]">{t(juego.resumen, language)}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {juego.plataformas.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-[var(--ink-soft)] px-2 py-0.5 text-[11px] text-[var(--ink-muted)]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            {visibles.length === 0 && (
              <p className="col-span-full py-12 text-center text-[var(--ink-muted)]">
                {text.games.empty}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Últimos avances */}
      {ultimosAvances.length > 0 && (
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-heading text-3xl text-[var(--ink-deep)] md:text-4xl">
              {text.updates.title}
            </h2>
            <ul className="space-y-4">
              {ultimosAvances.map(({ juego, avance }) => (
                <li key={`${juego.id}-${avance.fecha}-${t(avance.titulo, 'es')}`}>
                  <Link
                    href={`/juegos/${juego.id}#avances`}
                    className="block rounded-2xl border border-[var(--ink-soft)] bg-[var(--parchment)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="text-xs uppercase tracking-wider text-[var(--ink-muted)]">
                      {juego.titulo} · {formatearFecha(avance.fecha, language)}
                    </p>
                    <h3 className="mt-1 font-heading text-xl text-[var(--ink-deep)]">
                      {t(avance.titulo, language)}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">{t(avance.texto, language)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Apoyo en Ko-fi */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface)] p-10 text-center shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]">
          <div className="text-5xl">☕</div>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase text-[var(--text-strong)] md:text-4xl">
            {text.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-muted)]">{text.cta.description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <KofiButton />
            <Link
              href="/contact"
              className="rounded-full border border-[var(--border)] px-7 py-3.5 font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
            >
              {text.cta.action}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
