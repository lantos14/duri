import deleteDeprecatedData from './deleteDeprecated';
import populateWithNewData from './populateData';
import countProductsSum from '../utilities/countProductsSum';

const handleData = async () => {
  let data;

  try {
    await deleteDeprecatedData();
  } catch (error) {
    throw new Error('Deletion of Deprecated Data was unsuccessful');
  }
  console.log('--log: deletion of deprecated data was a success');

  try {
    data = await populateWithNewData();
  } catch (error) {
    throw new Error('Scraping new Data was unsuccessful');

  }
  console.log('--log: Scraping of new Data was a success');

  return {
    msg: 'update was successful',
    numberOfProducts: countProductsSum(data),
  };
};

export default handleData;