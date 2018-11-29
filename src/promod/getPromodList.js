const phantom = require("phantom");

const getPromodList = async () => {

    const _ph = await phantom.create();
    const _page = await _ph.createPage();

    await _page.on("onResourceRequested", function(requestData) {
        console.info('Requesting', requestData.url)
    });

    const status = await _page.open('https://www.promod.hu/noi/pulover-kardigan/index.html');
    console.log(status);

    const productDescrip = await _page.evaluate(function() {
      return document.querySelectorAll('.productBox');
    });
    let productList = [];
  
    for (let i = 0; i < productDescrip.length; i++) {
      const e = productDescrip[i];
      productList.push({
        'name': name,
      });
    }
  
    await _ph.exit();

    return productDescrip;

}

module.exports = getPromodList;
