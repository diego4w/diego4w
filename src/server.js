const { log } = require('console')
const express = require('express')
const http = require('http')

const app = express()
const httpServer = http.createServer(app)

app.use(express.static(__dirname + '/public'))

app.use('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

httpServer.listen(8000, () => {
    console.log('Server rodando na porta 8000');
})