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
export const openWorkbook = (workbookId) => ({
  type: types.GET_WORKBOOK,
  payload: { workbookId },
});

// Update one
export const updateWorkbook = (workbookId, data) => ({
  type: types.PATCH_WORKBOOK,
  payload: { workbookId, data },
});

// Delete one
export const deleteWorkbook = (workbookId) => ({
  type: types.DELETE_WORKBOOK,
  payload: { workbookId },
});
