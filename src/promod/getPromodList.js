const phantom = require("phantom");

const getPromodList = async () => {

    const _ph = await phantom.create();
    const _page = await _ph.createPage();

    await _page.on("onConsoleMessage", function(msg) {
      console.log('---console:', msg)
    });

    const status = await _page.open('https://www.promod.hu/noi/pulover-kardigan/index.html');
    console.log(status);


    const products = await _page.evaluate(function() {
      boxes = document.querySelectorAll('.productBox .imgtooltip img');
      priceContainers = document.querySelectorAll('.productBox .descrip .decimales');
      const productsResult = []

      // get name and img src
      for (let i = 0; i < boxes.length; i++) {
        const nameAndImg = boxes[i];
        const priceCont = priceContainers[i];
        productsResult.push({
          'name': nameAndImg.alt,
          'img': nameAndImg.src,
          'price': priceCont.innerText,
        });
      }
      return productsResult;
    });

    await _ph.exit();

    return products;
}

export default getPromodList;
