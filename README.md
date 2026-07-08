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

## Structure

```
backend/    API REST Node (models = Ex.4, repositories = Ex.6, sql = Ex.5/7, /health = Ex.3)
frontend/   React + Bootstrap (Vite) — page « / » = tableau Kanban (Ex.8)
docs/       diagrammes + captures pour le worksheet
```

> Ce dépôt ne contient que le code de l'application (projet GitHub).
> Les documents de l'étude de cas (énoncé, worksheet, réponses rédigées, wireframes, TODO)
> vivent dans le dossier parent `etude_de_cas_2/`.

## Suivi

- Jira : projet **EDC2** — https://rukundoronaldo4.atlassian.net/jira/software/projects/EDC2/boards/68
- Checklist : `../TODO.md`
- Livrable : `../sujet/FT_Kanban-B2.docx` (worksheet à rendre sur le LMS)
