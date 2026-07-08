const { z } = require('zod')

const tacheSchema = z.object({
  nom: z.string().trim().min(1, 'Le nom de la tâche est obligatoire'),
  couleur: z
    .string()
    .regex(/^[0-9A-Fa-f]{6}$/, 'La couleur doit être un code hexadécimal RGB sans dièse (ex. "FF0000")'),
  colonneId: z.number().int().positive('La colonne de rattachement est obligatoire'),
})

module.exports = { tacheSchema }
