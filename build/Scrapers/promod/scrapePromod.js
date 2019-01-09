'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrapeWorkerPromod = require('./scrapeWorkerPromod');

var _scrapeWorkerPromod2 = _interopRequireDefault(_scrapeWorkerPromod);

var _counter = require('../../utilities/counter');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrapePromod = async function scrapePromod(products) {
  console.log('---log: scrapePromod fn is initiated with: ', products);
  // establish result object
  var productsResult = {};

  var promises = [];
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    promises.push((0, _scrapeWorkerPromod2.default)(product));
  }

  await Promise.all(promises).then(function (results) {
    productsResult.dataLength = (0, _counter2.default)(results);
    productsResult.data = results;
  });

  return productsResult;
};

exports.default = scrapePromod;
//# sourceMappingURL=scrapePromod.js.map