const request = require('supertest')

jest.mock('../src/repositories/tacheRepository', () => ({
  tacheRepository: { findAll: jest.fn(), create: jest.fn() },
}))
jest.mock('../src/repositories/colonneRepository', () => ({
  colonneRepository: { findByIntitule: jest.fn() },
}))

const { tacheRepository } = require('../src/repositories/tacheRepository')
const { colonneRepository } = require('../src/repositories/colonneRepository')
const app = require('../src/app')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('GET /api/taches', () => {
  it('renvoie 200 et la liste des tâches avec leur colonne, en JSON', async () => {
    tacheRepository.findAll.mockResolvedValue([
      { id: 1, nom: 'Réglage presse #3', couleur: 'FF0000', colonneId: 1, colonne: { id: 1, intitule: 'A Faire' } },
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

describe('POST /api/taches', () => {
  it('crée une tâche placée en « A Faire » et renvoie 201 avec la tâche en JSON', async () => {
    colonneRepository.findByIntitule.mockResolvedValue({ id: 1, intitule: 'A Faire' })
    tacheRepository.create.mockResolvedValue({
      id: 10, nom: 'Nouvelle tâche', couleur: '123ABC', colonneId: 1, colonne: { id: 1, intitule: 'A Faire' },
    })

    const res = await request(app).post('/api/taches').send({ nom: 'Nouvelle tâche', couleur: '123ABC' })

    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({ nom: 'Nouvelle tâche', colonne: { intitule: 'A Faire' } })
    expect(tacheRepository.create).toHaveBeenCalledWith({ nom: 'Nouvelle tâche', couleur: '123ABC', colonneId: 1 })
  })

  it('renvoie 400 si la colonne « A Faire » n\'existe pas', async () => {
    colonneRepository.findByIntitule.mockResolvedValue(null)

    const res = await request(app).post('/api/taches').send({ nom: 'Nouvelle tâche', couleur: '123ABC' })

    expect(res.status).toBe(400)
    expect(tacheRepository.create).not.toHaveBeenCalled()
  })

  it('renvoie 400 si le corps est invalide (couleur avec dièse)', async () => {
    const res = await request(app).post('/api/taches').send({ nom: 'X', couleur: '#FF0000' })

    expect(res.status).toBe(400)
    expect(colonneRepository.findByIntitule).not.toHaveBeenCalled()
  })
})
