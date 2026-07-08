import { useState } from 'react'
import TaskCard from './TaskCard'

export default function Column({ id, intitule, taches, onSelect, onDrop }) {
  const [survol, setSurvol] = useState(false)

  function handleDrop(e) {
    e.preventDefault()
    setSurvol(false)
    onDrop(e, id)
  }

  return (
    <section
      className={`kanban-col ${survol ? 'kanban-col--survol' : ''}`}
      onDragOver={(e) => {
        e.preventDefault()
        setSurvol(true)
      }}
      onDragLeave={() => setSurvol(false)}
      onDrop={handleDrop}
    >
      <header className="kanban-col-header">
        <span className="kanban-col-title">{intitule}</span>
        <span className="kanban-col-count">{taches.length}</span>
      </header>
      <div className="kanban-col-cards">
        {taches.map((tache) => (
          <TaskCard key={tache.id} tache={tache} onSelect={onSelect} />
        ))}
        <div className="kanban-empty">Déposer une carte ici</div>
      </div>
    </section>
  )
}
