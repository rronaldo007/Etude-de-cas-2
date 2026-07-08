const { z } = require('zod')

const colonneSchema = z.object({
  intitule: z.string().trim().min(1, "L'intitulé de la colonne est obligatoire"),
})

module.exports = { colonneSchema }
