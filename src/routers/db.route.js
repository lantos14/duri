import express from 'express';
import Product from '../models/product.model';
import handleData from '../scheduler';

const routerDB = express.Router();

routerDB
  .route('/products')

  .get(async (req, res, next) => {
    if (!req.query.store || !req.query.type) {
      return res.status(400).send({ error: "Store or type data hasn't been provided" })
    }
    const storeQuery = (req.query.store || '').split(',') || '';
    const typeQuery = (req.query.type || '').split(',') || '';
    Product.find({
      store: storeQuery,
      type: typeQuery,
    })
    .exec((err, products) => {
      return res.json({ products });
    });
  })

  
  .post(async (req, res, next) => {
    
    if (req.headers.authorization !== process.env.SECRET) {
      return res.status(401).send("401 - Not authorized");
    }
    // start the scraping
    const status = await handleData();

    return res.json({
      status,
    });
  })
  
  .delete(async (req, res, next) => {
    Product.deleteMany({ }, (err) => {
      return res.json({ result: "success" });
    });
  });

  const handleError = function (err) {
  console.error(err);
  // handle your error
};

module.exports = routerDB;