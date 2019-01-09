'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrapeWorkerHm = require('./scrapeWorkerHm');

var _scrapeWorkerHm2 = _interopRequireDefault(_scrapeWorkerHm);

var _counter = require('../../utilities/counter');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrapeHm = async function scrapeHm(products) {
  console.log('---log: scrapeHm fn is initiated with: ', products);
  // establish result object
  var productsResult = {};
  productsResult.store = 'hm';

  var promises = [];
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    promises.push((0, _scrapeWorkerHm2.default)(product));
  }

  await Promise.all(promises).then(function (results) {
    productsResult.dataLength = (0, _counter2.default)(results);
    productsResult.data = results;
  });

  return productsResult;
};

exports.default = scrapeHm;
//# sourceMappingURL=scrapeHm.js.map