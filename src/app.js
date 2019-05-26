const express = require('express')
const app = express()

const path = require('path')
const port = process.env.PORT || 8000

// app.use(express.static(path.join(__dirname, '../public')))
// app.use('/', express.static(path.join(__dirname, './public')))
app.use('/',express.static('public'));
app.set('view engine', 'hbs')



app.get('/', (req, res) => {
    res.render('index')
    console.log('at home')
})

app.get('/test', (req,res)=>{
    res.render('index')
    console.log('test');
})



app.listen(port, () => console.log("Running on port 8000"));