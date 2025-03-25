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
  vite: {
    ssr: {
      noExternal: ['astro-navbar']
    },
    build: {
      // Aide à résoudre certains problèmes de compatibilité
      cssCodeSplit: true,
      minify: true,
      assetsInlineLimit: 4096
    }
  }
});