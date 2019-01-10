import scrapePromod from './promod/scrapePromod';
import scrapeHm from './hm/scrapeHm';

const getScrapeResults = async (productList) => {
  console.log('---log: getScrapeResults fn is initiated');
  console.log('productList: ', productList);
  const result = [];

    const promodProducts = await scrapePromod(productList.fetchList.promod);
    promodProducts.data.forEach(product => {
      result.push(product)
    });

    const hmProducts = await scrapeHm(productList.fetchList.hm);
    hmProducts.data.forEach(product => {
      result.push(product)
    });

  return result;
}

export default getScrapeResults;
