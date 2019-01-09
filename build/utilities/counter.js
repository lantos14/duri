"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var countProductNum = function countProductNum(data) {
  var length = 0;
  data.forEach(function (list) {
    length += list.length;
  });

  return length;
};

exports.default = countProductNum;
//# sourceMappingURL=counter.js.map