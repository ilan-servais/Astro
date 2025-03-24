import { defineConfig } from 'vite';

export default defineConfig({
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
});
