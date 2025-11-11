'use client';

import { useEffect, useState } from 'react';

export type Language = 'en' | 'es';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    
    // Trigger custom event for other components to listen
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
      aria-label="Change language"
    >
      <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
      <span>{language === 'en' ? 'EN' : 'ES'}</span>
    </button>
  );
}

// Hook to use in pages
export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Initial load
    const savedLang = (localStorage.getItem('language') as Language) || 'en';
    setLanguage(savedLang);

    // Listen for language changes
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return language;
}



