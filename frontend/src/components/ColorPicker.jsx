const COULEURS = [
  'E74C3C',
  'E67E22',
  'F1C40F',
  '27AE60',
  '3498DB',
  '8E44AD',
  '34495E',
  '95A5A6',
]

export default function ColorPicker({ value, onChange }) {
  return (
    <div className="kanban-palette">
      {COULEURS.map((couleur) => (
        <button
          key={couleur}
          type="button"
          className={`kanban-color ${couleur === value ? 'is-selected' : ''}`}
          style={{ backgroundColor: `#${couleur}` }}
          onClick={() => onChange(couleur)}
          aria-label={couleur}
        />
      ))}
    </div>
  )
}
