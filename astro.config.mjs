import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx()
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    defaultOptions: {
      format: 'webp',
      quality: 80,
    }
  },
  output: 'static',
  build: {
    // Assurer la génération de tous les fichiers HTML, y compris pour les routes dynamiques
    format: 'directory'
  },
  vite: {
    ssr: {
      noExternal: ['astro-navbar']
    },
    build: {
      rollupOptions: {
        external: ['astro/server']
      },
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true
      }
    }
  }
});