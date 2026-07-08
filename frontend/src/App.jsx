import { Container } from 'react-bootstrap'

// Composant racine de l'application.
// Squelette minimal pour l'Ex. 2/3 (vérification du démarrage).
// Le vrai tableau Kanban (colonnes + tâches chargées depuis /api/taches)
// sera implémenté à l'Ex. 8, dans pages/Board.jsx.
export default function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Jaydee — Tableau Kanban</h1>
      <p className="text-muted">
        Frontend initialisé (React + Bootstrap + Vite). Le tableau sera affiché ici.
      </p>
    </Container>
  )
}
