# Balsamiq — Fiche de construction du wireframe (Tableau Kanban Jaydee)

Recrée ce wireframe dans ton projet Balsamiq en ~5 min.
Lien projet : https://balsamiq.cloud/smq3s6u/p7jinbs/rA310

## Canevas
- Format : **Web / Desktop**, largeur ~1100–1200 px.
- Police Balsamiq par défaut (style esquisse). Garde tout en gris/noir, sauf la pastille de couleur des cartes.

## 1. Barre supérieure (en haut, pleine largeur)
| Widget Balsamiq | Contenu | Position |
|---|---|---|
| **Rectangle** | (conteneur de la barre) | tout en haut, pleine largeur, hauteur ~60px |
| **Icon** (image/logo) | petit carré « ▣ » | gauche de la barre |
| **Title / Subtitle** | `KANBAN — Jaydee Production` | à droite du logo |
| **Button** | `+ Nouvelle tâche` | aligné à droite de la barre |

## 2. Tableau Kanban — 4 colonnes
Pose **4 conteneurs identiques** côte à côte (widget **Container / Rectangle**), largeur égale, même hauteur (~430px).

Pour CHAQUE colonne :
1. **Sub-title** centré en haut = le nom de la colonne (voir ci-dessous).
2. Une **Horizontal Rule** (trait) sous le titre.
3. Les **cartes de tâches** empilées dessous (voir modèle de carte).

Noms des 4 colonnes (de gauche à droite) :
1. `À FAIRE`
2. `EN COURS`
3. `À CONTRÔLER`
4. `TERMINÉ`

## 3. Modèle de carte de tâche (widget **Card** ou **Rectangle**)
Chaque carte contient (de haut en bas) :
1. **Ligne haute** : référence `#OF-1021` (gauche) + **badge priorité** (droite) — Haute / Moyenne / Basse.
2. **Nom de la tâche** en gras (ex. `Moule A12`).
3. **Badge de statut** = nom de la colonne (À Faire / En Cours / À Contrôler / Terminé).
4. **Ligne couleur** : pastille remplie + `couleur : E74C3C` (hex RGB sans `#`, conforme à la validation).
5. **Réf. pièce + quantité** (ex. `PL-A12 · Qté 500`).
6. **Pied de carte** : **avatar** (initiales) + nom de l'assigné (user) à gauche, **date d'échéance** 📅 à droite.

### Cartes à placer (1 couleur distincte par tâche)
| Colonne | Réf | Tâche | Couleur (hex sans #) | Priorité | Assigné | Échéance |
|---|---|---|---|---|---|---|
| À FAIRE | #OF-1021 | Moule A12 | E74C3C (rouge) | Haute | M. Leroy | 18/06 |
| À FAIRE | #OF-1022 | Réf X90 | 8E44AD (violet) | Basse | S. Diallo | 22/06 |
| EN COURS | #OF-1018 | Pièce B07 | 3498DB (bleu) | Moyenne | J. Dupont | 17/06 |
| À CONTRÔLER | #OF-1009 | Lot C33 | E67E22 (orange) | Haute | A. Koffi | 16/06 |
| TERMINÉ | #OF-0998 | Pièce D01 | 27AE60 (vert) | Basse | J. Dupont | 14/06 |

> 5 tâches + 4 colonnes = cohérent avec les exercices 7 (seed SQL) et 8/9 (affichage / ajout).

> **⚠️ MVP vs vision** : le modèle de données réel (`Tache` = id, nom, couleur, colonne) ne gère QUE le nom, la couleur et la colonne. Priorité, assigné, échéance, référence et quantité illustrent la **vision produit** → à classer dans les **« fonctionnalités exclues du MVP »** (Exercice 1). La carte MVP minimale n'affiche que **nom + couleur** dans sa **colonne**.

### En-tête : ajouter aussi une **barre de recherche** (widget Search Box) à gauche du bouton « + Nouvelle tâche ».

## 4. Modale « Créer une tâche » (pièce MVP — ouverte par « + Nouvelle tâche »)
Deuxième écran (widget **Dialog / Window**) qui matérialise l'ajout de tâche (Exercice 9). Ne contient QUE les champs du MVP :
| Élément | Widget Balsamiq | Contenu |
|---|---|---|
| Titre | Title | `Créer une tâche` |
| Champ nom | Text Input + label | `Nom de la tâche *` — placeholder « Ex. : Moule A12 » |
| Aide nom | Subtitle gris | « Obligatoire — le nom doit être renseigné » |
| Champ couleur | Text Input + pastille | `Couleur (hex RGB, sans #) *` — placeholder « Ex. : 3498DB » |
| Aide couleur | Subtitle gris | « 6 caractères hex (0-9, A-F), sans le dièse » |
| Colonne destination | Rectangle « verrouillé » 🔒 | « À Faire » (assignée automatiquement) |
| Aide colonne | Subtitle gris | « Si la colonne n'existe pas → erreur 400 » |
| Boutons | Buttons | `Annuler` · `＋ Créer la tâche` |

> Cette modale couvre le **flux d'ajout du MVP** (Exercice 9). Marque-la « MVP ».

## 5. Modale « Détail de la tâche » (vision — clic sur une carte)
Troisième écran (Dialog) en **lecture/édition**, illustrant la vision produit. Champs : nom, colonne/statut (dropdown), priorité (dropdown), couleur (pastille + hex), réf. pièce, quantité, assigné (dropdown avatar), échéance (date), description (textarea), ligne « créée/modifiée le… », boutons `Supprimer` · `Annuler` · `Enregistrer`.

> Tous les champs au-delà de **nom / couleur / colonne** = **hors MVP** (à mettre en « fonctionnalités exclues »).

## 6. Détails optionnels (bonus « logique du wireframe »)
- Sous chaque colonne vide, un **placeholder pointillé** « déposer une carte ici » (montre le drag & drop Kanban).
- Un petit **compteur** entre parenthèses à côté du titre de colonne, ex. `À FAIRE (2)`.

## 7. Export
- **Project ▸ Export ▸ Export current mockup to PNG** → insère le PNG dans le worksheet (Exercice 1).
- Dans le worksheet, indiquer la **source** : « Maquette réalisée sous Balsamiq par le stagiaire ».

---
**Astuce :** si tu préfères ne pas refaire Balsamiq, ouvre `kanban-wireframes.html` (les 3 écrans dans un seul fichier) dans un navigateur et fais une capture d'écran — le rendu est déjà au style esquisse. Fichiers individuels disponibles : `kanban-wireframe.html` (tableau), `kanban-modal.html` (détail).
