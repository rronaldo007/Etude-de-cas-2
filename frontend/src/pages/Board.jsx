import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { fetchTaches } from '../api/taches'
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
    <Container fluid className="py-4">
      <h1 className="h3 mb-4">Jaydee — Tableau Kanban</h1>
      {erreur && <p className="text-danger">{erreur}</p>}
      <div className="d-flex gap-3 overflow-auto">
        {colonnes.map((colonne) => (
          <Column key={colonne.id} intitule={colonne.intitule} taches={colonne.taches} />
        ))}
      </div>
    </Container>
  )
}
