import scrapeWorkerPromod from './scrapeWorkerPromod';

const scrapePromod = async (products) => {
  console.log('---log: scrapePromod fn is initiated with: ', products);
  // establish result object
  const productsResult = {};
  productsResult.store = 'promod';
  let dataContent = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const scrapeResult = await scrapeWorkerPromod(product);
    dataContent.push(scrapeResult);
  }

  productsResult.data = dataContent;
  return productsResult;
}

export default scrapePromod;
