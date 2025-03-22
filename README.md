Portfolio personnel optimisé créé avec **[Astro 4.0](https://astro.build/)** et **[Tailwind CSS](https://tailwindcss.com/)**, offrant d'excellentes performances et une expérience visuelle attrayante.

## Caractéristiques principales

✅ **Optimisé pour les performances** - Score Lighthouse élevé grâce à l'optimisation des images et au chargement efficace des ressources

✅ **Mode jour/nuit** - Thème personnalisé avec couleur sombre `#120D16` et fonctionnalité de bascule automatique

✅ **Responsive Design** - Adapté à tous les appareils, du mobile aux grands écrans

✅ **Techniquement avancé** - Utilisation des formats SVG et WebP pour des images légères et parfaitement nettes

## Technologies et intégrations

Ce projet utilise les intégrations suivantes :

- **@astrojs/mdx** - Pour le contenu structuré des projets
- **@astrojs/tailwind** - Pour le style avec organisation des classes
- **astro-icon** - Pour les icônes optimisées
- **astro-seo** - Pour l'optimisation du référencement
- **astro-navbar** - Pour la navigation responsive

## Structure du projet

Dans ce projet Astro, vous trouverez les dossiers et fichiers suivants :

```
/
├── public/
│   └── favicon.ico
|   ├── hero.png
|   └── ...
├── src/
|   ├── assets/
|   |   ├── images/
│   │   |   ├── hero.png
|   |   |   └── ...
│   ├── components/
│   │   ├── ui/
│   │   |   ├── BackToTop.astro
|   |   |   └── ...
│   │   ├── About.astro
│   │   ├── Contact.astro
|   |   └── ...
│   ├── content/
│   │   ├── projects/
│   │   │   ├── project-1.md
│   │   │   ├── project-1.md
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   ├── tests/
│   │   ├── index.spec.ts
├── package.json
├── astro.config.mjs
└── ...
```

Astro recherche des fichiers `.astro`, `.md` ou `.mdx` dans le répertoire `src/pages/`. Chaque page est exposée comme une route basée sur son nom de fichier.

`src/components/` est l'endroit où nous mettons tous les composants Astro et de même `src/layouts/` pour les mises en page.

Les images peuvent être placées dans `src/images/`.

Le contenu du blog et de la documentation est créé sous forme de collections de fichiers Markdown ou MDX dans `src/content`.

Tous les fichiers statiques, par exemple les images, peuvent être placés dans le répertoire `public/`.

## Commandes

Toutes les commandes sont exécutées depuis la racine du projet, depuis un terminal :

| Commande            | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installe les dépendances                           |
| `npm run dev`       | Démarre le serveur de développement local à `localhost:3000` |
| `npm run build`     | Construisez votre site de production dans `./dist/` |
| `npm run preview`   | Prévisualisez votre build localement, avant de déployer |
| `npm run astro ...` | Exécutez des commandes CLI comme `astro add`, `astro preview` |
| `npm run astro --help` | Obtenez de l'aide pour utiliser l'interface de ligne de commande Astro |
| `npm run test:e2e`  | Exécutez les tests Playwright                      |

## Contribuer

Si vous avez des idées, des suggestions ou trouvez des bugs, n'hésitez pas à ouvrir une discussion, un problème ou à créer une demande de tirage.
Cela serait très utile pour nous tous et nous serions heureux d'écouter et d'agir.

## Crédits

Les ressources sont conçues par (Freepik)[www.freepik.com].
