/* eslint-disable no-console */
// import sheets from './routes/sheets';

const express = require('express');
const bodyParser = require('body-parser');
const workbook = require('./routes/workbook');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Testing console.log
// app.use((req, res, next) => {
//   console.log('req.params: ', req.params);
//   console.log('req.header: ', req.headers);
//   console.log('req.body: ', req.body);
//   console.log('req.url: ', req.url);
//   console.log('');
//   next();
// });

app.use('/workbook', workbook);


app.use(
  '/',
  (req, res) => {
    console.log('get request');
    return res.status(200).send('hello world from base server "/"');
  },
);

app.use(
  (err, res) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
  },
);

app.listen(PORT, () => console.log(`express server listening on ${PORT}`));
