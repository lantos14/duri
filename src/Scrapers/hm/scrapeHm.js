import scrapeWorkerHm from './scrapeWorkerHm';

const scrapeHm = async (products) => {
  console.log('---log: scrapeHm fn is initiated with: ', products);
  // establish result object
  const productsResult = {};
  productsResult.store = 'hm';
  let dataContent = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const scrapeResult = await scrapeWorkerHm(product);
    dataContent.push(scrapeResult);
  }

  productsResult.data = dataContent;
  return productsResult;
}

export default scrapeHm;
