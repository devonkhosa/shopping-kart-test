const express = require('express');
const app = express();
const port = 3000;

//Middlewares
app.set('view engine', 'pug')

//Modules
const entry_point = require('./entry-point')

app.get('/', (req, res)=> {
    res.render('Hello world!')
});

app.listen(port, ()=> {
    console.log(`Running on port: ${port}`)
});