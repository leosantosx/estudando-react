const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const todos = []
app.get('/todos', (req, res) => {
    res.json(todos)
})

app.post('/todos', (req, res) => {
    const json = { id: Date.now(), ...req.body }
    todos.push(json)
    res.status(201).json(json)
})

app.get('/todos/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
})

app.listen(3000, () => console.log('(⌐■_■) Server started!'))
