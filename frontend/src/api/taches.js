export async function fetchTaches() {
  const res = await fetch('/api/taches')
  if (!res.ok) throw new Error('Erreur lors du chargement des tâches')
  return res.json()
}

export async function creerTache(data) {
  const res = await fetch('/api/taches', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Erreur lors de la création de la tâche')
  return res.json()
}

export async function modifierTache(id, data) {
  const res = await fetch(`/api/taches/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Erreur lors de la modification de la tâche')
  return res.json()
}

export async function supprimerTache(id) {
  const res = await fetch(`/api/taches/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Erreur lors de la suppression de la tâche')
}
