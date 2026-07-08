import { useEffect, useState } from 'react'
import { fetchTaches } from '../api/taches'
import TopBar from '../components/TopBar'
import Column from '../components/Column'

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
  const [erreur, setErreur] = useState(null)

  useEffect(() => {
    fetchTaches()
      .then(setTaches)
      .catch((e) => setErreur(e.message))
  }, [])

  const colonnes = grouperParColonne(taches)

  return (
    <>
      <TopBar />
      {erreur && <p className="text-danger px-4 pt-3 mb-0">{erreur}</p>}
      <div className="kanban-board">
        {colonnes.map((colonne) => (
          <Column key={colonne.id} intitule={colonne.intitule} taches={colonne.taches} />
        ))}
      </div>
    </>
  )
}
