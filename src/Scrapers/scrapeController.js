import scrapePromod from './promod/scrapePromod';
import scrapeHm from './hm/scrapeHm';
import productCategories from './catFilter';

const getScrapeResults = async (query) => {
  console.log('---log: getScrapeResults fn is initiated');
  const result = [];
  const masterList = new productCategories;
  
  if (query.stores.indexOf('promod') > -1) {
    console.log('---log: scrapePromod condition is met');

    const promodProdNames = await masterList.parseInput(query.products, 'promod');
    const promodProducts = await scrapePromod(promodProdNames);
    result.push(promodProducts);
  }

  if (query.stores.indexOf('hm') > -1) {
    console.log('---log: scrapeHm condition is met');
    const promodProdNames = await masterList.parseInput(query.products, 'hm');
    const hmProducts = await scrapeHm(promodProdNames);
    result.push(hmProducts);
  }

  return result;
}

export default getScrapeResults;
