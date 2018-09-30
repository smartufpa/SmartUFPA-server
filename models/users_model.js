const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  _id:  {type: Schema.Types.ObjectId, auto: true},
  email: String,
  name: String,
  password: String,
  GUIID: String
});

let usersModel = mongoose.model('UsersModel',usersSchema);

module.exports = usersModel;
