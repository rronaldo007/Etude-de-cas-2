const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'jaydee-kanban-backend' })
})

app.use('/api/taches', require('./routes/taches'))

module.exports = app
