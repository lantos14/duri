'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deleteDeprecated = require('./deleteDeprecated');

var _deleteDeprecated2 = _interopRequireDefault(_deleteDeprecated);

var _populateData = require('./populateData');

var _populateData2 = _interopRequireDefault(_populateData);

var _countProductsSum = require('../utilities/countProductsSum');

var _countProductsSum2 = _interopRequireDefault(_countProductsSum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleData = async function handleData() {
  var data = void 0;

  try {
    await (0, _deleteDeprecated2.default)();
  } catch (error) {
    throw new Error('Deletion of Deprecated Data was unsuccessful');
  }
  console.log('--log: deletion of deprecated data was a success');

  try {
    data = await (0, _populateData2.default)();
  } catch (error) {
    throw new Error('Scraping new Data was unsuccessful');
  }
  console.log('--log: Scraping of new Data was a success');

  return {
    msg: 'update was successful',
    numberOfProducts: (0, _countProductsSum2.default)(data)
  };
};

exports.default = handleData;
//# sourceMappingURL=index.js.map