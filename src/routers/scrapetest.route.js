import express from 'express';
import Product from '../models/product.model';

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

  });


module.exports = routerTest;