const
  express = require('express'),
  getHmList = require('./src/getHmList'),
  getPromodList = require('./src/getPromodList'),
  app = express(),
  PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/hm', async (req, res) => {
  const options = {
    url: 'https://www2.hm.com/hu_hu/noi/vasarlas-termek-szerint/ingek-es-bluzok.html',
    headers: {
      'Accept': 'text/html',
    }
  }

  const result = await getHmList(options);
  res.json({
    'data': result,
  });
});

app.get('/promod', async (req, res) => {
  const options = {
    url: 'https://www.promod.hu/noi/pulover-kardigan/index.html',
    headers: {
      'Accept': 'text/html',
    }
  }

  const result = await getPromodList(options);
  console.log(result);
  res.json({
    'data': result,
  });
});
