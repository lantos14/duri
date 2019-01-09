"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addProductType = function addProductType(name, data) {
  var result = data;

  result.forEach(function (product) {
    product.type = name;
  });

  return result;
};

exports.default = addProductType;
//# sourceMappingURL=addProductType.js.map