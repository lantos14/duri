'use strict';

const rp = require('request-promise');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cheerio = require('cheerio');

app.use(express.json());


const options = {
	url: 'https://www2.hm.com/hu_hu/noi/vasarlas-termek-szerint/ingek-es-bluzok.html',
	headers: {
		'Accept': 'text/html',
	}
}

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
  });

  app.get('/hm', (req, res) => {
    const result = [];
    let finished;
	  
	  rp(options)
    
    .then(html => {
		  const $ = cheerio.load(html);
		  let counter = 1;
	
			$('.products-listing').find('li').each(function (i, el) {
				if ( i % 2 === 0) {
					result.push({
            'serialNum': counter,
						'name': cheerio.load(el)(' article > .item-details > .item-heading > a').text(),
						'price': cheerio.load(el)(' article > .item-details > .item-price > span').text(),
						'img': cheerio.load(el)(' article > .image-container > a > .item-image').attr('src'),
					})
					counter++;
				}
			})
    })
    
    .then(() => {
      finished = true;

    })

		.catch(err => {
			console.log(err);
    });

    const interval = setInterval(() => {
      if (finished) {
        res.json({
          'data': result,
        });
        clearInterval(interval);
      }
    }, 500);
  });

