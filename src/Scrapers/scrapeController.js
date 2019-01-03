import scrapePromod from './promod/scrapePromod';
import scrapeHm from './hm/scrapeHm';
import productCategories from './catFilter';

const getScrapeResults = async (productList) => {
  console.log('---log: getScrapeResults fn is initiated');
  console.log('productList: ', productList);
  const result = [];
  const masterList = new productCategories;

    const promodProducts = await scrapePromod(productList.promod.slice(0, 5));
    promodProducts.data.forEach(product => {
      result.push(product)
    });

    const hmProducts = await scrapeHm(productList.hm.slice(0, 5));
    hmProducts.data.forEach(product => {
      result.push(product)
    });

  return result;
}

export default getScrapeResults;
