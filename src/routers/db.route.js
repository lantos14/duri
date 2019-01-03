import express from 'express';
import Product from '../models/product.model';
import scrapeController from '../Scrapers/scrapeController';
import productCategories from '../Scrapers/catFilter';
import countProductsSum from '../utilities/countProductsSum';

const routerDB = express.Router();

routerDB
  .route('/products')

  .get((req, res, next) => {
    return res.json({ "method": "get" });
  })

  .post(async (req, res, next) => {

    // start the scraping
    const productList = new productCategories;
    console.log('masterList: ', productList.fetchList);
    const result = await scrapeController(productList.fetchList);    
    
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
      "ProductsFound": countProductsSum(result),
    });
  });

const handleError = function (err) {
  console.error(err);
  // handle your error
};

module.exports = routerDB;