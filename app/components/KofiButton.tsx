'use client';

import { useLanguage } from './LanguageSwitcher';

/** Página de Ko-fi del estudio. Cámbiala aquí si algún día cambia. */
export const KOFI_URL = 'https://ko-fi.com/pancitogames';

const etiquetas = {
  es: { label: 'Apóyanos en Ko-fi', short: 'Apoyar', help: 'Apoya a PancitoGames en Ko-fi (se abre en una pestaña nueva)' },
  en: { label: 'Support us on Ko-fi', short: 'Support', help: 'Support PancitoGames on Ko-fi (opens in a new tab)' },
} as const;

export default function KofiButton({
  variant = 'button',
  className = '',
}: {
  /** `button`: botón grande; `compact`: para la barra de navegación. */
  variant?: 'button' | 'compact';
  className?: string;
}) {
  const text = etiquetas[useLanguage()];
  const estilos =
    variant === 'compact'
      ? 'px-4 py-2 text-sm'
      : 'px-7 py-3.5 text-base';

  return (
    <a
      href={KOFI_URL}
      target="_blank"
      rel="noopener noreferrer"
      title={text.help}
      className={`inline-flex items-center gap-2 rounded-full bg-[#ff5e5b] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,94,91,0.7)] transition hover:-translate-y-0.5 hover:bg-[#ff7472] ${estilos} ${className}`}
    >
      <span aria-hidden>☕</span>
      {variant === 'compact' ? text.short : text.label}
    </a>
  );
}
