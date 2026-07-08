const prisma = require('../config/db')

const colonneRepository = {
  findAll() {
    return prisma.colonne.findMany({ orderBy: { id: 'asc' } })
  },

  findById(id) {
    return prisma.colonne.findUnique({ where: { id } })
  },

  findByIntitule(intitule) {
    return prisma.colonne.findFirst({ where: { intitule } })
  },

  create(data) {
    return prisma.colonne.create({ data })
  },
}

module.exports = { colonneRepository }
