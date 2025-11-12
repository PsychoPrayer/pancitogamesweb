'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { useLanguage } from '../components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'Memory History - Discover Venezuelan History | PancitoGames',
  description:
    'A memory game celebrating Venezuelan history and culture. 55 collectibles, 80 unique levels, and educational tests. Available on Android and iOS.',
};

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

export default function MemoryHistoryPage() {
  const language = useLanguage();
  const text = copy[language];
  const localizedCollectibles = collectibles[language];

  return (
    <div className="bg-[var(--memory-cream)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--memory-copper)] via-[var(--memory-bronze)] to-[var(--memory-gold)] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Image
                src="/MemoryHistoryLogoSinFondo.png"
                alt="Memory History Logo"
                width={200}
                height={200}
                className="drop-shadow-2xl"
              />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">
              {text.hero.title}
            </h1>
            <p className="font-heading text-2xl md:text-3xl text-[var(--memory-parchment)] italic">
              {text.hero.tagline}
            </p>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {text.hero.subtitle}
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center bg-[var(--memory-gold)] text-[var(--memory-brown)] px-4 py-1 rounded-full text-sm font-semibold">
                {text.hero.status}
              </span>
              <span className="text-white/80 text-sm">{text.hero.platforms}</span>
            </div>
            <button className="bg-[var(--memory-gold)] text-[var(--memory-brown)] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[var(--memory-parchment)] transition-colors shadow-lg">
              {text.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-[var(--memory-brown)]">
            {text.about.heading}
          </h2>
          {text.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--memory-cream)] to-[var(--memory-parchment)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--memory-brown)]">
            {language === 'en' ? 'Key Features' : 'Características clave'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className={`bg-white p-6 rounded-lg shadow-lg border-2 ${borderClass}`}
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="font-heading text-xl font-bold mb-3 text-[var(--memory-brown)]">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collectibles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--memory-brown)]">
            {text.collectiblesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localizedCollectibles.map((item) => (
              <div
                key={item.name}
                className="bg-gradient-to-br from-[var(--memory-copper)] to-[var(--memory-bronze)] p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-heading text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">{text.collectiblesNote}</p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--memory-copper)] to-[var(--memory-bronze)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{text.download.title}</h2>
          <div className="space-y-2 text-white/90">
            {text.download.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-md mx-auto">
            <p className="text-lg mb-4">{language === 'en' ? 'Get notified when the beta is ready:' : 'Recibe un aviso cuando la beta esté lista:'}</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email' : 'Tu correo'}
                className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--memory-gold)]"
              />
              <button className="bg-[var(--memory-gold)] text-[var(--memory-brown)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--memory-parchment)] transition-colors">
                {text.download.notify}
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/" className="text-white/80 hover:text-white transition-colors underline">
              {text.download.back}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

