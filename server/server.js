const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./routes/api');
const PORT = 3100;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);
app.get('/', function (req, res) {
  res.send('Hello from server');
});

app.listen(PORT, function () {
  console.log('Server running on localhost:' + PORT);
});