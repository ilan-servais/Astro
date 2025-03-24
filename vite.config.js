import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['astro-navbar'],
    external: ['astro/server']
  },
  resolve: {
    alias: {
      'astro/server': 'astro/dist/server/index.js'
    }
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
