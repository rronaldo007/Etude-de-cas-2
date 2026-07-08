const prisma = require('../src/config/db')

async function main() {
  await prisma.tache.deleteMany()
  await prisma.colonne.deleteMany()

  const aFaire = await prisma.colonne.create({ data: { intitule: 'A Faire' } })
  const enCours = await prisma.colonne.create({ data: { intitule: 'En cours' } })
  const controle = await prisma.colonne.create({ data: { intitule: 'En contrôle qualité' } })
  const termine = await prisma.colonne.create({ data: { intitule: 'Terminé' } })

  await prisma.tache.createMany({
    data: [
      { nom: 'Réglage presse #3', couleur: 'FF0000', colonneId: aFaire.id },
      { nom: 'Changement de moule', couleur: 'FFAA00', colonneId: aFaire.id },
      { nom: 'Injection carter X', couleur: '00AA00', colonneId: enCours.id },
      { nom: 'Contrôle dimensionnel lot 42', couleur: '0066FF', colonneId: controle.id },
      { nom: 'Conditionnement palette', couleur: '9900CC', colonneId: termine.id },
    ],
  })
}

main()
  .then(() => console.log('✅ Seed terminé : 4 colonnes + 5 tâches'))
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
