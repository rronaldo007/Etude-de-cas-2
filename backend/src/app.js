const express = require('express')
const cors = require('cors')

// Application Express (montage des middlewares et des routes).
// Séparée de index.js pour être réutilisable dans les tests (supertest, Ex. 8/9).
const app = express()

app.use(cors()) // autorise les appels du frontend (http://localhost:5173)
app.use(express.json()) // parse les corps de requête JSON (POST, Ex. 9)

// Route de santé : permet de vérifier que l'API répond (Ex. 3).
// Testable avec : curl http://localhost:3000/health
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'jaydee-kanban-backend' })
})

// Les routes métier (/api/taches) seront montées ici aux Ex. 8 et 9.

module.exports = app
