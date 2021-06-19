const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
// app.use(express.static('build'));

app.get('/api/v1.0', async (req, res) => {
  await res.send('Portfolio version 1');
});

module.exports = app;
