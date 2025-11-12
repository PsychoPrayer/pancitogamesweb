'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageSwitcher';

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export default function TermsContent() {
  const language = useLanguage();

  const copy: Record<
    'en' | 'es',
    {
      heroTitle: string;
      updated: string;
      intro: string;
      sections: Section[];
      contactPrefix: string;
      contactCta: string;
    }
  > = {
    en: {
      heroTitle: 'Terms & Conditions',
      updated: 'Last updated: November 2025',
      intro:
        'By accessing PancitoGames products and services, you agree to the terms outlined below.',
      sections: [
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'All games, graphics, music, and content from PancitoGames are the property of PancitoGames © 2025. All rights reserved.',
          ],
        },
        {
          heading: 'Use of Our Games',
          paragraphs: [
            'Our games are provided for personal use and entertainment. Commercial use is not permitted without written permission from PancitoGames.',
          ],
        },
        {
          heading: 'Educational Content',
          paragraphs: [
            'Historical data and stories included in our games serve educational purposes. While we strive for accuracy, we encourage consulting additional sources for formal research.',
          ],
        },
        {
          heading: 'User Conduct',
          paragraphs: ['Users agree not to engage in the following activities:'],
          bullets: [
            'Reverse engineer, decompile, or attempt to extract our source code',
            'Use our content for commercial purposes without permission',
            'Redistribute or sell our games or content',
            'Use our services to violate any laws or regulations',
          ],
        },
        {
          heading: 'Disclaimer of Warranties',
          paragraphs: [
            'Our games and services are provided “as is” without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free experiences.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          paragraphs: [
            'To the maximum extent permitted by law, PancitoGames shall not be liable for indirect, incidental, special, consequential, or punitive damages resulting from the use of our games or services.',
          ],
        },
        {
          heading: 'Changes to Terms',
          paragraphs: [
            'We may update these terms at any time. Continued use of our services after modifications constitutes acceptance of the revised terms.',
          ],
        },
        {
          heading: 'Governing Law',
          paragraphs: [
            'These terms are governed by and construed in accordance with the laws of the United States.',
          ],
        },
      ],
      contactPrefix: 'For legal inquiries, please contact',
      contactCta: 'Return to home',
    },
    es: {
      heroTitle: 'Términos y Condiciones',
      updated: 'Última actualización: noviembre de 2025',
      intro:
        'Al acceder a los productos y servicios de PancitoGames, aceptas los términos descritos a continuación.',
      sections: [
        {
          heading: 'Propiedad Intelectual',
          paragraphs: [
            'Todos los juegos, gráficos, música y contenido de PancitoGames son propiedad de PancitoGames © 2025. Todos los derechos reservados.',
          ],
        },
        {
          heading: 'Uso de Nuestros Juegos',
          paragraphs: [
            'Nuestros juegos se ofrecen para uso personal y entretenimiento. No se permite el uso comercial sin autorización escrita de PancitoGames.',
          ],
        },
        {
          heading: 'Contenido Educativo',
          paragraphs: [
            'Los datos históricos y relatos incluidos en nuestros juegos tienen fines educativos. Aunque buscamos la precisión, recomendamos consultar fuentes adicionales para investigaciones formales.',
          ],
        },
        {
          heading: 'Conducta del Usuario',
          paragraphs: ['Los usuarios aceptan no realizar las siguientes actividades:'],
          bullets: [
            'Realizar ingeniería inversa, descompilar o intentar extraer nuestro código fuente',
            'Utilizar nuestro contenido con fines comerciales sin permiso',
            'Redistribuir o vender nuestros juegos o contenido',
            'Usar nuestros servicios para violar leyes o regulaciones',
          ],
        },
        {
          heading: 'Descargo de Garantías',
          paragraphs: [
            'Nuestros juegos y servicios se proporcionan “tal cual” sin garantías de ningún tipo, expresas o implícitas. No garantizamos experiencias ininterrumpidas o libres de errores.',
          ],
        },
        {
          heading: 'Limitación de Responsabilidad',
          paragraphs: [
            'En la máxima medida permitida por la ley, PancitoGames no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos resultantes del uso de nuestros juegos o servicios.',
          ],
        },
        {
          heading: 'Cambios en los Términos',
          paragraphs: [
            'Podemos actualizar estos términos en cualquier momento. El uso continuado de nuestros servicios después de las modificaciones implica la aceptación de los términos revisados.',
          ],
        },
        {
          heading: 'Ley Aplicable',
          paragraphs: [
            'Estos términos se rigen e interpretan de acuerdo con las leyes de los Estados Unidos.',
          ],
        },
      ],
      contactPrefix: 'Para consultas legales, contáctanos en',
      contactCta: 'Volver al inicio',
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
                {section.bullets ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
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
            <Link
              href="/"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[var(--ink-soft)] bg-[var(--accent-soft)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-deep)] transition hover:bg-[var(--accent-deep)] hover:text-[var(--parchment-light)]"
            >
              {text.contactCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

