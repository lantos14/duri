import express from 'express';
import scrapeController from './src/Scrapers/scrapeController';
import parseQuery from './src/utilities/parseQuery';
import Product from './src/models/product.model';
const app = express();

const bodyParser = require('body-parser');
const PORT = 3000;

const handleError = function(err) {
  console.error(err);
  // handle your error
};

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://lantos:<PASSWORD>@duri-products-euhwc.mongodb.net/duriDB?retryWrites=true';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

app.get('/', async (req, res) => {

  const queries = parseQuery(req.query);
  console.log(`query parameters: `, queries);
  const result = await scrapeController(queries);

  res.json({
    result,
  });
});

app.get('/db', () => {

  // Create an instance of model SomeModel
  var awesome_instance = new Product({ name: 'awesome', price: '300' });

  // Save the new model instance, passing a callback
  awesome_instance.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
