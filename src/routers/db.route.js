import express from 'express';
import Product from '../models/product.model';
import scrapeController from '../Scrapers/scrapeController';
import productCategories from '../Scrapers/catFilter';
import countProductsSum from '../utilities/countProductsSum';

const routerDB = express.Router();

routerDB
  .route('/products')

  .get(async (req, res, next) => {
    Product.find({ type: {$in: ["nadragok", "felsok"]} }, (err, products) => {
      return res.json({ products });
    });
  })

  
  .post(async (req, res, next) => {
    
    // start the scraping
    const productList = new productCategories;
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