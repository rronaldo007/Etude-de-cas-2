# TODO — Étude de cas KANBAN (CDA Bloc 2)

> Application Kanban pour l'entreprise **Jaydee** (injection plastique).
> Stack visé : React + Bootstrap (Vite) / API REST Node.js / ORM (repository) / base **H2** sur disque.
> Livrable final : worksheet **FT_Kanban-B2.docx** rempli + captures + diagrammes, déposé sur le LMS.

---

## 0. Stack & setup
- [x] **Stack décidé : Node.js** (2026-06-22) — l'énoncé/BRIEF le dit explicitement. Mapper le vocabulaire Java vers Node : entité → modèle ORM (Sequelize/TypeORM) · repository → module DAO · `Long` → number/BIGINT · **H2 → SQLite** (fichier sur disque, équivalent Node) ou connecteur JDBC. Noter chaque substitution dans la réponse.
- [ ] **Choisir l'ORM/langage** : (a) TypeScript + TypeORM (`@Entity`/`Repository<T>`) ou (b) JavaScript + Sequelize (modèles + DAO) — décide le contenu d'Ex. 2/4/6
- [ ] **`git init`** à la racine du projet + `.gitignore` (node_modules, .env, *.sqlite/*.db, dist) + commit initial
- [ ] Mettre **nom et prénom** en haut du worksheet
- [ ] Préparer le **dossier projet** (voir « Structure projet cible » ci-dessous)
- [ ] Choisir l'approche : **(A)** projet réel exécutable puis remplir le worksheet, ou **(B)** rédiger les réponses seulement

## 0bis. Structure projet cible (arborescence — Ex. 2)
> Monorepo `backend/` + `frontend/`, dépôt Git à la racine. Les noms de dossiers `models/` et `repositories/` correspondent directement aux Ex. 4 et Ex. 6.

```
etude_de_cas_2/                  # racine du dépôt Git
├── .git/
├── .gitignore                   # node_modules, .env, *.sqlite, dist
├── README.md
├── backend/                     # API REST Node
│   ├── package.json
│   ├── .env                     # PORT, DB_FILE… (Ex. 3)
│   ├── .env.example
│   ├── src/
│   │   ├── index.js             # point d'entrée serveur + route /health (Ex. 3)
│   │   ├── app.js               # app Express (montage des routes)
│   │   ├── config/db.js         # connexion ORM → SQLite (fichier disque)
│   │   ├── models/              # entités Colonne + Tache (Ex. 4)
│   │   ├── repositories/        # colonneRepository + tacheRepository (Ex. 6)
│   │   └── routes/taches.js     # GET (Ex. 8) + POST (Ex. 9) /api/taches
│   ├── sql/
│   │   ├── schema.sql           # CREATE colonne + tache (Ex. 5)
│   │   └── seed.sql             # INSERT 4 colonnes + 5 tâches (Ex. 7)
│   └── tests/                   # tests backend (Ex. 8, Ex. 9)
├── frontend/                    # React + Bootstrap (Vite)
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── pages/Board.jsx      # route « / » : tableau Kanban (Ex. 8)
│       ├── components/          # Column.jsx, TaskCard.jsx
│       ├── api/taches.js        # appel fetch vers /api/taches
│       └── __tests__/           # test frontend (Ex. 8)
└── docs/                        # diagrammes + captures pour le worksheet
```
> Note : extensions `.js/.jsx` si JavaScript, `.ts/.tsx` si TypeScript (selon le choix ci-dessus).

## A. Documents sources (entrées)
- [ ] Énoncé `Enonce_Kanban-B2.pdf` (référence)
- [ ] Worksheet `FT_Kanban-B2.docx` (à rendre)
- [ ] Capture LMS (instructions de dépôt)

## B. Visuels, diagrammes & maquettes (à produire)
- [x] **Wireframe / maquette** — 3 écrans générés dans `wireframe/` (board + modale création MVP + modale détail) → `kanban-wireframes.png`. Build sheet Balsamiq à jour.
- [ ] **Diagramme d'architecture** — modèle en couches (React → API REST Node → ORM/repository → H2)
- [ ] **Diagramme de base de données** (MCD/MLD ou ER) — `colonne` 1—N `tache`
- [ ] *(Optionnel)* **Diagramme de séquence** — flux `POST /api/taches` (Ex.9)
- [ ] **Captures à réaliser** : `curl /health`, console backend, console frontend/Vite, UI Kanban, tests qui passent

## C. Les 9 exercices

### Exercice 1 — MVP + wireframe *(Analyser/maquetter)* — rédigé : `reponses/Exercice_1_MVP.md`
- [x] Hypothèse de départ du MVP
- [x] Cible (utilisateurs)
- [x] Problème utilisateur résolu
- [x] Proposition de valeur
- [x] Fonctionnalités **incluses**
- [x] Fonctionnalités **exclues**
- [x] **Wireframe** (3 écrans) — à insérer dans le worksheet

### Exercice 2 — Init projet *(Architecture)*
- [ ] Arborescence finale
- [ ] `package.json` backend
- [ ] `package.json` frontend
- [ ] Commande de création du projet React (Vite)

### Exercice 3 — Vérifier le démarrage *(Architecture)*
- [ ] Contenu de `.env`
- [ ] Sortie console backend
- [ ] Sortie console frontend
- [ ] **Capture `curl /health`**

### Exercice 4 — Entités + validation *(Architecture)*
- [ ] Code complet modèle **Colonne** (id: Long, intitule: String)
- [ ] Code complet modèle **Tache** (id, nom, couleur, colonne)
- [ ] Validation : `nom` renseigné
- [ ] Validation : `couleur` = RGB hex **sans `#`**

### Exercice 5 — Schéma H2 *(BDD relationnelle)*
- [ ] Script SQL **CREATE** complet (tables `colonne` + `tache`, clés/contraintes)

### Exercice 6 — Couche repository *(Accès aux données)*
- [ ] `colonneRepository`
- [ ] `tacheRepository`

### Exercice 7 — Données de seed *(BDD relationnelle)*
- [ ] Script SQL **INSERT** : 4 colonnes + 5 tâches, **couleurs distinctes**

### Exercice 8 — Page d'accueil + tests *(Architecture)*
- [ ] Route backend `GET /api/taches` (JSON, tâches + colonne)
- [ ] **Test backend**
- [ ] Composant React (board : colonnes + cartes)
- [ ] Page `/` chargeant `/api/taches`
- [ ] **Test frontend**

### Exercice 9 — Ajout de tâche + test *(Architecture)*
- [ ] Backend `POST /api/taches` → place auto en colonne « A Faire »
- [ ] Retour **400** si « A Faire » absente
- [ ] Réponse = tâche créée en JSON
- [ ] **Test**

## D. Assemblage & relecture (sortie)
- [ ] Coller chaque réponse sous sa question dans `FT_Kanban-B2.docx`
- [ ] Insérer captures & diagrammes (**indiquer la source**)
- [ ] Vérifier vs grille : logique MVP, modèle en couches + injection, qualité SQL + contraintes d'intégrité + conventions, usage ORM/Spring Data
- [ ] Exporter (PDF si requis) et **déposer sur le LMS**

---
_Compétences évaluées : (1) Analyser/maquetter — (5,7) BDD relationnelle — (6) Accès aux données SQL/NoSQL — (2,3,4,8,9) Architecture logicielle._
