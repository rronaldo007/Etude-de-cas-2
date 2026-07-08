import { render, screen } from '@testing-library/react'
import Board from '../pages/Board'

const taches = [
  { id: 1, nom: 'Réglage presse #3', couleur: 'FF0000', colonneId: 1, colonne: { id: 1, intitule: 'A Faire' } },
  { id: 2, nom: 'Injection carter X', couleur: '00AA00', colonneId: 2, colonne: { id: 2, intitule: 'En cours' } },
]

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve(taches) })
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Board', () => {
  it('affiche les colonnes et les tâches chargées depuis /api/taches', async () => {
    render(<Board />)

    expect(await screen.findByText('Réglage presse #3')).toBeInTheDocument()
    expect(screen.getByText('Injection carter X')).toBeInTheDocument()
    expect(screen.getByText('A Faire')).toBeInTheDocument()
    expect(screen.getByText('En cours')).toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalledWith('/api/taches')
  })
})
