// workbook route for server.js

const express = require('express');
const workbookController = require('../controllers/workbookController');

const workbook = express.Router();

const respondWithWorkbook = (req, res) => {
  let response;

  if (res.locals.workbook) {
    const {
      data, _id, name, owner,
    } = res.locals.workbook;
    response = {
      data,
      _id,
      name,
      owner,
    };
  }

  return res.json(response);
};

// get all workbooks for requested user
workbook.get(
  '/toc',
  // TODO: STRETCH...Add auth check
  workbookController.getAllWorkbooks,
  (req, res) => res.json(res.locals.workbooks),
);

// create
workbook.post(
  '/',
  // TODO: STRETCH...Add auth check
  workbookController.createWorkbook,
  respondWithWorkbook,
);

// read
workbook.get(
  '/:workbookId',
  // TODO: STRETCH...Add auth check
  workbookController.readWorkbook,
  respondWithWorkbook,
);

// udpate
workbook.patch(
  '/:workbookId',
  // TODO: STRETCH...Add auth check
  workbookController.updateWorkbook,
  workbookController.readWorkbook,
  respondWithWorkbook,
);

// delete
// TODO: Write Me!!!!!
workbook.delete(
  '/:workbookId',
  // TODO: STRETCH...Add auth check
  workbookController.deleteWorkbook,
  workbookController.getAllWorkbooks,
  (req, res) => res.json(res.locals.workbooks),
);

module.exports = workbook;
