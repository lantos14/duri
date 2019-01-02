import addProductType from '../addProductType';
const phantom = require("phantom");

const scrapeWorker = async (productName) => {
  // scraper functions
  const _ph = await phantom.create();
  const _page = await _ph.createPage();
  await _page.on("onConsoleMessage", function (msg) {
    console.log('---phantom log: ', msg)
  });

  const status = await _page.open(`https://www2.hm.com/hu_hu/noi/vasarlas-termek-szerint/${productName}.html?page-size=100`);
  console.log('---log: ', status);

  const scrapedData = await _page.evaluate(function () {
    imgTags = document.querySelectorAll('.product-item .image-container img');
    itemHeadings = document.querySelectorAll('.product-item .item-heading a');
    priceTags = document.querySelectorAll('.product-item .price.regular');
    const objList = [];

    // get name and img src
    for (let i = 0; i < imgTags.length; i++) {
      console.log(imgTags[i].src);
      objList.push({
        'name': itemHeadings[i].innerText,
        'img': imgTags[i].dataset.src,
        'price': priceTags[i].innerText,
        'store': 'hm',
      });
    }
    return objList;
  });

  console.log('---log: _ph.exit fn initiated');
  await _ph.exit();
  
  console.log(`---log: scrapedData`, scrapedData);
  addProductType(productName, scrapedData);

  return scrapedData;
}

export default scrapeWorker;
