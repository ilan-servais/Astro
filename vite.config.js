import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
      '@layouts': path.resolve('./src/layouts')
    }
  },
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
