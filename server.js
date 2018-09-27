const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const PORT = 8080;

const app = express()

app.listen(PORT, function () {
  console.log('Servidor iniciado em localhost: ' + PORT);
});


let uri = 'mongodb+srv://kae:ZBQgYVVkL5OA1R6B@clusterteste-bca09.mongodb.net/smart_ufpa?retryWrites=true'
mongoose.connect(uri,{ useNewUrlParser: true });

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console,'MongoDB connection error'))


module.exports = app;
