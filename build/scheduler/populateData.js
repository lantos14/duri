'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrapeController = require('../Scrapers/scrapeController');

var _scrapeController2 = _interopRequireDefault(_scrapeController);

var _product = require('../models/product.model');

var _product2 = _interopRequireDefault(_product);

var _catFilter = require('../Scrapers/catFilter');

var _catFilter2 = _interopRequireDefault(_catFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var populateWithNewData = async function populateWithNewData() {
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
};

exports.default = populateWithNewData;
//# sourceMappingURL=populateData.js.map