'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('../models/product.model');

var _product2 = _interopRequireDefault(_product);

var _scrapeController = require('../Scrapers/scrapeController');

var _scrapeController2 = _interopRequireDefault(_scrapeController);

var _catFilter = require('../Scrapers/catFilter');

var _catFilter2 = _interopRequireDefault(_catFilter);

var _countProductsSum = require('../utilities/countProductsSum');

var _countProductsSum2 = _interopRequireDefault(_countProductsSum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerDB = _express2.default.Router();

routerDB.route('/products').get(async function (req, res, next) {

  _product2.default.find().limit(req.query.limit || 30).exec(function (err, products) {
    return res.json({ products: products });
  });
}).post(async function (req, res, next) {

  if (req.headers.authorization !== process.env.SECRET) {
    return res.status(401).send("401 - Not authorized");
  }
  // start the scraping
  var productList = new _catFilter2.default();
  var result = await (0, _scrapeController2.default)(productList.fetchList);

  await result.forEach(function (productCategoryList) {
    productCategoryList.forEach(function (product) {

      // Create an instance of model Product
      var product_instance = new _product2.default({
        "img": product.img,
        "name": product.name,
        "price": product.price,
        "store": product.store,
        "type": product.type
      });

      // Save the new model instance, passing a callback
      product_instance.save(function (err) {
        if (err) return handleError(err);
      });
    });
  });

  return res.json({
    "status": "ok",
    "ProductsFound": (0, _countProductsSum2.default)(result)
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