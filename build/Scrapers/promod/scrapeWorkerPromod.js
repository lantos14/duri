"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addProductType = require("../addProductType");

var _addProductType2 = _interopRequireDefault(_addProductType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var phantom = require("phantom");

var scrapeWorker = async function scrapeWorker(productName) {
  // scraper functions
  var _ph = await phantom.create();
  var _page = await _ph.createPage();
  await _page.on("onConsoleMessage", function (msg) {
    console.log('---phantom log: ', msg);
  });

  var status = await _page.open("https://www.promod.hu/noi/" + productName + "/index.html");
  console.log('---log: ', status);

  for (var i = 0; i < 3; i++) {
    await _page.evaluate(function () {
      window.scrollBy(0, 3000);
    });
  }

  var scrapedData = await _page.evaluate(function () {
    boxes = document.querySelectorAll('.productBox .imgtooltip img');
    priceContainers = document.querySelectorAll('.productBox .descrip .decimales');
    var objList = [];

    // get name and img src
    for (var _i = 0; _i < boxes.length; _i++) {
      var nameAndImg = boxes[_i];
      var priceCont = priceContainers[_i];
      objList.push({
        'name': nameAndImg.alt,
        'img': nameAndImg.src,
        'price': priceCont.innerText,
        'store': 'promod'
      });
    }
    return objList;
  });

  console.log('---log: _ph.exit fn initiated');
  await _ph.exit();

  console.log("---log: scrapedData length/category: ", scrapedData.length);
  (0, _addProductType2.default)(productName, scrapedData);

  return scrapedData;
};

exports.default = scrapeWorker;
//# sourceMappingURL=scrapeWorkerPromod.js.map