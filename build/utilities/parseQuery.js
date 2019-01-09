'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// gets the query params and split them into an arrays
// returns an object with the given arrays
var parseQuery = function parseQuery(req) {
  var result = {};
  if (req.products) {
    result.products = req.products.split(',');
  }
  if (req.stores) {
    result.stores = req.stores.split(',');
  }

  return result;
};

exports.default = parseQuery;
//# sourceMappingURL=parseQuery.js.map