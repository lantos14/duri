'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('../models/product.model');

var _product2 = _interopRequireDefault(_product);

var _scheduler = require('../scheduler');

var _scheduler2 = _interopRequireDefault(_scheduler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerDB = _express2.default.Router();

routerDB.route('/products').get(async function (req, res, next) {
  var limit = parseInt(req.query.limit) || 30;
  console.log('limit: ', limit);
  _product2.default.find({
    store: ['promod'],
    type: ['pulover-kardigan']
  }).limit(limit).exec(function (err, products) {
    return res.json({ products: products });
  });
}).post(async function (req, res, next) {

  if (req.headers.authorization !== process.env.SECRET) {
    return res.status(401).send("401 - Not authorized");
  }
  // start the scraping
  var status = await (0, _scheduler2.default)();

  return res.json({
    status: status
  });
}).delete(async function (req, res, next) {
  _product2.default.deleteMany({}, function (err) {
    return res.json({ result: "success" });
  });
});

var handleError = function handleError(err) {
  console.error(err);
  // handle your error
};

module.exports = routerDB;
//# sourceMappingURL=db.route.js.map