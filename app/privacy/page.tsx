'use client';

import type { Metadata } from 'next';
import { useLanguage } from '../components/LanguageSwitcher';

type Section = {
  heading: string;
  paragraphs: string[];
};

export const metadata: Metadata = {
  title: 'Privacy Policy - PancitoGames',
  description:
    'Learn how PancitoGames handles personal information across games, websites, and services.',
};

export default function PrivacyPage() {
  const language = useLanguage();

  const copy: Record<
    'en' | 'es',
    {
      heroTitle: string;
      updated: string;
      intro: string;
      sections: Section[];
      contactPrefix: string;
    }
  > = {
    en: {
      heroTitle: 'Privacy Policy',
      updated: 'Last updated: November 2025',
      intro:
        'We respect your privacy. This policy explains how PancitoGames handles information in our games and digital services.',
      sections: [
        {
          heading: 'Data Collection',
          paragraphs: [
            'Memory History does not collect, store, or share personal user information. All progress remains on your device.',
          ],
        },
        {
          heading: 'Website Use',
          paragraphs: [
            'This website may use essential cookies to improve navigation. We do not sell or track your personal information.',
          ],
        },
        {
          heading: 'Third-Party Services',
          paragraphs: [
            'We avoid integrating third-party analytics tools that gather personal data. If this changes, we will update this policy.',
          ],
        },
        {
          heading: "Children's Privacy",
          paragraphs: [
            'Our games are family friendly. We do not knowingly collect information from children under 13 years of age.',
          ],
        },
        {
          heading: 'Policy Updates',
          paragraphs: [
            'Any updates to this policy will appear on this page with a new revision date. Continued use of our services indicates acceptance of updates.',
          ],
        },
      ],
      contactPrefix: 'Questions? Write to',
    },
    es: {
      heroTitle: 'Política de Privacidad',
      updated: 'Última actualización: noviembre de 2025',
      intro:
        'Respetamos tu privacidad. Esta política explica cómo PancitoGames maneja la información en nuestros juegos y servicios digitales.',
      sections: [
        {
          heading: 'Recopilación de datos',
          paragraphs: [
            'Memory History no recopila, almacena ni comparte información personal de los usuarios. Todo el progreso permanece en tu dispositivo.',
          ],
        },
        {
          heading: 'Uso del sitio web',
          paragraphs: [
            'Este sitio puede usar cookies esenciales para mejorar la navegación. No vendemos ni rastreamos tu información personal.',
          ],
        },
        {
          heading: 'Servicios de terceros',
          paragraphs: [
            'Evitamos integrar herramientas de analítica de terceros que recojan datos personales. Si esto cambia, actualizaremos esta política.',
          ],
        },
        {
          heading: 'Privacidad de menores',
          paragraphs: [
            'Nuestros juegos son aptos para toda la familia. No recopilamos de forma intencional datos de niños menores de 13 años.',
          ],
        },
        {
          heading: 'Actualizaciones de la política',
          paragraphs: [
            'Cualquier cambio se publicará en esta página con una nueva fecha de revisión. El uso continuo de nuestros servicios implica la aceptación de las actualizaciones.',
          ],
        },
      ],
      contactPrefix: '¿Preguntas? Escríbenos a',
    },
  };

  const text = copy[language];

  return (
    <div className="relative overflow-hidden">
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--watercolor-sky)] via-transparent to-[var(--watercolor-sunset)]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xs uppercase tracking-[0.5em] text-[var(--ink-muted)]">
            PancitoGames
          </p>
          <h1 className="mt-4 font-heading text-4xl text-[var(--ink-deep)] sm:text-5xl">
            {text.heroTitle}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[var(--ink-muted)]/80">
            {text.updated}
          </p>
          <p className="mt-6 text-base text-[var(--ink-muted)]">{text.intro}</p>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--watercolor-forest)] via-transparent to-[var(--watercolor-sky)]" />
        </div>
        <div className="mx-auto max-w-4xl space-y-8 rounded-[3rem] border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-10 shadow-[0_30px_50px_-20px_rgba(34,23,18,0.3)]">
          {text.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-[1.5rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-6 shadow-sm"
            >
              <h2 className="font-heading text-2xl text-[var(--ink-deep)]">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4 text-sm text-[var(--ink-muted)]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="rounded-[1.5rem] border border-[var(--ink-soft)] bg-[var(--parchment)] p-6 text-center text-sm text-[var(--ink-muted)] shadow-sm">
            <p>
              {text.contactPrefix}{' '}
              <a
                href="mailto:hi@pancitogames.com"
                className="font-semibold text-[var(--accent-deep)] hover:underline"
              >
                hi@pancitogames.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

