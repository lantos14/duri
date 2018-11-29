const
  express = require('express'),
  getHmList = require('./src/getPromodList'),
  app = express(),
  PORT = 3000;

app.use(express.json());

app.get('/hm', async (req, res) => {
  
  const result = await getHmList();
  
  res.json({
    'data': result,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
