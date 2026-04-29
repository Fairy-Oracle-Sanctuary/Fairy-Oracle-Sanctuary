import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  // Only use basePath in production for GitHub Pages
  basePath: isProd ? '/Fairy-Oracle-Sanctuary' : '',
};

export default withNextIntl(nextConfig);
