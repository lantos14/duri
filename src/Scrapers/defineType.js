import productCategories from './catFilter';

const defineType = (store, typeFromStore) => {
  console.log('---debug defineType typeFromStore: ', typeFromStore);// kabat
  console.log('---debug defineType store: ', store);// promod
  let universalType;

  Object.entries(productCategories.filter).forEach(universalProductTypeObject => {
    if (typeFromStore === universalProductTypeObject[1][store]) {
      universalType = universalProductTypeObject[0];
    }
  });

  console.log('---debug defineType universalType: ', universalType); // undefined

  return universalType;
}

export default defineType;
