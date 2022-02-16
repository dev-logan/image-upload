const express = require('express')
const upload = require('./modules/multer')

const path = require('path')
const app = express()

const port = 5001

app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/api/upload', upload.single('profile_image'), (req, res) => {
    res.send(`<img src='${req.file.location}'>`)
})

app.listen(port, () => {
    console.log(`${port} 포트 연결`)
})