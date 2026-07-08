import { useEffect, useState } from 'react'
import { fetchTaches, modifierTache } from '../api/taches'
import { fetchColonnes } from '../api/colonnes'
import TopBar from '../components/TopBar'
import Column from '../components/Column'
import CreateTaskModal from '../components/CreateTaskModal'
import TaskModal from '../components/TaskModal'

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

  async function deplacer(e, colonneId) {
    const id = Number(e.dataTransfer.getData('text/plain'))
    const tache = taches.find((t) => t.id === id)
    if (!tache || tache.colonneId === colonneId) return
    try {
      await modifierTache(id, { colonneId })
      charger()
    } catch (err) {
      setErreur(err.message)
    }
  }

  const texte = filtre.trim().toLowerCase()
  const tachesFiltrees = taches.filter(
    (t) =>
      t.nom.toLowerCase().includes(texte) ||
      (t.reference || '').toLowerCase().includes(texte) ||
      String(1000 + t.id).includes(texte)
  )
  const colonnesAffichees = colonnes.map((c) => ({
    id: c.id,
    intitule: c.intitule,
    taches: tachesFiltrees.filter((t) => t.colonneId === c.id),
  }))

  return (
    <>
      <TopBar filtre={filtre} onFiltre={setFiltre} onNouvelle={() => setShowCreer(true)} />
      {erreur && <p className="text-danger px-4 pt-3 mb-0">{erreur}</p>}
      <div className="kanban-board">
        {colonnesAffichees.map((c) => (
          <Column
            key={c.id}
            id={c.id}
            intitule={c.intitule}
            taches={c.taches}
            onSelect={setTacheActive}
            onDrop={deplacer}
          />
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
