const express = require('express');
const app = express();
const port = 3000;

//Middlewares
app.set('view engine', 'pug');
app.use(express.static('public'));
//Modules
const entry_point = require('./routes/entry-point')

app.get('/', entry_point)

app.listen(port, ()=> {
    console.log(`Running on port: ${port}`)
});