import express from 'express';
import cron from 'node-cron';
import scrapeController from './Scrapers/scrapeController';
import parseQuery from './utilities/parseQuery';
import handleData from './scheduler/index';

const app = express();
const bodyParser = require('body-parser');
const { routerDB, routerUser } = require('./routers');
const PORT = process.env.PORT || 3000;

require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@duri-products-euhwc.mongodb.net/duriDB?retryWrites=true`;
console.log('process.env.DB_USERNAME: ', process.env.DB_USERNAME);
console.log('process.env.DB_PWD: ', process.env.DB_PWD);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// routes

app.use(routerDB);
app.use(routerUser);

app.get('/test', async (req, res) => {

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

// initiate schedule

cron.schedule('0 0 * * *', () => {
  console.log('---log: daily data fetching started');

  handleData();
});
