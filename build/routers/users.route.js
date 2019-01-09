'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerUser = _express2.default.Router();

routerUser.route('/users').get(async function (req, res) {
  if (req.headers.authorization !== process.env.SECRET) {
    return res.status(401).send("401 - Not authorized");
  }

  _user2.default.find({}, function (err, users) {
    return res.json({ users: users });
  });
}).post(async function (req, res) {
  if (req.headers.authorization !== process.env.SECRET) {
    return res.status(401).send("401 - Not authorized");
  }

  // req validation

  if (req.body.username && req.body.email && req.body.password) {

    var user_instance = new _user2.default({
      "username": req.body.username,
      "email": req.body.email,
      "password": req.body.password
    });

    // Save the new model instance, passing a callback
    user_instance.save(function (err) {
      if (err) return handleError(err);
    });
  }
  return res.json({
    "status": "ok",
    "msg": "User has been succesfully stored"
  });
});

var handleError = function handleError(err) {
  console.error(err);
  // handle your error
};

module.exports = routerUser;
//# sourceMappingURL=users.route.js.map