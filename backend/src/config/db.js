const { PrismaClient } = require('@prisma/client')

// Instance unique du client Prisma (couche d'accès à la base MySQL).
// Réutilisée par les repositories (Ex. 6) et les routes.
const prisma = new PrismaClient()

module.exports = prisma
