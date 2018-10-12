const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var buildingsSchema = new Schema({
  _id:  {type: Schema.Types.ObjectId, auto: true},
  latitude: Number,
  longitude: Number,
  name: String,
  shortName: String,
  locName: String,
  description: String,
  administrativeRole: String,
  website: String,
  operationHours:{
    openingTime : String,
    closingTime: String
  }
});

let buildingsModel = mongoose.model('BuildingsModel',buildingsSchema);

module.exports = buildingsModel;
