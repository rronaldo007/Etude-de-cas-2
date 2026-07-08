export default function TopBar() {
  return (
    <header className="kanban-navbar">
      <div className="kanban-brand">
        <span className="kanban-logo">▦</span>
        <span className="kanban-title">KANBAN — Jaydee Production</span>
      </div>
      <div className="kanban-actions">
        <input
          className="kanban-search"
          type="search"
          placeholder="Rechercher une tâche…"
          disabled
        />
        <button className="kanban-btn-new" type="button" disabled>
          + Nouvelle tâche
        </button>
      </div>
    </header>
  )
}
