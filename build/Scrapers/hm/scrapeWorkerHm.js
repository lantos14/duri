'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addProductType = require('../addProductType');

var _addProductType2 = _interopRequireDefault(_addProductType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var phantom = require("phantom");

var scrapeWorker = async function scrapeWorker(productName) {
  // scraper functions
  var _ph = await phantom.create();
  var _page = await _ph.createPage();
  // await _page.on("onConsoleMessage", function (msg) {
  //   console.log('---phantom log: ', msg)
  // });

  var status = await _page.open('https://www2.hm.com/hu_hu/noi/vasarlas-termek-szerint/' + productName + '.html?page-size=100');
  console.log('---log: ', status);

  var scrapedData = await _page.evaluate(function () {
    imgTags = document.querySelectorAll('.product-item .image-container img');
    itemHeadings = document.querySelectorAll('.product-item .item-heading a');
    priceTags = document.querySelectorAll('.product-item .price.regular');
    var objList = [];

    // get name and img src
    for (var i = 0; i < imgTags.length; i++) {
      console.log(imgTags[i].src);
      objList.push({
        'name': itemHeadings[i].innerText,
        'img': imgTags[i].dataset.src,
        'price': priceTags[i].innerText,
        'store': 'hm'
      });
    }
    return objList;
  });

  console.log('---log: _ph.exit fn initiated');
  await _ph.exit();

  console.log('---log: scrapedData length/category: ', scrapedData.length);
  (0, _addProductType2.default)(productName, scrapedData);

  return scrapedData;
};

exports.default = scrapeWorker;
//# sourceMappingURL=scrapeWorkerHm.js.map