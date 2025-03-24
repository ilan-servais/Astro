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
  vite: {
    ssr: {
      noExternal: ['astro-navbar'],
      // Avoid missing ./server specifier error
      external: ['astro/server']
    },
    resolve: {
      alias: {
        // Add explicit alias for Astro server imports
        'astro/server': 'astro/dist/server/index.js'
      }
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