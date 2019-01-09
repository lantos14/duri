"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = require("../models/product.model");

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteDeprecatedData = function deleteDeprecatedData() {
  _product2.default.deleteMany({}, function (err) {
    err ? err : "success";
  });
};

exports.default = deleteDeprecatedData;
//# sourceMappingURL=deleteDeprecated.js.map