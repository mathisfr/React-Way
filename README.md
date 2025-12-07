**__en cours de développement...__**

# Projet React avec TypeScript et Rollup

Ce projet est une configuration personnalisée utilisant React, TypeScript et Rollup.  
Il a été construit manuellement pour comprendre en profondeur le fonctionnement d’un environnement moderne sans dépendre d’un framework préconfiguré.

## Fonctionnalités

- Application React en TypeScript
- Routage client basé sur React Router
- Chargement de fichiers Markdown dans des templates React
- Configuration Rollup (développement et production)

## Structure du projet
  
```
babel.config.json
eslint.config.js
package.json
package-lock.json
rollup.config.mjs
tsconfig.json
build/
  bundle.js
  index.html
  style.css
src/
  app.css
  app.tsx
  index.tsx
  composants/
  exemples/
  notes/
  pages/
  router/
types/
  markdown.d.ts
```

## Scripts disponibles

### Développement
```
npm run start
```
Pour le développement avec hot reload pour le build automatique de rollup.  
### Production
```
npm run build
```
Génère les fichiers optimisés dans le dossier de sortie.

## Installation

### Cloner le dépôt
```
git clone <projet>
```

### Installer les dépendances
```
npm install
```

### Lancer le projet
```
npm run start
```

## Technologies utilisées

- React
- TypeScript
- Rollup
- React Router
- Babel
- ESLint

## Objectif du projet

Ce dépôt sert de base d’apprentissage pour :

- approfondir React
- maîtriser une configuration Rollup complète
- comprendre la chaîne de compilation JavaScript moderne
- travailler avec TypeScript