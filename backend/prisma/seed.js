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
      { nom: 'Moule A12', couleur: 'E74C3C', priorite: 'Haute', reference: 'PL-A12', quantite: 500, assigne: 'M. Leroy', echeance: new Date('2026-06-18'), colonneId: aFaire.id },
      { nom: 'Réf X90', couleur: '8E44AD', priorite: 'Basse', reference: 'PL-X90', quantite: 120, assigne: 'S. Diallo', echeance: new Date('2026-06-22'), colonneId: aFaire.id },
      { nom: 'Pièce B07', couleur: '3498DB', priorite: 'Moyenne', reference: 'PL-B07', quantite: 1000, assigne: 'J. Dupont', echeance: new Date('2026-06-17'), colonneId: enCours.id },
      { nom: 'Lot C33', couleur: 'E67E22', priorite: 'Haute', reference: 'PL-C33', quantite: 300, assigne: 'A. Koffi', echeance: new Date('2026-06-16'), colonneId: controle.id },
      { nom: 'Pièce D01', couleur: '27AE60', priorite: 'Basse', reference: 'PL-D01', quantite: 750, assigne: 'J. Dupont', echeance: new Date('2026-06-14'), colonneId: termine.id },
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
