*01.12.2025*
# Mon aventure pour apprendre React… depuis zéro !

Comme je veux apprendre React depuis la base, je me suis dit qu’il serait plus malin de construire **ma propre configuration** au lieu d’utiliser un framework clé en main.

## Le début : npm, React… et la désillusion
J’ai commencé par initialiser mon projet avec `npm` et installer React.  
Et là… **rien ne fonctionnait.**

Pourquoi ?  
Parce que Node ne peut tout simplement **pas exécuter du JSX**. Il me fallait donc un traducteur pour convertir le JSX en JavaScript.  
Enter **Babel**.

Après l’avoir configuré, je pouvais enfin traduire mes fichiers JSX.  
Mais vous savez quoi ?  
J’ai encore rencontré un problème !

## Le souci des multiples fichiers JS
Si je crée plusieurs fichiers JS, je dois tous les inclure dans le HTML… dans le bon ordre… et honnêtement : **non merci**.

Pour régler ça, j’ai choisi d’utiliser **Browserify**, sans trop chercher : il avait l’air simple d’utilisation et compatible avec Babel, ce qui était essentiel dans mon cas.

## Puis vint TypeScript…
Mon app fonctionnait, mais j’avais aussi envie d’apprendre **TypeScript** sur ce projet.  
Donc j’ai “joyeusement” démonté toute ma config pour ajouter TypeScript.

Ça a été assez sport : beaucoup de recherche, pas mal de casse-tête entre les configs TypeScript, Babel et Browserify…  
Mais au final, tout fonctionnait.

J’ai ensuite ajouté **ESLint** pour détecter automatiquement les erreurs TypeScript et React directement dans VS Code.

Après environ **6 à 7 heures** de configuration (lecture de docs, compréhension, débogage…), tout marchait enfin.

## L’arrivée de React Router 7… et le drame
Je voulais ajouter React Router pour gérer plusieurs pages.  
J’installe React Router 7…  
… et je découvre qu’il est **totalement incompatible avec Browserify**, car il repose énormément sur les modules ES, entre autres.

Donc à ce moment-là :  
**Je suis dégoûté** (vraiment), et j’écris cette partie du site en soupirant.

J’hésitais entre :  
- passer à un bundler moderne comme Webpack,  
- ou installer une vieille version de React Router compatible Browserify.

Finalement, j’ai décidé de partir sur une **nouvelle configuration**, probablement Webpack… mais j’ai fait une pause.

*02.12.2025*
## Nouveau jour, nouvelle motivation… et changement de plan
Bon, finalement, on est le lendemain.  
J’ai travaillé tard, et après ma pause j’ai continué un peu.

Et j’ai choisi… **Rollup** !  
D’après ce que j’ai lu, il est :  
- plus récent que Browserify,  
- plus léger que Webpack,  
- compatible avec plein d’outils,  
- plus optimisé.

Mais évidemment, la configuration n’est pas simple.  
Je devais aussi mieux comprendre celles de TypeScript et Babel pour que tout fonctionne ensemble.

À ce moment-là, j’avais une config basique permettant de faire une app simple en TypeScript.  
Malheureusement, je n’avais plus de temps : il était 18h20, je n’avais toujours pas dormi, et je travaillais de **23h à 7h**…

*04.12.2025*
## Deux jours plus tard : victoire !
On est deux jours après, et je me suis forcé à mieux comprendre Rollup avec un projet vierge… qui est finalement devenu mon projet principal.

Maintenant **tout fonctionne correctement** :  
- J’ai une application React  
- avec des routes  
- qui chargent des fichiers Markdown dans un template  
→ ce qui me permet d’ajouter facilement des documents à mon site.

## La configuration Rollup
Dans mon fichier Rollup, j’ai deux modes :

- `npm run start` → mode développement  
  - serveur local  
  - hot reload  

- `npm run build` → mode production  
  - minification du JS  

Et franchement, je suis plutôt **content** de ma configuration, surtout que c’est la première fois que j’en fais une complète.

J’ai des connaissances assez larges dans plusieurs domaines en informatique, donc ça m’aide beaucoup à apprendre rapidement ce genre de trucs.

*05.12.2025*
## Nouveau problème avec React Router… et pas des moindres
J’ai découvert un autre souci avec React Router.  
Sans serveur web, rien ne fonctionne. Pourquoi ?  
Parce que React Router utilise l’**API History** pour gérer les routes en **CSR** (client-side rendering).

En gros, il faut absolument un serveur capable de **rediriger toutes les requêtes vers `index.html`**, quelle que soit l’URL demandée.  
Sauf que… après vérification, cette fonctionnalité n’est tout simplement **pas disponible sur GitHub Pages**.

Donc forcément : ça casse.

Résultat, je vais devoir refactoriser mon code et me pencher sérieusement sur le fonctionnement du système de routage basé sur le **hashtag** (`#/ma-route`).  
Ce n’était pas prévu, mais bon… bienvenue dans le merveilleux monde du développement. 😅

Bon, bah j’ai réglé ça rapidement, merci Internet.
Dans React Router, on peut construire plusieurs types de **Data Routes** que les différents providers peuvent utiliser.
Il existe également un constructeur de Data Route basé sur la technique des hashtags.
Maintenant, le projet n’a plus besoin de serveur, génial !
  
Par contre, je n’ai toujours pas inclus d’image dans le site, donc je vais devoir revenir sur la configuration de Rollup un peu plus tard pour voir comment gérer cela, sûrement avec des plugins supplémentaires.

## Maintenant… place au CSS !
La configuration est prête, l’environnement tourne.  
**Je peux enfin reapprendre et mettre un coup de CSS !**