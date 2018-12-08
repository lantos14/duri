const phantom = require("phantom");

const scrapePromod = async (products) => {
  // establish result object
  const productsResult = {};
  productsResult.store = 'promod';

  // scrape through the store with the given products
  await products.forEach(async productName => {
    // scraper functions
    const _ph = await phantom.create();
    const _page = await _ph.createPage();
    await _page.on("onConsoleMessage", function (msg) {
      console.log('---console:', msg)
    });

    console.log(productName);
    const status = await _page.open(`https://www.promod.hu/noi/${productName}/index.html`);
    console.log(status);

    const scrapedData = await _page.evaluate(function () {
      let objList = [];
      boxes = document.querySelectorAll('.productBox .imgtooltip img');
      priceContainers = document.querySelectorAll('.productBox .descrip .decimales');

      // get name and img src
      for (let i = 0; i < boxes.length; i++) {
        const nameAndImg = boxes[i];
        const priceCont = priceContainers[i];
        objList.push({
          'name': nameAndImg.alt,
          'img': nameAndImg.src,
          'price': priceCont.innerText,
          'cat': productName,
        });
      }
      return objList;
    });

    console.log(4);
    productsResult.data = scrapedData;
    await _ph.exit();
  });

  return productsResult;
}

export default scrapePromod;
