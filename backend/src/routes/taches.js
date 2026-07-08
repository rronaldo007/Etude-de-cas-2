const express = require('express')
const { tacheRepository } = require('../repositories/tacheRepository')

const router = express.Router()

router.get('/', async (req, res) => {
  const taches = await tacheRepository.findAll()
  res.json(taches)
})

module.exports = router
