// Middleware to be used in workbook.js

/* eslint-disable no-console */
// const path = require('path');
// const fs = require('fs');
const { Workbook } = require('../models/awwwSheeetModel');

const workbookController = {};
const blankWorkbook = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

// Create Spreadsheet
workbookController.createWorkbook = (req, res, next) => {
  console.log('making new workbook');
  Workbook.create(
    {
      name: 'Alex\'s first workbook',
      owner: 'Alex',
      data: blankWorkbook,
    },
    (err, workbook) => {
      if (err) return res.status(400).send('Unable to create new document');
      res.locals.workbook = workbook;
      return next();
    },
  );
};

// Read Spreadsheet
workbookController.readWorkbook = async (req, res, next) => {
  Workbook.findOne(
    {
      _id: '5e27988b20b39e254a5eca05',
    },
    (err, returnedDoc) => {
      if (err) {
        console.log(err.message, '\n', err.stack);
        return res.status(400).send('Workbook not found');
      }
      console.log(returnedDoc);
      const {
        data, name, owner, _id,
      } = returnedDoc;
      res.locals.workbook = {
        data, name, owner, _id,
      };
      return next();
    },
  );
};

// Update Spreadsheet
workbookController.updateWorkbook = (req, res, next) => {
  res.locals = req.params;
  next();
};


// Delete Spreadsheet
workbookController.deleteWorkbook = (req, res, next) => {
  res.locals = req.params;
  next();
};

module.exports = workbookController;
