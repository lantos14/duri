// gets the query params and split them into an arrays
// returns an object with the given arrays
const parseQuery = (req) => {
  let result = {};
  if (req.products) {
    result.products = req.products.split(',');
  }
  if (req.stores) {
    result.stores = req.stores.split(',');
  }

  return result;
}

export default parseQuery;
