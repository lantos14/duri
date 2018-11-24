const
  express = require('express'),
  getClothList = require('./src/rp'),
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

  const result = await getClothList(options);
  console.log(result);
  res.json({
    'data': result,
  });
});

