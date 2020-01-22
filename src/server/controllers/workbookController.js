/* eslint-disable no-underscore-dangle */
// Middleware to be used in workbook.js

/* eslint-disable no-console */
// const path = require('path');
// const fs = require('fs');
const { Workbook } = require('../models/awwwSheeetModel');

const workbookController = {};
const blankWorkbook = [];

// Read Spreadsheet
workbookController.getAllWorkbooks = (req, res, next) => {
  Workbook.find(
    {
      user: req.body.user,
    },
    '_id name owner data',
    (err, queryResponse) => {
      if (err) {
        console.log('error occured :( \n', err.message, '\n', err.stack);
        return res.status(400).send('Could not find workbooks for requested user');
      }
      res.locals.workbooks = queryResponse;
      return next();
    },
  );
};

// Create Spreadsheet
workbookController.createWorkbook = (req, res, next) => {
  console.log('making new workbook');
  Workbook.create(
    {
      name: req.body.name,
      owner: req.body.owner,
      data: blankWorkbook,
    },
    (err, workbook) => {
      if (err) return res.status(400).send('Unable to create new document');
      res.locals.workbook = workbook;
      return next();
    },
  );
};

// Read Workbook
workbookController.readWorkbook = (req, res, next) => {
  Workbook.findOne(
    {
      _id: req.params.workbookId,
    },
    (err, returnedDoc) => {
      if (err) {
        console.log(err.message, '\n', err.stack);
        return res.status(400).send('Workbook not found');
      }
      // console.log(returnedDoc);
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
workbookController.updateWorkbook = async (req, res, next) => {
  await Workbook.updateOne(
    {
      _id: req.params.workbookId,
    },
    {
      data: req.body.data,
    },
  );

  return next();
};


// Delete Spreadsheet
// TODO: Write Me!!!!!
workbookController.deleteWorkbook = (req, res, next) => {
  Workbook.deleteOne(
    {
      _id: req.params.workbookId,
    },
    (err) => {
      if (err) {
        console.log('error occured :( \n', err.message, '\n', err.stack);
        return res.status(400).send('Error while deleting workbook');
      }
      return next();
    },
  );
};

module.exports = workbookController;
