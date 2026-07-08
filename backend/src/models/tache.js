const { z } = require('zod')

const tacheSchema = z.object({
  nom: z.string().trim().min(1, 'Le nom de la tâche est obligatoire'),
  couleur: z
    .string()
    .regex(/^[0-9A-Fa-f]{6}$/, 'La couleur doit être un code hexadécimal RGB sans dièse (ex. "FF0000")'),
  priorite: z.enum(['Haute', 'Moyenne', 'Basse']).optional(),
  reference: z.string().trim().max(30).optional(),
  quantite: z.number().int().positive().optional(),
  assigne: z.string().trim().max(60).optional(),
  echeance: z.coerce.date().optional(),
  colonneId: z.number().int().positive('La colonne de rattachement est obligatoire'),
})

const tacheCreateSchema = tacheSchema.omit({ colonneId: true })

module.exports = { tacheSchema, tacheCreateSchema }
