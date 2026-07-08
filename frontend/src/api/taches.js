export async function fetchTaches() {
  const res = await fetch('/api/taches')
  if (!res.ok) throw new Error('Erreur lors du chargement des tâches')
  return res.json()
}
