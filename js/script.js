const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.sendFile(__dirname + '../index.html')


})

app.get('/teste', function(req, res){
    res.send("Esta é a página de teste")
})

app.listen(3000)

