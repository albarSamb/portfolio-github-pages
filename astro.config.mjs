import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://albarsamb.github.io',
  base: '/portfolio-github-pages/',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
