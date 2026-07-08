const express = require('express')
const { tacheRepository } = require('../repositories/tacheRepository')
const { colonneRepository } = require('../repositories/colonneRepository')
const { tacheCreateSchema } = require('../models/tache')

const router = express.Router()

router.get('/', async (req, res) => {
  const taches = await tacheRepository.findAll()
  res.json(taches)
})

router.post('/', async (req, res) => {
  const parsed = tacheCreateSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.issues.map((i) => i.message) })
  }

  const aFaire = await colonneRepository.findByIntitule('A Faire')
  if (!aFaire) {
    return res.status(400).json({ error: "La colonne « A Faire » n'existe pas" })
  }

  const tache = await tacheRepository.create({ ...parsed.data, colonneId: aFaire.id })
  res.status(201).json(tache)
})

module.exports = router
