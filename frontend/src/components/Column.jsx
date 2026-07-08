import { Badge } from 'react-bootstrap'
import TaskCard from './TaskCard'

export default function Column({ intitule, taches }) {
  return (
    <div className="bg-light rounded p-3" style={{ minWidth: 260 }}>
      <h2 className="h6 text-uppercase text-muted d-flex justify-content-between mb-3">
        {intitule} <Badge bg="secondary">{taches.length}</Badge>
      </h2>
      {taches.map((tache) => (
        <TaskCard key={tache.id} tache={tache} />
      ))}
    </div>
  )
}
