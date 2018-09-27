const mongoose = require('mongoose');
let Schema = mongoose.Schema();

let usersSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  password: String,
  GUIID: String
});

let usersModel = mongoose.model('UsersModel',usersSchema);

module.exports = usersModel;
