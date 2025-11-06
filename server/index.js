const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())

const DATA_PATH = path.join(__dirname, 'data')

function loadJSON(name){
  return JSON.parse(fs.readFileSync(path.join(DATA_PATH, name), 'utf8'))
}

app.get('/api/funds', (req, res) => {
  const funds = loadJSON('funds.json')
  res.json(funds)
})

app.get('/api/funds/:id', (req, res) => {
  const funds = loadJSON('funds.json')
  const f = funds.find(x => String(x.id) === String(req.params.id))
  if(!f) return res.status(404).json({ error: 'Not found' })
  res.json(f)
})

app.get('/api/reports', (req, res) => {
  const reports = loadJSON('reports.json')
  res.json(reports)
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Mock API server listening on ${port}`))
