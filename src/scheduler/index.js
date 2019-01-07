import deleteDeprecatedData from './deleteDeprecated';
import populateWithNewData from './populateData';

const handleData = async () => {
  
  try {
    await deleteDeprecatedData();
  } catch (error) {
    throw new Error('Deletion of Deprecated Data was unsuccessful');
  }
  console.log('--log: deletion of deprecated data was a success');
  
  try {
    await populateWithNewData();
  } catch (error) {
    throw new Error('Scraping new Data was unsuccessful');
    
  }
  console.log('--log: Scraping of new Data was a success');
      
};

export default handleData;