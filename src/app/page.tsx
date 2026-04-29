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
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <p>Redirecting... <a href={`${basePath}/${defaultLocale}`}>Click here</a> if not redirected.</p>
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${basePath}/${defaultLocale}`} />
      </noscript>
    </div>
  );
}
