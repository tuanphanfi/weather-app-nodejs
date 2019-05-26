const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.send("a")
})

app.get('/help', (req, res) => {
    res.send([
        {
            name: "Tuan Phan",
            email: "tuanphan.fi@gmail.com"
        },
        {
            name: "Tuan Phan",
            email: "tuanphan.fi@gmail.com"
        }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send('weather')
})

app.listen(3000, () => console.log("Running on port 3000"));