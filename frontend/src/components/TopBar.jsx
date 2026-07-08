export default function TopBar({ filtre, onFiltre, onNouvelle }) {
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
          value={filtre}
          onChange={(e) => onFiltre(e.target.value)}
        />
        <button className="kanban-btn-new" type="button" onClick={onNouvelle}>
          + Nouvelle tâche
        </button>
      </div>
    </header>
  )
}
