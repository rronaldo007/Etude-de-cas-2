const express = require('express')
const { colonneRepository } = require('../repositories/colonneRepository')

const router = express.Router()

router.get('/', async (req, res) => {
  const colonnes = await colonneRepository.findAll()
  res.json(colonnes)
})

module.exports = router
