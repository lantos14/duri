'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _catFilter = require('./catFilter');

var _catFilter2 = _interopRequireDefault(_catFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineType = function defineType(store, typeFromStore) {
  console.log('---debug defineType typeFromStore: ', typeFromStore);
  console.log('---debug defineType store: ', store);
  var universalType = void 0;
  for (key in _catFilter2.default.filter) {

    if (key[store] === typeFromStore) {
      universalType = key[store];
    }
  }
  console.log('---debug defineType universalType: ', universalType);

  return universalType;
};

exports.default = defineType;
//# sourceMappingURL=defineType.js.map