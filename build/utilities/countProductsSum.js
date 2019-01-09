"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var countProductsSum = function countProductsSum(data) {
  var sum = 0;
  data.forEach(function (list) {
    sum += list.length;
  });
  return sum;
};

exports.default = countProductsSum;
//# sourceMappingURL=countProductsSum.js.map