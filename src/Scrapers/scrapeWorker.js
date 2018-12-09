import addProductType from './addProductType';
const phantom = require("phantom");

const scrapeWorker = async (productName) => {
  // scraper functions
  const _ph = await phantom.create();
  const _page = await _ph.createPage();
  await _page.on("onConsoleMessage", function (msg) {
    console.log('---phantom log: ', msg)
  });

  const status = await _page.open(`https://www.promod.hu/noi/${productName}/index.html`);
  console.log('---log: ', status);

  const scrapedData = await _page.evaluate(function () {
    boxes = document.querySelectorAll('.productBox .imgtooltip img');
    priceContainers = document.querySelectorAll('.productBox .descrip .decimales');
    const objList = [];

    // get name and img src
    for (let i = 0; i < boxes.length; i++) {
      const nameAndImg = boxes[i];
      const priceCont = priceContainers[i];
      objList.push({
        'name': nameAndImg.alt,
        'img': nameAndImg.src,
        'price': priceCont.innerText,
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
