'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../components/LanguageSwitcher';
import Caratula from '../../components/Caratula';
import {
  t,
  nombresEstado,
  coloresEstado,
  avancesOrdenados,
  formatearFecha,
  type Juego,
} from '../../../lib/juegos';

const content = {
  en: {
    back: '← All games',
    play: 'Play',
    clickToPlay: 'Click to play',
    newTab: 'Open in new tab',
    fullscreen: 'Fullscreen',
    moreInfo: 'More info',
    about: 'About the game',
    details: 'Details',
    status: 'Status',
    platforms: 'Platforms',
    genres: 'Genres',
    controls: 'Controls',
    screenshots: 'Screenshots',
    updates: 'Devlog',
    noUpdates: 'No updates yet.',
  },
  es: {
    back: '← Todos los juegos',
    play: 'Jugar',
    clickToPlay: 'Haz clic para jugar',
    newTab: 'Abrir en otra pestaña',
    fullscreen: 'Pantalla completa',
    moreInfo: 'Más información',
    about: 'Sobre el juego',
    details: 'Ficha',
    status: 'Estado',
    platforms: 'Plataformas',
    genres: 'Géneros',
    controls: 'Controles',
    screenshots: 'Capturas',
    updates: 'Avances',
    noUpdates: 'Todavía no hay avances.',
  },
} as const;

const botonBase =
  'inline-flex items-center gap-2 rounded-full border border-[var(--ink-soft)] px-5 py-2.5 text-sm font-semibold transition';
const botonSecundario = `${botonBase} bg-[var(--parchment-card)] text-[var(--ink)] hover:bg-[var(--parchment)]`;
const botonPrimario = `${botonBase} bg-[var(--accent-soft)] text-[var(--ink-deep)] hover:bg-[var(--accent-deep)] hover:text-[var(--parchment-light)]`;

export default function JuegoClient({ juego }: { juego: Juego }) {
  const language = useLanguage();
  const text = content[language];
  const [jugando, setJugando] = useState(false);
  const reproductor = useRef<HTMLDivElement>(null);
  const avances = avancesOrdenados(juego);

  // Desde la galería se llega con ?jugar=1 para que el juego arranque directamente.
  useEffect(() => {
    if (juego.incrustar && new URLSearchParams(window.location.search).get('jugar') === '1') {
      setJugando(true);
    }
  }, [juego.incrustar]);

  const pantallaCompleta = () => {
    setJugando(true);
    reproductor.current?.requestFullscreen?.();
  };

  const parrafos = t(juego.descripcion, language).split(/\n\s*\n/);

  return (
    <div className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#games"
          className="text-sm font-semibold text-[var(--ink-muted)] transition hover:text-[var(--ink-deep)]"
        >
          {text.back}
        </Link>

        <div className="mb-6 mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${coloresEstado[juego.estado]}`}
            >
              {nombresEstado[juego.estado][language]}
            </span>
            <h1 className="mt-3 font-heading text-4xl leading-tight text-[var(--ink-deep)] md:text-5xl">
              {juego.titulo}
            </h1>
            <p className="mt-1 text-lg text-[var(--ink-muted)]">{t(juego.resumen, language)}</p>
          </div>
          {juego.incrustar && (
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={pantallaCompleta} className={botonSecundario}>
                ⛶ {text.fullscreen}
              </button>
              <a href={juego.url} target="_blank" rel="noopener noreferrer" className={botonSecundario}>
                ↗ {text.newTab}
              </a>
            </div>
          )}
        </div>

        {/* Reproductor */}
        {juego.incrustar ? (
          <div
            ref={reproductor}
            className="relative aspect-video w-full overflow-hidden rounded-3xl border border-[var(--ink-soft)] bg-black shadow-[0_35px_60px_-15px_rgba(34,23,18,0.45)]"
          >
            {jugando ? (
              <iframe
                src={juego.url}
                title={juego.titulo}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setJugando(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label={text.play}
              >
                <Caratula juego={juego} sizes="100vw" className="brightness-[0.55]" />
                <span className="relative flex flex-col items-center gap-4">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent-soft)] text-4xl text-[var(--ink-deep)] shadow-[0_0_0_10px_rgba(218,176,139,0.35)] transition group-hover:scale-110">
                    ▶
                  </span>
                  <span className="font-heading text-2xl text-white drop-shadow">
                    {text.clickToPlay}
                  </span>
                </span>
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-[var(--ink-soft)] bg-[var(--parchment)] p-8 sm:flex-row">
            <div className="relative aspect-[3/4] w-48 shrink-0 overflow-hidden rounded-2xl border border-[var(--ink-soft)]">
              <Caratula juego={juego} sizes="192px" />
            </div>
            <Link href={juego.url} className={botonPrimario}>
              {text.moreInfo} →
            </Link>
          </div>
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="rounded-3xl border border-[var(--ink-soft)] bg-[var(--parchment)] p-6">
              <h2 className="mb-3 font-heading text-2xl text-[var(--ink-deep)]">{text.about}</h2>
              <div className="space-y-3 text-[var(--ink-muted)]">
                {parrafos.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {juego.capturas.length > 0 && (
              <section className="rounded-3xl border border-[var(--ink-soft)] bg-[var(--parchment)] p-6">
                <h2 className="mb-4 font-heading text-2xl text-[var(--ink-deep)]">
                  {text.screenshots}
                </h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {juego.capturas.map((src) => (
                    <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="relative block aspect-video overflow-hidden rounded-xl border border-[var(--ink-soft)]">
                      <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                    </a>
                  ))}
                </div>
              </section>
            )}

            <section
              id="avances"
              className="scroll-mt-24 rounded-3xl border border-[var(--ink-soft)] bg-[var(--parchment)] p-6"
            >
              <h2 className="mb-6 font-heading text-2xl text-[var(--ink-deep)]">{text.updates}</h2>
              {avances.length === 0 ? (
                <p className="text-[var(--ink-muted)]">{text.noUpdates}</p>
              ) : (
                <ol className="border-l-2 border-[var(--ink-soft)]">
                  {avances.map((avance, i) => (
                    <li key={i} className="relative pb-8 pl-6 last:pb-0">
                      <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[var(--accent-deep)] ring-4 ring-[var(--parchment)]" />
                      <time className="text-xs uppercase tracking-wider text-[var(--ink-muted)]">
                        {formatearFecha(avance.fecha, language)}
                      </time>
                      <h3 className="mt-1 font-heading text-xl text-[var(--ink-deep)]">
                        {t(avance.titulo, language)}
                      </h3>
                      <p className="mt-1 text-[var(--ink-muted)]">{t(avance.texto, language)}</p>
                      {avance.imagen && (
                        <div className="relative mt-3 aspect-video max-w-md overflow-hidden rounded-xl border border-[var(--ink-soft)]">
                          <Image src={avance.imagen} alt="" fill sizes="448px" className="object-cover" />
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          </div>

          <aside className="h-fit rounded-3xl border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-6">
            <h2 className="mb-4 font-heading text-2xl text-[var(--ink-deep)]">{text.details}</h2>
            <dl className="space-y-4 text-sm">
              <Dato titulo={text.status}>{nombresEstado[juego.estado][language]}</Dato>
              <Dato titulo={text.platforms}>{juego.plataformas.join(' · ')}</Dato>
              <Dato titulo={text.genres}>{juego.generos.join(' · ')}</Dato>
              {juego.controles && <Dato titulo={text.controls}>{t(juego.controles, language)}</Dato>}
            </dl>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Dato({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-[var(--ink-muted)]">{titulo}</dt>
      <dd className="mt-0.5 text-[var(--ink)]">{children}</dd>
    </div>
  );
}
