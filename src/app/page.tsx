import { defaultLocale, Locale, locales } from '@/i18n.config';

function getBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const browserLang = navigator.language.split('-')[0];
  return locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale;
}

export default function RootPage() {
  const targetLocale = typeof window === 'undefined' ? defaultLocale : getBrowserLocale();
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=/Fairy-Oracle-Sanctuary/${targetLocale}`} />
      </head>
      <body>
        <p>Redirecting to <a href={`/Fairy-Oracle-Sanctuary/${targetLocale}`}>/{targetLocale}</a>...</p>
      </body>
    </html>
  );
}
