'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLanguage } from './components/LanguageSwitcher';
import Caratula from './components/Caratula';
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
      title: 'Our games, playable right here',
      subtitle:
        'Click any cover to play it in your browser and follow how each project evolves.',
      explore: 'See the games',
      about: 'Our Studio',
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
      title: 'Want to collaborate?',
      description: 'Write to us to share ideas, feedback or bring a story to life.',
      action: 'Contact',
    },
  },
  es: {
    hero: {
      title: 'Nuestros juegos, listos para jugar aquí',
      subtitle:
        'Haz clic en una carátula para jugarlo en el navegador y sigue los avances de cada proyecto.',
      explore: 'Ver los juegos',
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
      title: '¿Quieres colaborar?',
      description: 'Escríbenos para compartir ideas, comentarios o darle vida a una historia.',
      action: 'Contacto',
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
      <section className="relative px-4 pb-8 pt-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-sm uppercase tracking-[0.5em] text-[var(--ink-muted)]">
            PancitoGames
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-[var(--ink-deep)] text-balance sm:text-5xl md:text-6xl">
            {text.hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--ink-muted)]">
            {text.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#games"
              className="rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)] px-8 py-3 text-sm font-semibold text-[var(--ink-deep)] shadow-sm transition hover:bg-[var(--accent-deep)] hover:text-[var(--parchment-light)]"
            >
              {text.hero.explore}
            </a>
            <Link
              href="/about"
              className="rounded-full border border-[var(--ink-soft)] bg-[var(--parchment-card)] px-8 py-3 text-sm font-semibold text-[var(--ink)] shadow-sm transition hover:bg-[var(--parchment)]"
            >
              {text.hero.about}
            </Link>
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
                      ? 'border-[var(--accent-deep)] bg-[var(--accent-deep)] text-[var(--parchment-light)]'
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

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3">
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
                    <span className="flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-6 py-3 font-semibold text-[var(--ink-deep)] shadow-lg">
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

      {/* CTA */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-70 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-10 text-center shadow-[0_30px_50px_-20px_rgba(34,23,18,0.35)]">
          <h2 className="font-heading text-3xl text-[var(--ink-deep)] md:text-4xl">
            {text.cta.title}
          </h2>
          <p className="mt-4 text-base text-[var(--ink-muted)]">{text.cta.description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)] px-8 py-3 text-sm font-semibold text-[var(--ink-deep)] transition hover:bg-[var(--accent-deep)] hover:text-[var(--parchment-light)]"
          >
            {text.cta.action}
          </Link>
        </div>
      </section>
    </div>
  );
}
