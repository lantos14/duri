import scrapePromod from './promod/scrapePromod';
import scrapeHm from './hm/scrapeHm';

const getScrapeResults = async (productList) => {
  console.log('---log: getScrapeResults fn is initiated');
  console.log('productList: ', productList);
  const result = [];

  if (productList.promod) {
    const promodProducts = await scrapePromod(productList.promod);
    promodProducts.data.forEach(product => {
      result.push(product)
    });
  }

  if (productList.hm) {
    const hmProducts = await scrapeHm(productList.hm);
    hmProducts.data.forEach(product => {
      result.push(product)
    });
  }

  return result;
}

export default getScrapeResults;
