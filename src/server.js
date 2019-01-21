import express from 'express';
import cron from 'node-cron';
import handleData from './scheduler/index';

const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const { routerDB, routerUser, routerTest } = require('./routers');
const PORT = process.env.PORT || 3000;

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@duri-products-euhwc.mongodb.net/duriDB?retryWrites=true`;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// routes

app.use(routerDB);
app.use(routerUser);
app.use(routerTest);

app.get('/test', async (req, res) => {

  res.json({
    'msg': 'Server is up and running',
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
