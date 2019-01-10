import productCategories from './catFilter';

const defineType = (store, typeFromStore) => {
  console.log('---debug defineType typeFromStore: ', typeFromStore);
  console.log('---debug defineType store: ', store);
  let universalType;
  for (key in productCategories.filter) {

    if (key[store] === typeFromStore) {
      universalType = key[store];
    }

  }
  console.log('---debug defineType universalType: ', universalType);

  return universalType;
}

export default defineType;
