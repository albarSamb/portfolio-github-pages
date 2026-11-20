import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // URL publique du site (Netlify). À changer si un nom de domaine est ajouté.
  // Utilisée pour le sitemap, les canonical links et les balises Open Graph.
  site: 'https://albarportfolio.netlify.app',
  adapter: netlify(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
