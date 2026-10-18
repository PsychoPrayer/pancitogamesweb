'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageSwitcher';
import KofiButton from '../components/KofiButton';

export default function AboutContent() {
  const language = useLanguage();

  const copy = {
    en: {
      heroTitle: 'About PancitoGames',
      heroSubtitle: 'An indie studio that makes video games out of pure passion.',
      storyHeading: 'Our Story',
      storyParagraphs: [
        'PancitoGames was born in 2025 from something simple: we love video games, and we wanted to make our own.',
        'We make the games we would like to play. Some travel through history and teach along the way, like Memory History and Pancito and the Pieces of Time. Others are just for fun, like Tavern Golf.',
        'Whatever the genre, every project gets the same care: playful mechanics, its own visual identity and lots of detail.',
      ],
      pillars: [
        {
          emoji: '🎯',
          title: 'Mission',
          description:
            'Create fun, polished games made with passion, that anyone can pick up and enjoy, and that leave something behind, whether a laugh, a challenge or a piece of history.',
        },
        {
          emoji: '🔭',
          title: 'Vision',
          description:
            'Grow into a recognized independent studio with a catalog of varied, original games played across the world on web and mobile.',
        },
        {
          emoji: '💎',
          title: 'Values',
          list: [
            'Passion for making games',
            'Fun comes first',
            'Learning through play',
            'Quality and care in every detail',
            'Respect for players: no tricks, no abusive ads',
          ],
        },
      ],
      doingTitle: 'What We Do',
      doing: [
        {
          emoji: '🎮',
          title: 'Games for everyone',
          description:
            'Platformers, puzzles, sports, arcade… We explore different genres and play on web and mobile.',
        },
        {
          emoji: '📚',
          title: 'Learning by playing',
          description:
            'Several of our games turn history and culture into adventures, so learning feels like part of the fun.',
        },
        {
          emoji: '🎨',
          title: 'Art & sound with personality',
          description:
            'Each game has its own style, from pixel art to 3D taverns, with music and effects made to fit it.',
        },
      ],
      stats: [
        { value: '2025', label: 'Founded' },
        { value: '3', label: 'Playable games' },
        { value: '2', label: 'Languages' },
        { value: '∞', label: 'Passion' },
      ],
      teamTitle: 'Our Team',
      teamIntro:
        'A small team of developers and artists who love video games and keep learning with every project.',
      teamDetails:
        'Based in the United States, working remotely.',
      ctaTitle: 'Want to collaborate or support us?',
      ctaText:
        'Write to us with ideas, feedback or proposals. You can also support the studio on Ko-fi.',
      ctaAction: 'Reach out →',
    },
    es: {
      heroTitle: 'Acerca de PancitoGames',
      heroSubtitle: 'Un estudio indie que hace videojuegos por pura pasión.',
      storyHeading: 'Nuestra historia',
      storyParagraphs: [
        'PancitoGames nació en 2025 de algo muy simple: nos encantan los videojuegos y queríamos hacer los nuestros.',
        'Hacemos los juegos que nos gustaría jugar. Algunos viajan por la historia y enseñan por el camino, como Memory History y Pancito y las Piezas del Tiempo; otros son pura diversión, como Tavern Golf.',
        'Sea cual sea el género, cada proyecto recibe el mismo cariño: mecánicas que enganchan, una identidad visual propia y mucho detalle.',
      ],
      pillars: [
        {
          emoji: '🎯',
          title: 'Misión',
          description:
            'Crear juegos divertidos y cuidados, hechos con pasión, que cualquiera pueda disfrutar y que dejen algo: una risa, un reto o un pedazo de historia.',
        },
        {
          emoji: '🔭',
          title: 'Visión',
          description:
            'Convertirnos en un estudio independiente reconocido, con un catálogo de juegos variados y originales que se jueguen en todo el mundo, en web y móvil.',
        },
        {
          emoji: '💎',
          title: 'Valores',
          list: [
            'Pasión por hacer videojuegos',
            'La diversión es lo primero',
            'Aprender jugando',
            'Calidad y cuidado en cada detalle',
            'Respeto al jugador: sin trampas ni anuncios abusivos',
          ],
        },
      ],
      doingTitle: 'Qué hacemos',
      doing: [
        {
          emoji: '🎮',
          title: 'Juegos para todos',
          description:
            'Plataformas, puzles, deportes, arcade… Exploramos géneros distintos y publicamos en web y móvil.',
        },
        {
          emoji: '📚',
          title: 'Aprender jugando',
          description:
            'Varios de nuestros juegos convierten la historia y la cultura en aventuras, para que aprender sea parte de la diversión.',
        },
        {
          emoji: '🎨',
          title: 'Arte y sonido con personalidad',
          description:
            'Cada juego tiene su propio estilo, del pixel art a las tabernas en 3D, con música y efectos hechos a su medida.',
        },
      ],
      stats: [
        { value: '2025', label: 'Fundación' },
        { value: '3', label: 'Juegos jugables' },
        { value: '2', label: 'Idiomas' },
        { value: '∞', label: 'Pasión' },
      ],
      teamTitle: 'Nuestro equipo',
      teamIntro:
        'Un equipo pequeño de desarrolladores y artistas que aman los videojuegos y aprenden algo nuevo con cada proyecto.',
      teamDetails:
        'Con base en Estados Unidos y trabajo en remoto.',
      ctaTitle: '¿Quieres colaborar o apoyarnos?',
      ctaText:
        'Escríbenos con ideas, comentarios o propuestas. También puedes apoyar al estudio en Ko-fi.',
      ctaAction: 'Escríbenos →',
    },
  } as const;

  const text = copy[language];

  return (
    <div className="relative overflow-hidden">
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-70 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-forest)]" />
        </div>
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-heading text-xs uppercase tracking-[0.5em] text-[var(--ink-muted)]">
            PancitoGames
          </p>
          <h1 className="mt-4 font-heading text-4xl text-[var(--ink-deep)] sm:text-5xl">
            {text.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-muted)]">{text.heroSubtitle}</p>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--watercolor-sunset)] via-transparent to-[var(--watercolor-sky)]" />
        </div>
        <div className="mx-auto max-w-4xl space-y-12 rounded-[3rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-10 shadow-[0_35px_60px_-20px_rgba(34,23,18,0.3)]">
          <div className="flex justify-center">
            <div className="relative">
              <span className="absolute inset-0 -z-10 rounded-full bg-[var(--accent-soft)]/40 blur-xl" />
              <Image
                src="/LogoPancito.jpg"
                alt="PancitoGames Logo"
                width={140}
                height={140}
                className="rounded-full border border-[var(--ink-soft)] shadow-lg"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-heading text-3xl text-[var(--ink-deep)]">
              {text.storyHeading}
            </h2>
            {text.storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[var(--ink-muted)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-bl from-[var(--watercolor-forest)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {text.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col rounded-[2rem] border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-8 shadow-sm"
              >
                <div className="text-4xl">{pillar.emoji}</div>
                <h3 className="mt-4 font-heading text-2xl text-[var(--ink-deep)]">
                  {pillar.title}
                </h3>
                {'description' in pillar ? (
                  <p className="mt-4 text-sm text-[var(--ink-muted)]">
                    {pillar.description}
                  </p>
                ) : (
                  <ul className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
                    {pillar.list?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-forest)]" />
        </div>
        <div className="mx-auto max-w-5xl space-y-10">
          <h2 className="text-center font-heading text-3xl text-[var(--ink-deep)]">
            {text.doingTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {text.doing.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-[2rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-6 shadow-sm"
              >
                <div className="text-3xl">{item.emoji}</div>
                <h3 className="mt-4 font-heading text-xl text-[var(--ink-deep)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--ink-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-50 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-bl from-[var(--watercolor-sunset)] via-transparent to-[var(--watercolor-forest)]" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 rounded-[3rem] border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-10 text-center shadow-[0_35px_60px_-20px_rgba(34,23,18,0.3)] md:grid-cols-4">
            {text.stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="font-heading text-4xl text-[var(--ink-deep)]">
                  {stat.value}
                </div>
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-65 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="font-heading text-3xl text-[var(--ink-deep)]">
            {text.teamTitle}
          </h2>
          <p className="text-base text-[var(--ink-muted)]">{text.teamIntro}</p>
          <p className="text-sm text-[var(--ink-muted)]/90">{text.teamDetails}</p>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-70 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--watercolor-forest)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-10 text-center shadow-[0_30px_50px_-20px_rgba(34,23,18,0.35)]">
          <h2 className="font-heading text-3xl text-[var(--ink-deep)]">
            {text.ctaTitle}
          </h2>
          <p className="mt-4 text-base text-[var(--ink-muted)]">{text.ctaText}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)] px-8 py-3 text-sm font-semibold text-[var(--on-accent)] transition hover:bg-[var(--accent-deep)] hover:text-[var(--on-accent)]"
          >
            {text.ctaAction}
          </Link>
          <KofiButton className="ml-0 mt-6 sm:ml-4" />
        </div>
      </section>
    </div>
  );
}

