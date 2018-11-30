import express from 'express';
import getHmList from './src/promod/getPromodList';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/promod', async (req, res) => {
  
  const result = await getHmList();
  
  res.json({
    result,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
