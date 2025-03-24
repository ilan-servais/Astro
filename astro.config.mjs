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
  vite: {
    ssr: {
      noExternal: ['astro-navbar'],
    },
    resolve: {
      // Removed problematic alias that's causing the error
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