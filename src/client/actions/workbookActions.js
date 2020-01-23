import * as types from '../constants/workbookTypes';

// Read All
export const updateTableOfContents = (userName, data) => ({
  type: types.UPDATE_TOC,
  payload: { userName, data },
});


// Create
export const newWorkbook = (userName, workbookName) => ({
  type: types.POST_NEW_WORKBOOK,
  payload: { userName, workbookName },
});

// Read one
export const setOpenWorkbook = (workbookId, data) => {
  console.log('ID: ', workbookId);
  console.log('Data: ', data);
  return {
    type: types.SET_OPEN_WORKBOOK,
    payload: { workbookId, data },
  };
};

// Update one
export const updateWorkbook = (workbookId, value, index) => ({
  type: types.UPDATE_DATA,
  payload: { workbookId, value, index },
});

// Delete one
export const deleteWorkbook = (workbookId) => ({
  type: types.DELETE_WORKBOOK,
  payload: { workbookId },
});
