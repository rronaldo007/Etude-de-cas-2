export async function fetchColonnes() {
  const res = await fetch('/api/colonnes')
  if (!res.ok) throw new Error('Erreur lors du chargement des colonnes')
  return res.json()
}
