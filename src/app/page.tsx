"use client";

import { defaultLocale, Locale, locales } from '@/i18n.config';
import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const targetLocale = locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale;
    const basePath = process.env.NODE_ENV === 'production' ? '/Fairy-Oracle-Sanctuary' : '';
    window.location.href = `${basePath}/${targetLocale}`;
  }, []);

  const basePath = process.env.NODE_ENV === 'production' ? '/Fairy-Oracle-Sanctuary' : '';

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl border border-gray-100 shadow-md bg-white flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-gray-900 mb-2">Fairy Oracle Sanctuary</h1>
        <p className="text-gray-500 mb-4">Loading...</p>
        <noscript>
          <a 
            href={`${basePath}/${defaultLocale}`}
            className="text-accent hover:underline font-medium"
          >
            Click here to continue
          </a>
        </noscript>
      </div>
    </div>
  );
}
