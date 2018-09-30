const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const PORT = 8080;
const db = require('./helpers/db_helper');

const app = express()

const usersRoute = require('./routes/users_route');
const index = require('./routes/index');

app.listen(PORT, function () {
  console.log('Servidor iniciado em localhost: ' + PORT);
});

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);
app.use('/users',usersRoute);


module.exports = app;
