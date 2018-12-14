import express from 'express';
import scrapeController from './src/Scrapers/scrapeController';
import parseQuery from './src/utilities/parseQuery';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', async (req, res) => {

  const queries = parseQuery(req.query);
  console.log(`query parameters: `, queries);
  const result = await scrapeController(queries);
  
  res.json({
    result,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
