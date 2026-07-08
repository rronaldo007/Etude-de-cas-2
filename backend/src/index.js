require('dotenv').config()
const app = require('./app')
const prisma = require('./config/db')

const PORT = process.env.PORT || 3000

async function start() {
  try {
    await prisma.$queryRaw`SELECT 1`
    console.log('Connexion à la base de données MySQL réussie (Prisma)')
  } catch (err) {
    console.error('Échec de la connexion à la base de données :', err.message)
  }

  app.listen(PORT, () => {
    console.log(`API REST Jaydee Kanban démarrée sur http://localhost:${PORT}`)
    console.log(`Route de santé : http://localhost:${PORT}/health`)
  })
}

start()
