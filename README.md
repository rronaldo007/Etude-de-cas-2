# Kanban Jaydee — Étude de cas 2 (CDA Bloc 2)

Application Kanban pour l'entreprise **Jaydee** (fabrication de pièces plastique par injection) :
un tableau de pilotage visuel des ordres de fabrication.

## Stack

| Couche | Technologie |
|--------|-------------|
| Présentation (frontend) | React + Bootstrap (Vite) |
| API REST | Node.js (Express) |
| Accès aux données | ORM **Prisma** + couche repository |
| Persistance | H2 → **MySQL** |

> Stack fixée par l'énoncé. `H2` (base embarquée Java) est substitué par `MySQL` côté Node,
> piloté par l'ORM Prisma ; la substitution est documentée dans les réponses.

## Fonctionnalités

- Tableau Kanban à 4 colonnes : À Faire, En cours, En contrôle qualité, Terminé
- Création d'une tâche (modale) et modification / suppression (modale détail) — CRUD complet
- Déplacement des cartes d'une colonne à l'autre par glisser-déposer
- Choix de la couleur de la tâche via une palette de pastilles
- Recherche d'une tâche par nom, référence ou numéro d'ordre de fabrication
- Interface responsive (mobile et bureau), fidèle à la maquette Figma

## Structure

```
backend/
  prisma/          schema Prisma, migrations, seed, création de la base
  src/
    config/        client Prisma
    models/        schemas de validation Zod (Ex.4)
    repositories/  accès aux données (Ex.6)
    routes/        endpoints REST : /api/taches, /api/colonnes, /health (Ex.3)
frontend/
  src/
    api/           appels fetch vers l'API
    components/    TopBar, Column, TaskCard, modales, ColorPicker
    pages/         Board — le tableau Kanban (Ex.8)
    styles/        kanban.css
    __tests__/     tests Vitest
```

> Ce dépôt ne contient que le code de l'application (projet GitHub).
> Les documents de l'étude de cas (énoncé, worksheet, réponses rédigées, wireframes, TODO)
> vivent dans le dossier parent `etude_de_cas_2/`.

## Installation

### Prérequis

- Node.js 18+
- MySQL ou MariaDB en local (port 3306)

### Étapes

```bash
# 1. (Optionnel) Créer un utilisateur MySQL dédié — uniquement s'il n'existe pas déjà.
#    Tu peux aussi réutiliser un compte existant (ex. root) et sauter cette étape.
CREATE USER 'kanban'@'localhost' IDENTIFIED BY 'kanban';
GRANT ALL PRIVILEGES ON *.* TO 'kanban'@'localhost';

# 2. Configurer la connexion : copier le fichier d'exemple puis adapter DATABASE_URL
#    (mettre les identifiants d'un utilisateur MySQL existant)
cp backend/.env.example backend/.env

# 3. Tout installer et préparer la base en une commande
#    (npm install + création de la base + tables via migrations + seed)
npm run setup

# 4. Lancer l'application (backend :3000 + frontend :5173)
npm run dev
```

Le tableau Kanban est alors disponible sur http://localhost:5173
(le frontend appelle l'API via le proxy `/api` → `http://localhost:3000`).

`npm run setup` enchaîne automatiquement : création de la base si elle n'existe pas
(`CREATE DATABASE IF NOT EXISTS` à partir du `DATABASE_URL`), création des tables
(`prisma migrate deploy`) puis insertion des données de départ (`prisma db seed`).
Prérequis : le serveur MySQL tourne et l'utilisateur du `DATABASE_URL` existe avec
les droits (Prisma ne peut pas créer l'utilisateur MySQL lui-même).

### Scripts utiles

| Commande | Effet |
|----------|-------|
| `npm run setup` | Installe tout + crée la base/les tables + insère les données |
| `npm run dev` | Lance backend + frontend en parallèle |
| `npm test` | Lance les tests backend (Jest) puis frontend (Vitest) |
| `npm run db:migrate -w backend` | Applique les migrations Prisma |
| `npm run db:seed -w backend` | (Ré)insère les colonnes et tâches de départ |

## Suivi

- Jira : projet **EDC2** — https://rukundoronaldo4.atlassian.net/jira/software/projects/EDC2/boards/68
- Checklist : `../TODO.md`
- Livrable : `../sujet/FT_Kanban-B2.docx` (worksheet à rendre sur le LMS)
