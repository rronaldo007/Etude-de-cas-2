import TaskCard from './TaskCard'

export default function Column({ intitule, taches }) {
  return (
    <section className="kanban-col">
      <header className="kanban-col-header">
        <span className="kanban-col-title">{intitule}</span>
        <span className="kanban-col-count">{taches.length}</span>
      </header>
      <div className="kanban-col-cards">
        {taches.map((tache) => (
          <TaskCard key={tache.id} tache={tache} />
        ))}
        {taches.length === 0 && <div className="kanban-empty">Déposer une carte ici</div>}
      </div>
    </section>
  )
}
