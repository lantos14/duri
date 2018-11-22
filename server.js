const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
	url: 'https://www2.hm.com/hu_hu/noi/vasarlas-termek-szerint/ingek-es-bluzok.html',
	headers: {
		'Accept': 'text/html',
	}
}

const result = [];
let counter = 1;

rp(options)
	.then(html => {
		const $ = cheerio.load(html);

		$('.products-listing').find('li').each(function (i, el) {
			if ( i % 2 === 0) {
				result.push({
					'serialNum': counter,
					'name': cheerio.load(el)(' article > .item-details > .item-heading > a').text(),
					'price': cheerio.load(el)(' article > .item-details > .item-price > span').text(),
					'img': cheerio.load(el)(' article > .image-container > a > .item-image').attr('data-altimage'),
				})
				counter++;
			}
		})
	})
	// const name = $('.products-listing > li:first-child > article > .item-details > .item-heading > a', html).text()
	// const price = $('.products-listing > li:first-child > article > .item-details > .item-price > span', html).text()

	.catch(err => {
		console.log(err);
	});

	setTimeout(() => {
		console.log(result);
	}, 2000);
