'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrapePromod = require('./promod/scrapePromod');

var _scrapePromod2 = _interopRequireDefault(_scrapePromod);

var _scrapeHm = require('./hm/scrapeHm');

var _scrapeHm2 = _interopRequireDefault(_scrapeHm);

var _catFilter = require('./catFilter');

var _catFilter2 = _interopRequireDefault(_catFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getScrapeResults = async function getScrapeResults(productList) {
  console.log('---log: getScrapeResults fn is initiated');
  console.log('productList: ', productList);
  var result = [];

  var promodProducts = await (0, _scrapePromod2.default)(productList.promod);
  promodProducts.data.forEach(function (product) {
    result.push(product);
  });

  var hmProducts = await (0, _scrapeHm2.default)(productList.hm);
  hmProducts.data.forEach(function (product) {
    result.push(product);
  });

  return result;
};

exports.default = getScrapeResults;
//# sourceMappingURL=scrapeController.js.map