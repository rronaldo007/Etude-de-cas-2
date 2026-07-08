const request = require('supertest')

jest.mock('../src/repositories/tacheRepository', () => ({
  tacheRepository: { findAll: jest.fn() },
}))

const { tacheRepository } = require('../src/repositories/tacheRepository')
const app = require('../src/app')

describe('GET /api/taches', () => {
  it('renvoie 200 et la liste des tâches avec leur colonne, en JSON', async () => {
    tacheRepository.findAll.mockResolvedValue([
      {
        id: 1,
        nom: 'Réglage presse #3',
        couleur: 'FF0000',
        colonneId: 1,
        colonne: { id: 1, intitule: 'A Faire' },
      },
    ])

    const res = await request(app).get('/api/taches')

    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/json/)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body).toHaveLength(1)
    expect(res.body[0]).toMatchObject({
      nom: 'Réglage presse #3',
      couleur: 'FF0000',
      colonne: { intitule: 'A Faire' },
    })
  })
})
