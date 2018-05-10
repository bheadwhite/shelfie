const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
require('dotenv').config();
const massive = require('massive');

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    console.log(`database is connected!`)
})

app.use(bodyParser.json());

app.get('/api/inventory', controller.getProducts)

const port = 3001
app.listen(port, ()=> console.log(`server is running on ${port}`))