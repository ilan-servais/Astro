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
  // Important: utilisation du mode statique sans format particulier
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['astro-navbar']
    }
  }
});