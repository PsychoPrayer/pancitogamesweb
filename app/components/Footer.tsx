'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageSwitcher';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const language = useLanguage();

  const copy = {
    en: {
      description:
        'We craft story-driven games that preserve collective memory through play.',
      founded: 'Founded in 2025 • Based in USA',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      follow: 'Follow Us',
      comingSoon: '(Coming Soon)',
      home: 'Home',
      games: 'Collection',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      copyright: `© ${currentYear} PancitoGames. All rights reserved.`,
    },
    es: {
      description:
        'Creamos juegos con historias que resguardan la memoria colectiva a través del juego.',
      founded: 'Fundado en 2025 • Con base en EE. UU.',
      quickLinks: 'Enlaces',
      legal: 'Legal',
      follow: 'Síguenos',
      comingSoon: '(Próximamente)',
      home: 'Inicio',
      games: 'Colección',
      about: 'Acerca',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      copyright: `© ${currentYear} PancitoGames. Todos los derechos reservados.`,
    },
  } as const;

  const texts = copy[language];

  return (
    <footer className="border-t border-[var(--ink-soft)] bg-[var(--ink-deep)] text-[var(--parchment-light)]">
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
                className="rounded-full border border-[var(--parchment-light)]/30 shadow-sm"
              />
              <div>
                <span className="font-heading text-2xl font-semibold text-[var(--parchment)]">
                  PancitoGames
                </span>
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--parchment-light)]/70">
                  {language === 'en' ? 'Since 2025' : 'Desde 2025'}
                </p>
              </div>
            </Link>
            <p className="max-w-md text-[var(--parchment-light)]/80">
              {texts.description}
            </p>
            <p className="text-sm text-[var(--parchment-light)]/60">
              {texts.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[var(--parchment)]">
              {texts.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="text-[var(--parchment-light)]/80 transition-colors hover:text-[var(--accent-soft)]"
                >
                  {texts.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/#games"
                  className="text-[var(--parchment-light)]/80 transition-colors hover:text-[var(--accent-soft)]"
                >
                  {texts.games}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--parchment-light)]/80 transition-colors hover:text-[var(--accent-soft)]"
                >
                  {texts.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--parchment-light)]/80 transition-colors hover:text-[var(--accent-soft)]"
                >
                  {texts.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[var(--parchment)]">
              {texts.legal}
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--parchment-light)]/80 transition-colors hover:text-[var(--accent-soft)]"
                >
                  {texts.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[var(--parchment-light)]/80 transition-colors hover:text-[var(--accent-soft)]"
                >
                  {texts.terms}
                </Link>
              </li>
            </ul>

            {/* Social Media (placeholder) */}
            <div className="pt-4">
              <h3 className="font-heading text-lg font-semibold text-[var(--parchment)]">
                {texts.follow}
              </h3>
              <div className="text-sm text-[var(--parchment-light)]/60">
                {texts.comingSoon}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[var(--parchment-light)]/20 pt-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--parchment-light)]/60">
            {texts.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
