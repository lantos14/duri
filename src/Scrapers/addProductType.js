//            pl.: hm  (kardiganok-puloverek, data) => return 'kardiganok-puloverek'
import defineType from './defineType';
const addProductType = (name, store, data) => {
  const result = data;
  const universalType = defineType(store, name);
  console.log('addProductType universalType: ', universalType);
  result.forEach(product => {
    product.type = universalType;
  });

  return result;
}

export default addProductType;
