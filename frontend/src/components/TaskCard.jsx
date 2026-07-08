function numeroOf(id) {
  return `#OF-${1000 + id}`
}

function initiales(nom) {
  return nom
    .split(/\s+/)
    .map((mot) => mot.replace(/[^A-Za-zÀ-ÿ]/g, '')[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function jourMois(echeance) {
  const d = new Date(echeance)
  return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}`
}

export default function TaskCard({ tache, onSelect }) {
  const { nom, couleur, priorite, reference, quantite, assigne, echeance } = tache

  return (
    <article
      className="kanban-card"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('text/plain', String(tache.id))}
      onClick={() => onSelect(tache)}
    >
      <span className="kanban-card-accent" style={{ backgroundColor: `#${couleur}` }} />
      <div className="kanban-card-body">
        <div className="kanban-card-top">
          <span className="kanban-of">{numeroOf(tache.id)}</span>
          {priorite && (
            <span className={`kanban-prio kanban-prio--${priorite.toLowerCase()}`}>{priorite}</span>
          )}
        </div>

        <h3 className="kanban-card-title">{nom}</h3>

        <div className="kanban-card-couleur">
          <span className="kanban-swatch" style={{ backgroundColor: `#${couleur}` }} />
          <span className="kanban-hex">{couleur}</span>
        </div>

        {reference && (
          <div className="kanban-card-ref">
            Réf. pièce : {reference}
            {quantite != null && ` · Qté ${quantite}`}
          </div>
        )}

        {(assigne || echeance) && (
          <div className="kanban-card-foot">
            {assigne && (
              <div className="kanban-assignee">
                <span className="kanban-avatar">{initiales(assigne)}</span>
                <span>{assigne}</span>
              </div>
            )}
            {echeance && <span className="kanban-date">{jourMois(echeance)}</span>}
          </div>
        )}
      </div>
    </article>
  )
}
