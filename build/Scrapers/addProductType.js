"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//            pl.: hm  (kardiganok-puloverek, data) => return 'kardiganok-puloverek'
var addProductType = function addProductType(name, store, data) {
  var result = data;
  var universalType = defineType(store, name);
  result.forEach(function (product) {
    product.type = universalType;
  });

  return result;
};

exports.default = addProductType;
//# sourceMappingURL=addProductType.js.map