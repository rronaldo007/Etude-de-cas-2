const prisma = require('../config/db')

const tacheRepository = {
  findAll() {
    return prisma.tache.findMany({
      include: { colonne: true },
      orderBy: { id: 'asc' },
    })
  },

  findById(id) {
    return prisma.tache.findUnique({
      where: { id },
      include: { colonne: true },
    })
  },

  create(data) {
    return prisma.tache.create({
      data,
      include: { colonne: true },
    })
  },
}

module.exports = { tacheRepository }
