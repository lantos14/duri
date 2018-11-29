const phantom = require("phantom");

const getPromodList = async () => {

    const _ph = await phantom.create();
    const _page = await _ph.createPage();

    await _page.on("onResourceRequested", function(requestData) {
        console.info('Requesting', requestData.url)
    });

    const status = await _page.open('https://www.promod.hu/noi/pulover-kardigan/index.html');
    console.log(status);

    const result = await _page.evaluate(function(s) {
        return document.querySelector(s).innerText;
    }, '#resultatsSearch');

    await _ph.exit();

    return result;

}

module.exports = getPromodList;
