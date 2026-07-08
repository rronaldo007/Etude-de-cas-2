import { useEffect, useState } from 'react'
import { fetchTaches } from '../api/taches'
import { fetchColonnes } from '../api/colonnes'
import TopBar from '../components/TopBar'
import Column from '../components/Column'
import CreateTaskModal from '../components/CreateTaskModal'
import TaskModal from '../components/TaskModal'

function grouperParColonne(taches) {
  const map = new Map()
  for (const tache of taches) {
    const { colonne } = tache
    if (!map.has(colonne.id)) {
      map.set(colonne.id, { id: colonne.id, intitule: colonne.intitule, taches: [] })
    }
    map.get(colonne.id).taches.push(tache)
  }
  return [...map.values()].sort((a, b) => a.id - b.id)
}

export default function Board() {
  const [taches, setTaches] = useState([])
  const [colonnes, setColonnes] = useState([])
  const [filtre, setFiltre] = useState('')
  const [showCreer, setShowCreer] = useState(false)
  const [tacheActive, setTacheActive] = useState(null)
  const [erreur, setErreur] = useState(null)

  function charger() {
    fetchTaches()
      .then(setTaches)
      .catch((e) => setErreur(e.message))
  }

  useEffect(() => {
    charger()
    fetchColonnes()
      .then(setColonnes)
      .catch(() => {})
  }, [])

  const texte = filtre.trim().toLowerCase()
  const tachesFiltrees = taches.filter(
    (t) =>
      t.nom.toLowerCase().includes(texte) ||
      (t.reference || '').toLowerCase().includes(texte) ||
      String(1000 + t.id).includes(texte)
  )
  const colonnesAffichees = grouperParColonne(tachesFiltrees)

  return (
    <>
      <TopBar filtre={filtre} onFiltre={setFiltre} onNouvelle={() => setShowCreer(true)} />
      {erreur && <p className="text-danger px-4 pt-3 mb-0">{erreur}</p>}
      <div className="kanban-board">
        {colonnesAffichees.map((c) => (
          <Column key={c.id} intitule={c.intitule} taches={c.taches} onSelect={setTacheActive} />
        ))}
      </div>

      <CreateTaskModal
        show={showCreer}
        onClose={() => setShowCreer(false)}
        onCreated={() => {
          setShowCreer(false)
          charger()
        }}
      />

      {tacheActive && (
        <TaskModal
          tache={tacheActive}
          colonnes={colonnes}
          onClose={() => setTacheActive(null)}
          onSaved={() => {
            setTacheActive(null)
            charger()
          }}
          onDeleted={() => {
            setTacheActive(null)
            charger()
          }}
        />
      )}
    </>
  )
}
