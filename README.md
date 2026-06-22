# Kanban Jaydee — Étude de cas 2 (CDA Bloc 2)

Application Kanban pour l'entreprise **Jaydee** (fabrication de pièces plastique par injection) :
un tableau de pilotage visuel des ordres de fabrication.

## Stack

| Couche | Technologie |
|--------|-------------|
| Présentation (frontend) | React + Bootstrap (Vite) |
| API REST | Node.js (Express) |
| Accès aux données | ORM + couche repository |
| Persistance | H2 → **SQLite** (fichier sur disque, équivalent Node) |

> Stack fixée par l'énoncé. `H2` est substitué par `SQLite` côté Node (équivalent fichier-sur-disque) ;
> la substitution est documentée dans les réponses.

## Structure

```
backend/    API REST Node (models = Ex.4, repositories = Ex.6, sql = Ex.5/7, /health = Ex.3)
frontend/   React + Bootstrap (Vite) — page « / » = tableau Kanban (Ex.8)
docs/       diagrammes + captures pour le worksheet
reponses/   réponses rédigées des exercices
wireframe/  maquettes Balsamiq (Ex.1)
```

## Suivi

- Jira : projet **EDC2** — https://rukundoronaldo4.atlassian.net/jira/software/projects/EDC2/boards/68
- Checklist : `TODO.md`
- Livrable : `FT_Kanban-B2.docx` (worksheet à rendre sur le LMS)
