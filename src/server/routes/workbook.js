// workbook route for server.js

const express = require('express');
const workbookController = require('../controllers/workbookController');

const workbook = express.Router();

// create
workbook.post(
  '/',
  workbookController.createWorkbook,
  (req, res) => {
    const {
      data, _id, name, owner,
    } = res.locals.workbook;
    res.send({
      data,
      _id,
      name,
      owner,
    });
  },
);

// read
workbook.get(
  '/',
  workbookController.readWorkbook,
  (req, res, next) => {
    console.log('workbook - get request');
    next();
  },
  (req, res) => res.json(res.locals.workbook),
);

// udpate
workbook.patch(
  '/',
  (req, res) => {
    res.send('hello from sheets :)');
  },
);

// delete
workbook.delete(
  '/',
  (req, res) => {
    res.send('hello from sheets :)');
  },
);

module.exports = workbook;
// export default sheets;
