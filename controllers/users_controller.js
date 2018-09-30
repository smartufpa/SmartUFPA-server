const TAG = "users_controller";
let User = require('../models/users_model');

// let usersSchema = new Schema({
//   _id: Schema.Types.ObjectId,
//   name: String,
//   password: String,
//   GUIID: String
// });

exports.get = (req, res, next) => {
  console.log(`GET/${TAG}`);
  User.find({}, function (err, users) {
    let dados = {success: true, data: []};
    users.forEach(function (value,index) {
      dados.data.push(value);
    })
    res.send(dados);
  });
};

exports.findUserById =  (req, res, next) => {
  console.log(`findUserById/${TAG}`);
  User.find({console_id: req.params.id}, function (err, user) {
    let dados = {success: true, data: []};
    user.forEach(function (value,index) {
      dados.data.push(value);
    })
    res.send(dados);
  });
}

exports.post = (req, res, next) => {
  console.log(`POST/${TAG}`);
  console.log(req.body);
  // console.log(`request-body: ${req.body} `);
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    GUIID: req.body.GUIID
  });

  newUser.save(function (err) {
    if (err) {
      return next(err);
    }
    res.status(201).send({status: true, message: "User successfully inserted!"});
  });
};


exports.put = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
    if (err) return next(err);
    res.status(201).send('User updated.');
  });
};

exports.delete = (req, res, next) => {
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.status(201).send('User successfully deleted!');
  })
};
