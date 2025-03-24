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
    // Service par défaut utilisant sharp
    service: { entrypoint: 'astro/assets/services/sharp' },
    // Configuration globale pour les images
    defaultOptions: {
      format: 'webp',
      quality: 80,
    }
  },
  // Suppressing the server import issues by using output: 'static'
  output: 'static',
  // Configuration pour le déploiement sur Netlify
  site: process.env.NETLIFY ? process.env.URL : 'http://localhost:3000',
  base: '/',
  vite: {
    ssr: {
      noExternal: ['astro-navbar'],
    },
    optimizeDeps: {
      exclude: ['astro-icon']
    },
    build: {
      // Ensure commonjs modules are properly handled
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true
      }
    }
  }
});