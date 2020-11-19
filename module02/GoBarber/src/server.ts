import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.json({status: "OK"})
})

app.listen(3000, () => console.log('🔥 back-end started!'))