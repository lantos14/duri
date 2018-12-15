import scrapeWorkerHm from './scrapeWorkerHm';
import countProductNum from '../../utilities/counter';

const scrapeHm = async (products) => {
  console.log('---log: scrapeHm fn is initiated with: ', products);
  // establish result object
  const productsResult = {};
  productsResult.store = 'hm';

  const promises = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    promises.push(scrapeWorkerHm(product));
  }

  await Promise.all(promises).
  then((results) => {
    productsResult.dataLength = countProductNum(results);
    productsResult.data = results;

  });

  return productsResult;
}

export default scrapeHm;
