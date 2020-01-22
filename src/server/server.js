/* eslint-disable no-console */
// import sheets from './routes/sheets';

const express = require('express');
const bodyParser = require('body-parser');
const workbook = require('./routes/workbook');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/workbook', workbook);

app.use(
  '/',
  (req, res) => {
    console.log('get request');
    res.status(200).send('hello world');
  },
);

app.use(
  (err, res) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
  },
);

app.listen(PORT, () => console.log(`express server listening on ${PORT}`));
