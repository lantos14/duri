const cheerio = require('cheerio');
const rp = require('request-promise');

const getClothList = async options => {

  let clothList = [];

  await rp(options)

    .then(html => {
      const $ = cheerio.load(html);
      let counter = 1;

      $('.products-listing').find('li').each(function (i, el) {
        if (i % 2 === 0) {
          clothList.push({
            'serialNum': counter,
            'name': cheerio.load(el)(' article > .item-details > .item-heading > a').text(),
            'price': cheerio.load(el)(' article > .item-details > .item-price > span').text(),
            'img': cheerio.load(el)(' article > .image-container > a > .item-image').attr('src'),
          })
          counter++;
        }
      })
    })

    .catch(err => {
      console.log(err);
    });

  return clothList;
}

module.exports = getClothList;
