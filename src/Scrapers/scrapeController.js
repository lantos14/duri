import scrapePromod from './scrapePromod';

const getScrapeResults = async (query) => {
  let result = [];

  if (query.stores.indexOf('promod') > -1) {
    await result.push(scrapePromod(query.products));
  }

  return result;
}

export default getScrapeResults;
