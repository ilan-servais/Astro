import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind(), mdx(), icon({
    include: {
      mdi: ["*"]
    }
  })],
  image: {
    // Service par défaut utilisant sharp au lieu de squoosh
    service: { entrypoint: 'astro/assets/services/sharp' },
    // Configuration globale pour les images
    defaultOptions: {
      format: 'webp',
      quality: 80,
    }
  },
  // Optimisations pour Netlify
  vite: {
    ssr: {
      noExternal: ['astro-navbar']
    },
    build: {
      rollupOptions: {
        external: ['@assets/*']
      }
    }
  }
});