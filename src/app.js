const express = require('express')
const app = express()

const path = require('path')
const port = process.env.PORT || 8000

// app.use(express.static(path.join(__dirname, '../public')))
// app.use('/', express.static(path.join(__dirname, './public')))
const viewsPath = path.join(__dirname, '../templates')

app.use('/',express.static('public'));
app.set('view engine', 'hbs')
app.set('views', viewsPath)


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Tuan Phan'
    })
    console.log('At home')
})


app.get('/weather', (req, res) => {
    res.render('index', {
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
    console.log('At weather')
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Tuan Phan'
    })
    console.log('At About')
})

app.get('/test', (req, res) => {
    res.render('test', {
        message: 'Test',
    })
})





app.listen(port, () => console.log("Running on port 8000"));