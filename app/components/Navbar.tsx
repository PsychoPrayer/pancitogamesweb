'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LanguageSwitcher, { useLanguage } from './LanguageSwitcher';
import KofiButton from './KofiButton';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const language = useLanguage();

  const copy = {
    en: {
      brand: 'PancitoGames',
      links: {
        home: 'Home',
        games: 'Games',
        about: 'About',
        contact: 'Contact',
      },
      tagline: 'Indie Game Studio',
    },
    es: {
      brand: 'PancitoGames',
      links: {
        home: 'Inicio',
        games: 'Juegos',
        about: 'Acerca',
        contact: 'Contacto',
      },
      tagline: 'Estudio Indie',
    },
  } as const;

  const labels = copy[language];

  const navigation = [
    { name: labels.links.home, href: '/' },
    { name: labels.links.games, href: '/#games' },
    { name: labels.links.about, href: '/about' },
    { name: labels.links.contact, href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--ink-soft)] bg-[var(--parchment-overlay)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/LogoPancito.jpg"
              alt="PancitoGames Logo"
              width={44}
              height={44}
              className="rounded-full border border-[var(--ink-soft)] shadow-sm"
            />
            <span className="font-heading text-2xl font-semibold text-[var(--ink)] drop-shadow-sm">
              {labels.brand}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          <span className="font-heading text-xs uppercase tracking-[0.4em] text-[var(--ink-muted)]">
            {labels.tagline}
          </span>
          <div className="flex items-center gap-6 rounded-full border border-[var(--ink-soft)] bg-[var(--parchment-card)] px-6 py-2 shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent-deep)]"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <KofiButton variant="compact" />
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[var(--ink-soft)] bg-[var(--parchment-card)] p-2 text-[var(--ink)] shadow-sm transition hover:bg-[var(--parchment)] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--ink-soft)] bg-[var(--parchment-overlay)] lg:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--parchment)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-3 py-2">
              <KofiButton variant="compact" />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

