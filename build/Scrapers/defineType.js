'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _catFilter = require('./catFilter');

var _catFilter2 = _interopRequireDefault(_catFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineType = function defineType(store, typeFromStore) {
  console.log('---debug defineType typeFromStore: ', typeFromStore); // kabat
  console.log('---debug defineType store: ', store); // promod
  var universalType = void 0;

  Object.entries(_catFilter2.default.filter).forEach(function (universalProductTypeObject) {
    if (typeFromStore === universalProductTypeObject[1][store]) {
      universalType = universalProductTypeObject[0];
    }
  });

  console.log('---debug defineType universalType: ', universalType); // undefined

  return universalType;
};

exports.default = defineType;
//# sourceMappingURL=defineType.js.map