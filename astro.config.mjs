import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // TODO: remplacer par l'URL Netlify (ou le futur nom de domaine) une fois connu.
  // Utilisée pour le sitemap, les canonical links et les balises Open Graph.
  site: 'https://albarsamb.github.io',
  output: 'server',
  adapter: netlify(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
