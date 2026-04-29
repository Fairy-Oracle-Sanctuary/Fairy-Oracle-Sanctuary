import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages: use repo name as base path
  // If using custom domain or user.github.io repo, set to ''
  basePath: '/Fairy-Oracle-Sanctuary',
};

export default withNextIntl(nextConfig);
