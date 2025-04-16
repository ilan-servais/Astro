import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    alpinejs()
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    defaultOptions: {
      format: 'webp',
      quality: 80,
    }
  },
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['astro-navbar', 'three']
    },
    optimizeDeps: {
      include: ['three']
    },
    build: {
      // Aide à résoudre certains problèmes de compatibilité
      cssCodeSplit: true,
      minify: true,
      assetsInlineLimit: 4096
    }
  }
});