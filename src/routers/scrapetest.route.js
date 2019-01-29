import express from 'express';
import Product from '../models/product.model';
import handleData from '../scheduler';
const routerTest = express.Router();

routerTest
  .route('/test')

  .get((req, res) => {
    console.log('--log--test ... req.query: ', req.query);

    const storeQuery = req.query.store.split(',') || '';

    console.log('--log--test ... storeQuery: ', storeQuery);

    Product.find({ store: storeQuery }, (err, result) => {
      return res.json({ 
        'data.length': result.length, 
        'data': result,
      });
    })

  })

  .post(async (req, res, next) => {

    if (req.headers.authorization !== process.env.SECRET) {
      return res.status(401).send("401 - Not authorized");
    }
    // start the scraping
    const status = await handleData(true);

    return res.json({
      status,
    });
  })


module.exports = routerTest;