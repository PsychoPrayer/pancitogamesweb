'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { useLanguage } from '../components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'About Us - PancitoGames',
  description:
    'Learn about PancitoGames, our mission to create educational gaming experiences, and our commitment to celebrating shared culture.',
};

export default function AboutPage() {
  const language = useLanguage();

  const copy = {
    en: {
      heroTitle: 'About PancitoGames',
      heroSubtitle: 'Crafting memorable gaming experiences since 2025.',
      storyHeading: 'Our Story',
      storyParagraphs: [
        'Founded in 2025 in the United States, PancitoGames was born from a desire to preserve stories and traditions through play.',
        'We treat video games as living archives—spaces where people can connect with shared history while creating new memories.',
        'Every project focuses on quality, accessibility, and respectful storytelling that invites curiosity.',
      ],
      pillars: [
        {
          emoji: '🎯',
          title: 'Mission',
          description:
            'Create narrative-rich games that teach, entertain, and safeguard community heritage from every corner of the Americas.',
        },
        {
          emoji: '🔭',
          title: 'Vision',
          description:
            'Be the studio of choice for cultural, educational mobile games that honor diverse stories in multiple languages.',
        },
        {
          emoji: '💎',
          title: 'Values',
          list: [
            'Quality over quantity',
            'Education through play',
            'Respect for cultural diversity',
            'Passion in every detail',
          ],
        },
      ],
      doingTitle: 'What We Do',
      doing: [
        {
          emoji: '🎮',
          title: 'Educational Mobile Games',
          description:
            'We design experiences that balance fun mechanics with deep historical and cultural research.',
        },
        {
          emoji: '🌍',
          title: 'Cultural Preservation',
          description:
            'Each title becomes a digital album that keeps oral histories, artifacts, and landscapes alive for new generations.',
        },
        {
          emoji: '🎨',
          title: 'Art & Sound Direction',
          description:
            'Watercolor palettes, handcrafted typography, and intimate soundscapes bring every setting to life.',
        },
      ],
      stats: [
        { value: '2025', label: 'Founded' },
        { value: '1+', label: 'Games in development' },
        { value: '55+', label: 'Cultural artifacts' },
        { value: '2', label: 'Languages' },
      ],
      teamTitle: 'Our Team',
      teamIntro:
        'Developers, designers, writers, and educators united by a love for history and interactive storytelling.',
      teamDetails:
        'Headquartered in the United States, collaborating remotely with talent across the Americas.',
      ctaTitle: 'Partner with PancitoGames',
      ctaText:
        'Share your archives, oral histories, or educational goals—we would love to explore them together.',
      ctaAction: 'Reach out →',
    },
    es: {
      heroTitle: 'Acerca de PancitoGames',
      heroSubtitle: 'Creando experiencias memorables desde 2025.',
      storyHeading: 'Nuestra historia',
      storyParagraphs: [
        'Fundado en 2025 en Estados Unidos, PancitoGames nació del deseo de preservar historias y tradiciones a través del juego.',
        'Tratamos los videojuegos como archivos vivos: espacios donde las personas conectan con la historia compartida mientras crean nuevos recuerdos.',
        'Cada proyecto se centra en la calidad, la accesibilidad y un relato respetuoso que despierte curiosidad.',
      ],
      pillars: [
        {
          emoji: '🎯',
          title: 'Misión',
          description:
            'Crear juegos llenos de narrativa que enseñen, entretengan y resguarden la herencia comunitaria de cada rincón de las Américas.',
        },
        {
          emoji: '🔭',
          title: 'Visión',
          description:
            'Ser el estudio referente de juegos móviles educativos y culturales que honran historias diversas en varios idiomas.',
        },
        {
          emoji: '💎',
          title: 'Valores',
          list: [
            'Calidad sobre cantidad',
            'Educación mediante el juego',
            'Respeto por la diversidad cultural',
            'Pasión en cada detalle',
          ],
        },
      ],
      doingTitle: 'Qué hacemos',
      doing: [
        {
          emoji: '🎮',
          title: 'Juegos móviles educativos',
          description:
            'Diseñamos experiencias que equilibran mecánicas divertidas con investigación histórica y cultural profunda.',
        },
        {
          emoji: '🌍',
          title: 'Preservación cultural',
          description:
            'Cada título se convierte en un álbum digital que mantiene vivas tradiciones y paisajes para nuevas generaciones.',
        },
        {
          emoji: '🎨',
          title: 'Dirección de arte y sonido',
          description:
            'Paletas en acuarela, tipografías artesanales y paisajes sonoros íntimos dan vida a cada escenario.',
        },
      ],
      stats: [
        { value: '2025', label: 'Fundación' },
        { value: '1+', label: 'Juegos en desarrollo' },
        { value: '55+', label: 'Artefactos culturales' },
        { value: '2', label: 'Idiomas' },
      ],
      teamTitle: 'Nuestro equipo',
      teamIntro:
        'Desarrolladores, diseñadores, guionistas y educadores unidos por el amor a la historia y la narrativa interactiva.',
      teamDetails:
        'Con base en Estados Unidos y colaboración remota con talento en toda América.',
      ctaTitle: 'Colabora con PancitoGames',
      ctaText:
        'Comparte tus archivos, historias orales o metas educativas. Nos encantará explorarlas juntos.',
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
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)] px-8 py-3 text-sm font-semibold text-[var(--ink-deep)] transition hover:bg-[var(--accent-deep)] hover:text-[var(--parchment-light)]"
          >
            {text.ctaAction}
          </Link>
        </div>
      </section>
    </div>
  );
}


