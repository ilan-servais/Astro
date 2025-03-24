import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['astro-navbar']
  },
  optimizeDeps: {
    exclude: ['astro-icon']
  },
  build: {
    // Important: Externaliser astro/server pour éviter les erreurs
    rollupOptions: {
      external: ['astro/server']
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  }
});
