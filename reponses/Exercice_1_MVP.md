# Exercice 1 — Définition du MVP & wireframe

> Application Kanban pour l'entreprise **Jaydee** (fabrication de pièces plastique par injection).

---

## 1. Hypothèse de départ du MVP

> *Nous pensons que* fournir aux équipes de production de Jaydee un **tableau Kanban numérique** affichant en temps réel les ordres de fabrication (tâches) répartis par étape de production *permettra de* redonner de la **visibilité sur l'avancement** et de fluidifier le pilotage de l'atelier.
>
> *Nous saurons que c'est vrai lorsque* les opérateurs et le responsable de production consulteront le tableau plutôt que les tableurs/feuilles papier, et que les pertes de temps liées au manque de visibilité (recherche d'information, erreurs de priorité) diminueront.

Hypothèse minimale à valider : **un simple tableau visuel partagé suffit-il à améliorer la visibilité et la coordination ?** Le MVP doit le prouver avec le strict minimum : voir les tâches dans leurs colonnes, et en ajouter de nouvelles.

## 2. Cible (utilisateurs)

- **Utilisateur principal** : le **responsable de production / chef d'atelier** de Jaydee, qui doit suivre l'état d'avancement des ordres de fabrication et arbitrer les priorités.
- **Utilisateurs secondaires** : les **opérateurs de production** (presses à injecter, contrôle qualité) qui consultent les tâches à réaliser et leur état.

## 3. Problème utilisateur résolu

Face à la hausse des commandes, à la diversité des références et aux délais courts, Jaydee souffre de :
- **manque de visibilité** sur l'état d'avancement des ordres de fabrication ;
- **changements de priorité fréquents** mal répercutés ;
- **stocks intermédiaires non maîtrisés**, retards, erreurs de planification.

→ Conséquence : baisse de productivité et de réactivité. Le besoin réel : **un outil de pilotage visuel, simple et partagé**, montrant *qui fait quoi et où en est chaque tâche*.

## 4. Proposition de valeur

> Un **tableau Kanban numérique simple** qui rend visible, en un coup d'œil, l'avancement de toutes les tâches de production réparties par étape (À Faire → En Cours → À Contrôler → Terminé).
> Chaque tâche est une **carte colorée** facilement identifiable. L'équipe gagne en **transparence**, en **réactivité** et limite le **travail en cours**, sans logiciel lourd ni formation.

## 5. Fonctionnalités INCLUSES dans le MVP

| # | Fonctionnalité | Lien exercices |
|---|---|---|
| F1 | **Afficher le tableau Kanban** sur la route « / » avec ses colonnes (À Faire, En Cours, À Contrôler, Terminé) | Ex. 8 |
| F2 | **Afficher les tâches** sous forme de cartes, chacune dans sa colonne | Ex. 8 |
| F3 | Chaque tâche affiche son **nom** et sa **couleur** (couleur unique par tâche) | Ex. 4, 7 |
| F4 | **Charger les données** depuis l'API `GET /api/taches` (tâches + leur colonne, en JSON) | Ex. 8 |
| F5 | **Ajouter une nouvelle tâche** (`POST /api/taches`), placée automatiquement dans « À Faire » ; erreur **400** si cette colonne n'existe pas | Ex. 9 |
| F6 | **Validations** : nom obligatoire ; couleur = hexadécimal RGB sans `#` | Ex. 4 |
| F7 | **Persistance** des colonnes et tâches en base de données H2 | Ex. 5, 6, 7 |

## 6. Fonctionnalités EXCLUES du MVP (vision / versions futures)

> Ces éléments apparaissent dans le wireframe pour illustrer la **vision produit**, mais ne font **pas** partie du périmètre MVP (le modèle de données ne gère que `nom`, `couleur`, `colonne`).

| Fonctionnalité exclue | Pourquoi hors MVP |
|---|---|
| **Glisser-déposer** d'une carte d'une colonne à l'autre | Pas d'endpoint de déplacement dans le périmètre ; le MVP valide d'abord l'affichage |
| **Éditer / supprimer** une tâche (PUT / DELETE) | Non demandé ; le MVP se limite à lire + créer |
| **Priorité** (Haute / Moyenne / Basse) | Champ absent du modèle `Tache` |
| **Assignation à un utilisateur** (avatar) | Pas de gestion d'utilisateurs dans le MVP |
| **Date d'échéance**, **référence pièce**, **quantité**, **description** | Champs hors modèle de données MVP |
| **Recherche / filtres** de tâches | Optimisation d'usage, non essentielle à la validation de l'hypothèse |
| **Authentification / rôles**, **multi-tableaux**, **notifications**, **statistiques** | Hors périmètre — itérations ultérieures |

## 7. Wireframe

Maquette réalisée sous **Balsamiq** par le stagiaire — 3 écrans.
*(Insérer ici les captures : `wireframe/kanban-wireframes.png` — ou les captures individuelles.)*

- **Écran 1 — Tableau Kanban** (route « / ») : 4 colonnes, cartes colorées (nom + couleur), bouton « + Nouvelle tâche ».
- **Écran 2 — Créer une tâche** (MVP) : champ **nom** (obligatoire), champ **couleur** (hex sans `#`), colonne de destination verrouillée sur **« À Faire »** (→ illustre l'erreur 400 si absente).
- **Écran 3 — Détail de la tâche** (vision) : champs étendus (priorité, assigné, échéance, etc.) montrant les évolutions futures.

> **Source** : Maquette réalisée sous Balsamiq par le stagiaire (https://balsamiq.cloud/smq3s6u/p7jinbs/rA310).

---

### Cohérence avec la grille d'évaluation
*Critère « Aspects envisagés pour le MVP, logique du wireframe »* : l'hypothèse, la cible et le problème sont alignés sur le contexte Jaydee ; le périmètre inclus correspond exactement aux exercices 4 à 9 ; les fonctionnalités exclues justifient les champs « bonus » du wireframe sans contredire le modèle de données.
