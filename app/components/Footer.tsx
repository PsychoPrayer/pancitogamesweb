'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageSwitcher';
import KofiButton from './KofiButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const language = useLanguage();

  const copy = {
    en: {
      description:
        'An indie studio making games with passion: history adventures, arcade challenges and whatever idea makes us want to play.',
      founded: 'Founded in 2025 • Based in USA',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      follow: 'Follow Us',
      comingSoon: '(Coming Soon)',
      home: 'Home',
      games: 'Games',
      support: 'Love our games? Help us make the next one.',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      copyright: `© ${currentYear} PancitoGames. All rights reserved.`,
    },
    es: {
      description:
        'Un estudio indie que hace videojuegos con pasión: aventuras históricas, retos arcade y cualquier idea que nos den ganas de jugar.',
      founded: 'Fundado en 2025 • Con base en EE. UU.',
      quickLinks: 'Enlaces',
      legal: 'Legal',
      follow: 'Síguenos',
      comingSoon: '(Próximamente)',
      home: 'Inicio',
      games: 'Juegos',
      support: '¿Te gustan nuestros juegos? Ayúdanos a hacer el siguiente.',
      about: 'Acerca',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      copyright: `© ${currentYear} PancitoGames. Todos los derechos reservados.`,
    },
  } as const;

  const texts = copy[language];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/LogoPancito.jpg"
                alt="PancitoGames Logo"
                width={52}
                height={52}
                className="rounded-full border border-[var(--border)] shadow-sm"
              />
              <div>
                <span className="font-heading text-2xl font-semibold text-[var(--text-strong)]">
                  PancitoGames
                </span>
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-muted)]">
                  {language === 'en' ? 'Since 2025' : 'Desde 2025'}
                </p>
              </div>
            </Link>
            <p className="max-w-md text-[var(--text-muted)]">
              {texts.description}
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              {texts.founded}
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-sm text-[var(--text-muted)]">{texts.support}</p>
              <KofiButton variant="compact" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[var(--text-strong)]">
              {texts.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {texts.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/#games"
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {texts.games}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {texts.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {texts.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[var(--text-strong)]">
              {texts.legal}
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {texts.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {texts.terms}
                </Link>
              </li>
            </ul>

            {/* Social Media (placeholder) */}
            <div className="pt-4">
              <h3 className="font-heading text-lg font-semibold text-[var(--text-strong)]">
                {texts.follow}
              </h3>
              <div className="text-sm text-[var(--text-muted)]">
                {texts.comingSoon}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[var(--border)] pt-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-muted)]">
            {texts.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
