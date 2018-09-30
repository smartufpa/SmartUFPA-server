const mongoose = require('mongoose');

const uri = 'mongodb+srv://kae:ZBQgYVVkL5OA1R6B@clusterteste-bca09.mongodb.net/smart_ufpa?retryWrites=true'

exports.connect = () => {
  mongoose.connect(uri,{ useNewUrlParser: true });

  mongoose.Promise = global.Promise;

  const db = mongoose.connection;

  db.on('error', console.error.bind(console,'MongoDB connection error'))
}
