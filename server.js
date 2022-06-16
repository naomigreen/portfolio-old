const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const houseData = require('./data/houses.json');
const gdpData = require('./data/gdp.json');

app.get('/api/data/gdp', (req, res) => {
  res.send(gdpData);
});

app.get('/api/data/houses', (req, res) => {
  res.send(houseData);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
