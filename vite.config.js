import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['astro-navbar']
  },
  optimizeDeps: {
    exclude: ['astro-icon']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  }
});
