'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './components/LanguageSwitcher';

export default function HomePageClient() {
  const language = useLanguage();

  const content = {
    en: {
      hero: {
        title: 'The Memory Album of the Americas',
        subtitle:
          'We craft historical, story-rich games that feel like leafing through a treasured album of shared memories.',
        explore: 'Explore Collection',
        about: 'Our Studio',
        cards: [
          {
            title: 'Campaign',
            description:
              'Story chapters inspired by oral histories and archives across the continent.',
            action: 'Begin Journey',
            href: '/#games',
          },
          {
            title: 'Collection',
            description:
              'Unlock artifacts, characters, and locations that celebrate many cultures.',
            action: 'Browse Relics',
            href: '/memory-history',
          },
          {
            title: 'Workshop',
            description:
              'Collaborate with us to turn community memories into interactive adventures.',
            action: 'Contact Team',
            href: '/contact',
          },
        ],
      },
      features: {
        title: 'Why Players Treasure PancitoGames',
        items: [
          {
            emoji: '📜',
            title: 'Curated Heritage',
            description:
              'Our games highlight the historical richness shared by many regions, celebrating voices from across the Americas and beyond.',
          },
          {
            emoji: '🧭',
            title: 'Guided Learning',
            description:
              'Narrative missions and quizzes help players remember the stories behind every discovery.',
          },
          {
            emoji: '🎨',
            title: 'Watercolor Worlds',
            description:
              'Soft illustrations, parchment textures, and ambient soundscapes evoke the feeling of a handcrafted album.',
          },
          {
            emoji: '🤝',
            title: 'Respectful Design',
            description:
              'We build games with mindful pacing, no intrusive ads, and a focus on inclusive storytelling.',
          },
        ],
      },
      games: {
        title: 'Our Games',
        name: 'Memory History',
        tagline: 'Stories of Venezuela and neighbors soon to join',
        description:
          'Embark on a memory adventure centered on Venezuelan history while preparing to welcome new chapters from other Latin American countries. Collect 55 artifacts, master 80 unique levels, and take narrative quizzes that unlock future regions.',
        status: 'In Development',
        platforms: 'Android | iOS (coming soon)',
        cta: 'Discover the game →',
        comingSoon: 'New historical journeys are already on the storyboard. Stay tuned! 🎮',
      },
      cta: {
        title: 'Want to bring your history to the screen?',
        description:
          'We partner with educators, archivists, and communities to transform collective memory into interactive stories.',
        action: 'Start a conversation',
      },
    },
    es: {
      hero: {
        title: 'El Álbum de Recuerdos de las Américas',
        subtitle:
          'Creamos juegos históricos y narrativos que se sienten como hojear un álbum de memorias compartidas.',
        explore: 'Explorar colección',
        about: 'Nuestro estudio',
        cards: [
          {
            title: 'Campaña',
            description:
              'Capítulos narrativos inspirados en historias orales y archivos de todo el continente.',
            action: 'Iniciar viaje',
            href: '/#games',
          },
          {
            title: 'Colección',
            description:
              'Desbloquea artefactos, personajes y lugares que celebran muchas culturas.',
            action: 'Ver reliquias',
            href: '/memory-history',
          },
          {
            title: 'Taller',
            description:
              'Colabora con nosotros para transformar memorias comunitarias en aventuras interactivas.',
            action: 'Contactar equipo',
            href: '/contact',
          },
        ],
      },
      features: {
        title: 'Por qué los jugadores atesoran PancitoGames',
        items: [
          {
            emoji: '📜',
            title: 'Herencia curada',
            description:
              'Nuestros juegos realzan la riqueza histórica compartida por diferentes regiones, celebrando voces de toda América y más allá.',
          },
          {
            emoji: '🧭',
            title: 'Aprendizaje guiado',
            description:
              'Misiones narrativas y cuestionarios ayudan a recordar las historias detrás de cada hallazgo.',
          },
          {
            emoji: '🎨',
            title: 'Mundos en acuarela',
            description:
              'Ilustraciones suaves, texturas de pergamino y paisajes sonoros evocan un álbum hecho a mano.',
          },
          {
            emoji: '🤝',
            title: 'Diseño respetuoso',
            description:
              'Construimos juegos con ritmo consciente, sin anuncios intrusivos y con historias inclusivas.',
          },
        ],
      },
      games: {
        title: 'Nuestros juegos',
        name: 'Memory History',
        tagline: 'Historias de Venezuela y países que se sumarán pronto',
        description:
          'Vive una aventura de memoria centrada en la historia venezolana mientras nos preparamos para añadir capítulos de otros países latinoamericanos. Reúne 55 artefactos, supera 80 niveles únicos y realiza cuestionarios narrativos que abrirán nuevas regiones.',
        status: 'En desarrollo',
        platforms: 'Android | iOS (próximamente)',
        cta: 'Descubrir el juego →',
        comingSoon:
          'Nuevos viajes históricos ya están en storyboard. ¡Mantente atento! 🎮',
      },
      cta: {
        title: '¿Quieres llevar tu historia a la pantalla?',
        description:
          'Colaboramos con educadores, archivistas y comunidades para convertir la memoria colectiva en historias interactivas.',
        action: 'Iniciar conversación',
      },
    },
  } as const;

  const text = content[language];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-[2.5rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-10 shadow-[0_35px_60px_-15px_rgba(34,23,18,0.35)] before:absolute before:inset-4 before:-z-10 before:rounded-[2rem] before:border before:border-[var(--ink-soft)]/70 before:bg-[var(--parchment-card)]/90">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="space-y-4">
                <p className="font-heading text-sm uppercase tracking-[0.5em] text-[var(--ink-muted)]">
                  PancitoGames
                </p>
                <h1 className="font-heading text-4xl leading-tight text-[var(--ink-deep)] sm:text-5xl md:text-6xl">
                  {text.hero.title}
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-[var(--ink-muted)]">
                  {text.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
              <div className="grid w-full gap-4 sm:grid-cols-3">
                {text.hero.cards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="flex flex-col justify-between rounded-2xl border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl text-[var(--ink-deep)]">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[var(--ink-muted)]">
                        {card.description}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--accent-deep)]">
                      {card.action}
                      <span aria-hidden className="ml-2">
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-70 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--watercolor-forest)] via-transparent to-[var(--watercolor-sky)]" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl text-[var(--ink-deep)] md:text-4xl">
              {text.features.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {text.features.items.map((feature) => (
              <div
                key={feature.title}
                className="flex h-full flex-col rounded-3xl border border-[var(--ink-soft)] bg-[var(--parchment)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{feature.emoji}</div>
                <h3 className="font-heading text-xl text-[var(--ink-deep)]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm text-[var(--ink-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Showcase Section */}
      <section
        id="games"
        className="relative px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-bl from-[var(--watercolor-sunset)] via-transparent to-[var(--watercolor-forest)]" />
        </div>
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-[var(--ink-deep)] md:text-4xl">
              {text.games.title}
            </h2>
          </div>

          <div className="overflow-hidden rounded-[3rem] border border-[var(--ink-soft)] bg-[var(--parchment-card)] shadow-[0_35px_60px_-15px_rgba(34,23,18,0.35)]">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center justify-center border-b border-[var(--ink-soft)]/60 bg-[var(--parchment)] p-8 md:w-1/2 md:border-b-0 md:border-r">
                <Image
                  src="/MemoryHistoryLogoSinFondo.png"
                  alt="Memory History Logo"
                  width={280}
                  height={280}
                  className="max-w-xs"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8 md:w-1/2">
                <div className="space-y-4">
                  <h3 className="font-heading text-3xl text-[var(--ink-deep)]">
                    {text.games.name}
                  </h3>
                  <p className="font-heading text-lg italic text-[var(--ink-muted)]">
                    {text.games.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                    {text.games.description}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-[var(--ink-muted)]">
                  <span className="inline-flex items-center rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)]/80 px-4 py-1 font-semibold text-[var(--ink-deep)]">
                    {text.games.status}
                  </span>
                  <div>
                    <span className="font-semibold text-[var(--ink)]">
                      Platforms:
                    </span>{' '}
                    {text.games.platforms}
                  </div>
                </div>

                <Link
                  href="/memory-history"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)] px-6 py-3 text-sm font-semibold text-[var(--ink-deep)] transition hover:bg-[var(--accent-deep)] hover:text-[var(--parchment-light)]"
                >
                  {text.games.cta}
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-[var(--ink-muted)]">
            {text.games.comingSoon}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-70 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-10 text-center shadow-[0_30px_50px_-20px_rgba(34,23,18,0.35)]">
          <h2 className="font-heading text-3xl text-[var(--ink-deep)] md:text-4xl">
            {text.cta.title}
          </h2>
          <p className="mt-4 text-base text-[var(--ink-muted)]">
            {text.cta.description}
          </p>
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

