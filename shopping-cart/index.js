const express = require('express');
const app = express();
const port = 3000;

//Modules
const entry_point = require('./module/entry-point')

app.get('/', (req, res)=> {
    res.send('Hello world!')
});

app.listen(port, ()=> {
    console.log(`Running on port: ${port}`)
});