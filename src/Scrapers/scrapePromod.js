const phantom = require("phantom");

const scrapePromod = async (products) => {
  console.log('---log: scrapePromod fn is initiated with: ', products);
  // establish result object
  const productsResult = {};
  productsResult.store = 'promod';

  // scraper functions
  const _ph = await phantom.create();
  const _page = await _ph.createPage();
  await _page.on("onConsoleMessage", function (msg) {
    console.log('---phantom log: ', msg)
  });

  const status = await _page.open(`https://www.promod.hu/noi/pulover-kardigan/index.html`);
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

  productsResult.data = scrapedData;
  console.log('---log: _ph.exit fn initiated');
  await _ph.exit();
  return productsResult;
}

export default scrapePromod;
