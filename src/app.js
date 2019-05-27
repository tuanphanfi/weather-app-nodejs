const express = require('express')
const hbs = require('hbs')

const app = express()

//Define port
const port = process.env.PORT || 8000

//Define paths for Express config
const path = require('path')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//link partials to templates
hbs.registerPartials(partialsPath)     

// app.use(express.static(path.join(__dirname, '../public')))
// app.use('/', express.static(path.join(__dirname, './public')))
//set up handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//set up static directory to serve
app.use('/',express.static('public'));

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

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Something useful',
        title: 'Help',
        name: 'Tuan Phan'
    })
})


app.get('/help/*', (req,res)=>{
    res.render('404', {
        errorMessage: 'Help article not found',
        title: '404',
        name: 'Tuan Phan'
    })
})


app.get('*', (req,res)=>{
    res.render('404', {
        errorMessage: 'Sorry, Page not found',
        title: '404',
        name: 'Tuan Phan'
    })
})


app.listen(port, () => console.log("Running on port 8000"));