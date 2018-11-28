const cheerio = require('cheerio');
const rp = require('request-promise');

const getPromodList = async options => {

  let clothList;

  await rp(options)

    .then(html => {
      const $ = cheerio.load(html);

      $('#resultatsSearch').find('article').each(function (i, el) {
        clothList.push({
          'serialNum': counter,
          'name': cheerio.load(el).attr('data-product-name'),
          'price': cheerio.load(el)('.descrip > .prix > .current > .decimales').text(),
          'img': cheerio.load(el)('.search-product > .visuel-container > .tooltip-produit > .tooltip-content > .imgtooltip > a > img').attr('src'),
        });
      })

        .catch(err => {
          console.log(err);
        });

      return clothList;
    })
}
module.exports = getPromodList;
