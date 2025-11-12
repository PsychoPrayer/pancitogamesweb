'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageSwitcher';

type Feature = {
  emoji: string;
  title: string;
  description: string;
};

type HeroCopy = {
  title: string;
  tagline: string;
  subtitle: string;
  status: string;
  platforms: string;
  cta: string;
};

type SectionCopy = {
  heading: string;
  paragraphs: string[];
};

const collectibles = {
  en: [
    { emoji: '🏔️', name: 'Salto Ángel', description: "The world's highest waterfall" },
    { emoji: '🫓', name: 'Arepa', description: 'Heart of Venezuelan cuisine' },
    { emoji: '⚡', name: 'Catatumbo Lightning', description: 'Unique natural phenomenon' },
    { emoji: '🦸', name: 'Simón Bolívar', description: 'The Liberator' },
    { emoji: '🌳', name: 'Araguaney', description: 'National tree' },
    { emoji: '🎭', name: 'Diablos de Yare', description: 'UNESCO Cultural Heritage' },
  ],
  es: [
    { emoji: '🏔️', name: 'Salto Ángel', description: 'La cascada más alta del mundo' },
    { emoji: '🫓', name: 'Arepa', description: 'Corazón de la cocina venezolana' },
    { emoji: '⚡', name: 'Relámpago del Catatumbo', description: 'Fenómeno natural único' },
    { emoji: '🦸', name: 'Simón Bolívar', description: 'El Libertador' },
    { emoji: '🌳', name: 'Araguaney', description: 'Árbol nacional' },
    { emoji: '🎭', name: 'Diablos de Yare', description: 'Patrimonio Cultural UNESCO' },
  ],
} as const;

const copy: Record<
  'en' | 'es',
  {
    hero: HeroCopy;
    about: SectionCopy;
    features: Feature[];
    collectiblesTitle: string;
    collectiblesNote: string;
    download: {
      title: string;
      description: string[];
      notify: string;
      back: string;
    };
  }
> = {
  en: {
    hero: {
      title: 'Memory History',
      tagline: 'Discover the History of Venezuela',
      subtitle:
        'An illustrated memory adventure that celebrates Venezuelan heritage while preparing future chapters from across Latin America.',
      status: 'In Development',
      platforms: 'Platforms: Android | iOS (coming soon)',
      cta: 'Coming Soon to Beta',
    },
    about: {
      heading: 'About the Game',
      paragraphs: [
        'Memory History is more than a memory game—it is a living album that guides you through Venezuela’s stories, traditions, and landscapes.',
        'Every collectible unlocks historical context, encouraging players to learn while they play. Upcoming updates will expand the adventure with new regions and narrators from neighboring countries.',
      ],
    },
    features: [
      {
        emoji: '📜',
        title: '55 Historical Collectibles',
        description:
          'From Salto Ángel to the Hallaca, discover the symbols and legends that define Venezuelan identity.',
      },
      {
        emoji: '🎯',
        title: '80 Challenging Levels',
        description:
          'Each level offers unique board layouts and mechanics, keeping the journey fresh from start to finish.',
      },
      {
        emoji: '📚',
        title: 'Educational Test System',
        description:
          'Five exam stages that test everything you have learned and unlock special commemorative cards.',
      },
      {
        emoji: '🌍',
        title: 'Bilingual Experience',
        description:
          'Play in English or Spanish and share the stories with classrooms, families, and friends.',
      },
      {
        emoji: '⭐',
        title: 'Respectful Design',
        description:
          'No intrusive ads, mindful pacing, and an experience built for learners of all ages.',
      },
      {
        emoji: '🎨',
        title: 'Watercolor Art Direction',
        description:
          'Hand-crafted visuals inspired by antique albums and parchment textures bring every card to life.',
      },
    ],
    collectiblesTitle: 'Featured Collectibles',
    collectiblesNote: '...and 49 more waiting to be discovered!',
    download: {
      title: 'Download Memory History',
      description: [
        'The game is currently in development.',
        'Join our beta list and be the first to explore new chapters.',
      ],
      notify: 'Notify me',
      back: '← Back to Home',
    },
  },
  es: {
    hero: {
      title: 'Memory History',
      tagline: 'Descubre la historia de Venezuela',
      subtitle:
        'Una aventura de memoria ilustrada que celebra el patrimonio venezolano mientras prepara futuros capítulos de toda Latinoamérica.',
      status: 'En desarrollo',
      platforms: 'Plataformas: Android | iOS (próximamente)',
      cta: 'Próximamente en beta',
    },
    about: {
      heading: 'Sobre el juego',
      paragraphs: [
        'Memory History es más que un juego de memoria: es un álbum vivo que te guía por historias, tradiciones y paisajes venezolanos.',
        'Cada coleccionable desbloquea contexto histórico para aprender jugando. Las próximas actualizaciones ampliarán la aventura con nuevas regiones y narradores de países vecinos.',
      ],
    },
    features: [
      {
        emoji: '📜',
        title: '55 coleccionables históricos',
        description:
          'Del Salto Ángel a la Hallaca, descubre los símbolos y leyendas que definen la identidad venezolana.',
      },
      {
        emoji: '🎯',
        title: '80 niveles desafiantes',
        description:
          'Cada nivel ofrece tableros y mecánicas únicas, manteniendo la aventura fresca de principio a fin.',
      },
      {
        emoji: '📚',
        title: 'Sistema de pruebas educativas',
        description:
          'Cinco etapas de exámenes que repasan lo aprendido y desbloquean tarjetas conmemorativas especiales.',
      },
      {
        emoji: '🌍',
        title: 'Experiencia bilingüe',
        description:
          'Juega en inglés o español y comparte las historias con aulas, familias y amistades.',
      },
      {
        emoji: '⭐',
        title: 'Diseño respetuoso',
        description:
          'Sin anuncios intrusivos, ritmo consciente y una experiencia pensada para aprendices de todas las edades.',
      },
      {
        emoji: '🎨',
        title: 'Dirección de arte en acuarela',
        description:
          'Visuales artesanales inspirados en álbumes antiguos y texturas de pergamino dan vida a cada carta.',
      },
    ],
    collectiblesTitle: 'Coleccionables destacados',
    collectiblesNote: '...y otros 49 te esperan por descubrir.',
    download: {
      title: 'Descarga Memory History',
      description: [
        'El juego se encuentra en desarrollo.',
        'Únete a nuestra lista beta y sé el primero en explorar nuevos capítulos.',
      ],
      notify: 'Avísame',
      back: '← Volver al inicio',
    },
  },
};

export default function MemoryHistoryContent() {
  const language = useLanguage();
  const text = copy[language];
  const localizedCollectibles = collectibles[language];

  return (
    <div className="bg-[var(--memory-cream)]">
      <section className="relative bg-gradient-to-br from-[var(--memory-copper)] via-[var(--memory-bronze)] to-[var(--memory-gold)] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <Image
                src="/MemoryHistoryLogoSinFondo.png"
                alt="Memory History Logo"
                width={200}
                height={200}
                className="drop-shadow-2xl"
              />
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-6xl">
              {text.hero.title}
            </h1>
            <p className="font-heading text-2xl italic text-[var(--memory-parchment)] md:text-3xl">
              {text.hero.tagline}
            </p>
            <p className="mx-auto text-xl text-white/90 md:max-w-3xl md:text-2xl">
              {text.hero.subtitle}
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center rounded-full bg-[var(--memory-gold)] px-4 py-1 text-sm font-semibold text-[var(--memory-brown)]">
                {text.hero.status}
              </span>
              <span className="text-sm text-white/80">{text.hero.platforms}</span>
            </div>
            <button className="rounded-lg bg-[var(--memory-gold)] px-8 py-3 text-lg font-bold text-[var(--memory-brown)] shadow-lg transition-colors hover:bg-[var(--memory-parchment)]">
              {text.hero.cta}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[var(--memory-brown)] md:text-4xl">
            {text.about.heading}
          </h2>
          {text.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-gray-700 md:text-left"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--memory-cream)] to-[var(--memory-parchment)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-[var(--memory-brown)] md:text-4xl">
            {language === 'en' ? 'Key Features' : 'Características clave'}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {text.features.map((feature, index) => {
              const borders = [
                'border-[var(--memory-copper)]',
                'border-[var(--memory-bronze)]',
                'border-[var(--memory-gold)]',
              ];
              const borderClass = borders[index % borders.length];
              return (
                <div
                  key={feature.title}
                  className={`rounded-lg border-2 bg-white p-6 shadow-lg ${borderClass}`}
                >
                  <div className="mb-4 text-4xl">{feature.emoji}</div>
                  <h3 className="font-heading text-xl font-bold text-[var(--memory-brown)]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-[var(--memory-brown)] md:text-4xl">
            {text.collectiblesTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedCollectibles.map((item) => (
              <div
                key={item.name}
                className="rounded-lg bg-gradient-to-br from-[var(--memory-copper)] to-[var(--memory-bronze)] p-6 text-white shadow-lg transition-transform hover:scale-105"
              >
                <div className="mb-3 text-5xl">{item.emoji}</div>
                <h3 className="font-heading text-xl font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-gray-600">
            {text.collectiblesNote}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--memory-copper)] to-[var(--memory-bronze)] py-20 text-white">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            {text.download.title}
          </h2>
          <div className="space-y-2 text-white/90">
            {text.download.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mx-auto max-w-md rounded-lg bg-white/10 p-8 backdrop-blur-sm">
            <p className="mb-4 text-lg">
              {language === 'en'
                ? 'Get notified when the beta is ready:'
                : 'Recibe un aviso cuando la beta esté lista:'}
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email' : 'Tu correo'}
                className="rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--memory-gold)]"
              />
              <button className="rounded-lg bg-[var(--memory-gold)] px-6 py-3 font-bold text-[var(--memory-brown)] transition-colors hover:bg-[var(--memory-parchment)]">
                {text.download.notify}
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="text-white/80 underline transition-colors hover:text-white"
            >
              {text.download.back}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

