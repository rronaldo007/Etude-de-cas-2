import { Card } from 'react-bootstrap'

export default function TaskCard({ tache }) {
  return (
    <Card className="mb-2">
      <Card.Body className="d-flex align-items-center gap-2 py-2">
        <span
          className="rounded-circle flex-shrink-0"
          style={{ width: 14, height: 14, backgroundColor: `#${tache.couleur}` }}
        />
        <span>{tache.nom}</span>
      </Card.Body>
    </Card>
  )
}
