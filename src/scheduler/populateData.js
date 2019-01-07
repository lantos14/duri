import scrapeController from '../Scrapers/scrapeController';
import Product from '../models/product.model';
import productCategories from '../Scrapers/catFilter';

const populateWithNewData = async () => {
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
};

export default populateWithNewData;