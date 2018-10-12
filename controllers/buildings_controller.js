const TAG = "buildings_controller";
let Building = require('../models/buildings_model');

exports.post = (req, res, next) => {
  console.log(`POST/${TAG}`);
  console.log(req.body);
  let newBuilding = new Building({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    name: req.body.name,
    shortName: req.body.shortName,
    locName: req.body.locName,
    description: req.body.description,
    administrativeRole: req.body.administrativeRole,
    operationHours:{
      openingTime: req.body.openingTime,
      closingTime: req.body.closingTime
    }
  });

  newBuilding.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(201).send({status: true, message: "Building successfully inserted!"});
  });
};
