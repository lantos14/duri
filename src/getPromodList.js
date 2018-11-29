const phantom = require("phantom");
var _ph, _page, _outObj;

const getPromodList = async () => {

    let result;

    await phantom.create().then(function (ph) {
        _ph = ph;
        return _ph.createPage();

    }).then(function (page) {
        _page = page;
        return _page.open('https://www.promod.hu/noi/pulover-kardigan/index.html');

    }).then(function (status) {
        console.log(status);
        
        const title = _page.evaluate(function(s) {
            return document.querySelector(s).innerText;
        }, '#resultatsSearch');

        result = title;
        return result;

    }).then(function (content) {
        _page.close();
        _ph.exit();
        result = content;

    }).catch(function(e) {
       console.log(e); 
    });

    return result

}

module.exports = getPromodList;
