require('dotenv').config()
const app = require('./app')

// Point d'entrée du backend : démarre le serveur HTTP de l'API REST.
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`API REST Jaydee Kanban démarrée sur http://localhost:${PORT}`)
  console.log(`Route de santé : http://localhost:${PORT}/health`)
})
