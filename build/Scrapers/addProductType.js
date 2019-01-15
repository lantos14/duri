'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineType = require('./defineType');

var _defineType2 = _interopRequireDefault(_defineType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addProductType = function addProductType(name, store, data) {
  var result = data;
  var universalType = (0, _defineType2.default)(store, name);
  console.log('addProductType universalType: ', universalType);
  result.forEach(function (product) {
    product.type = universalType;
  });

  return result;
}; //            pl.: hm  (kardiganok-puloverek, data) => return 'kardiganok-puloverek'
exports.default = addProductType;
//# sourceMappingURL=addProductType.js.map