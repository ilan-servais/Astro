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
  // Important: Explicitement spécifier static comme output
  output: 'static',
  // Éviter d'utiliser site sur Netlify pour éviter des problèmes de chemin
  vite: {
    // Ne pas traiter astro-navbar comme un module externe
    ssr: {
      noExternal: ['astro-navbar']
    },
    // Résoudre les problèmes de compilation en désactivant l'optimisation pour certains packages
    optimizeDeps: {
      exclude: ['astro-icon']
    },
    // Configuration pour éviter les erreurs d'importation
    build: {
      // Ignorer les erreurs d'importation pour astro/server
      rollupOptions: {
        external: ['astro/server']
      },
      // Assurer que les modules CommonJS sont correctement traités
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true
      }
    }
  }
});