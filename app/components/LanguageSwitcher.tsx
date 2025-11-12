'use client';

import { useLanguageContext } from './LanguageProvider';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full border border-[var(--ink-soft)] bg-[var(--parchment-card)] px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm transition-colors hover:bg-[var(--parchment)]"
      aria-label="Change language"
    >
      <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
      <span>{language === 'en' ? 'EN' : 'ES'}</span>
    </button>
  );
}

export function useLanguage() {
  return useLanguageContext().language;
}

