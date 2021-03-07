const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index', {content: fs.readFileSync('./source/note.txt', 'utf8')})
})

app.post('/', (req, res) => {
    fs.writeFileSync('./source/note.txt', req.body.content_)
    res.redirect('/')
})

app.listen(8080)