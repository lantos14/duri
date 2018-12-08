import scrapePromod from './scrapePromod';

const getScrapeResults = async (query) => {
  console.log('---log: getScrapeResults fn is initiated');
  const result = [];
  
  if (query.stores.indexOf('promod') > -1) {
    console.log('---log: scrapePromod condition is met');
    const promodProducts = await scrapePromod(query.products);
    result.push(promodProducts);
  }

  return result;
}

export default getScrapeResults;
