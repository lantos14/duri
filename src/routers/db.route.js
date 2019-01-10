import express from 'express';
import Product from '../models/product.model';
import scrapeController from '../Scrapers/scrapeController';
import productCategories from '../Scrapers/catFilter';
import countProductsSum from '../utilities/countProductsSum';

const routerDB = express.Router();

routerDB
  .route('/products')

  .get(async (req, res, next) => {
    const limit = parseInt(req.query.limit) || 30;
    console.log('limit: ', limit);
    Product.find({
      store: ['hm', 'promod'],
      type: ['pulover-kardigan']
    })
    .limit(limit)
    .exec((err, products) => {
      return res.json({ products });
    });
  })

  
  .post(async (req, res, next) => {
    
    if (req.headers.authorization !== process.env.SECRET) {
      return res.status(401).send("401 - Not authorized");
    }
    // start the scraping
    const result = await scrapeController(productCategories);
    
    await result.forEach(productCategoryList => {
      productCategoryList.forEach(product => {
        
        // Create an instance of model Product
        const product_instance = new Product({
          "img": product.img,
          "name": product.name,
          "price": product.price,
          "store": product.store,
          "type": product.type,
        });
        
        // Save the new model instance, passing a callback
        product_instance.save(function (err) {
          if (err) return handleError(err);
          
        });
      });
    })
    
    return res.json({
      "status": "ok",
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