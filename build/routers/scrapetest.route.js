'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('../models/product.model');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerTest = _express2.default.Router();

routerTest.route('/test').get(function (req, res) {
  console.log('req.query: ', req.query);

  var storeQuery = req.query.store.split(',') || '';

  console.log('storeQuery: ', storeQuery);

  _product2.default.find({ store: storeQuery }, function (err, result) {
    return res.json({
      'data.length': result.length,
      'data': result
    });
  });
});

module.exports = routerTest;
//# sourceMappingURL=scrapetest.route.js.map