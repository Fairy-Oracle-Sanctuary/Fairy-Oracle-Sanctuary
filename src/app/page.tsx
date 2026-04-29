import { defaultLocale } from '@/i18n.config';

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=/Fairy-Oracle-Sanctuary/${defaultLocale}`} />
      </head>
      <body>
        <p>Redirecting to <a href={`/Fairy-Oracle-Sanctuary/${defaultLocale}`}>/{defaultLocale}</a>...</p>
      </body>
    </html>
  );
}
