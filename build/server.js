'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nodeCron = require('node-cron');

var _nodeCron2 = _interopRequireDefault(_nodeCron);

var _index = require('./scheduler/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var cors = require('cors');
var bodyParser = require('body-parser');

var _require = require('./routers'),
    routerDB = _require.routerDB,
    routerUser = _require.routerUser,
    routerTest = _require.routerTest;

var PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(_express2.default.json());
app.use(cors());

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PWD + '@duri-products-euhwc.mongodb.net/duriDB?retryWrites=true';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// routes

app.use(routerDB);
app.use(routerUser);
app.use(routerTest);

app.get('/test', async function (req, res) {

  res.json({
    'msg': 'Server is up and running'
  });
});

app.listen(PORT, function () {
  console.log('Server is running on port ' + PORT);
});

// initiate schedule

_nodeCron2.default.schedule('0 0 * * *', function () {
  console.log('---log: daily data fetching started');

  (0, _index2.default)();
});
//# sourceMappingURL=server.js.map