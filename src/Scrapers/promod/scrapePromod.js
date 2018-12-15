import scrapeWorkerPromod from './scrapeWorkerPromod';
import countProductNum from '../../utilities/counter';

const scrapePromod = async (products) => {
  console.log('---log: scrapePromod fn is initiated with: ', products);
  // establish result object
  const productsResult = {};
  productsResult.store = 'promod';

  const promises = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    promises.push(scrapeWorkerPromod(product));
  }

  await Promise.all(promises).
  then((results) => {
    productsResult.dataLength = countProductNum(results);
    productsResult.data = results;

  });

  return productsResult;
}

export default scrapePromod;
