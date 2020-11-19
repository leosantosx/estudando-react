import express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({status: 'OK'})
})

app.listen(3333, () => console.log('🔥 Back-end started!'))