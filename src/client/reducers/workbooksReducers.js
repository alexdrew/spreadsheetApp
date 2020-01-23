import * as types from '../constants/workbookTypes';

const initialState = {
  user: '',

  newWorkBookName: '',
  newWorkBookOwner: '',

  tableOfContents: [],

  activeWorkbook: '',
  activeWorkbookData: [],
  activeWorkbookUserDefinedName: '',
};

const workbooksReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    // Read all
    case types.UPDATE_TOC: {
      const { data } = action.payload;
      // console.log('Reducer: ', data);
      // console.log(`${types.GET_TOC}, not coded`);
      newState.tableOfContents = data;
      break;
    }
    // create one
    case types.UPDATE_DATA: {
      const { value, index } = action.payload;
      // console.log(`${types.POST_NEW_WORKBOOK}, not coded`);
      newState.activeWorkbookData[index] = value;
      break;
    }
    // Read one
    case types.SET_OPEN_WORKBOOK: {
      // console.log(`${types.POST_NEW_WORKBOOK}, not coded`);
      console.log('action payload: ', action.payload);
      const { activeWorkbook } = state;
      const { workbookId, data } = action.payload;

      console.log(data);

      // console.log('active: ', activeWorkBook);
      // console.log('passed in: ', workbookId);

      if (activeWorkbook === workbookId) {
        newState.activeWorkbook = '';
        newState.activeWorkbookData = [];
        newState.activeWorkbookUserDefinedName = '';
      } else {
        newState.activeWorkbook = workbookId;
        newState.activeWorkbookData = data.data;
        newState.activeWorkbookUserDefinedName = data.name;
      }
      break;
    }
    // Update
    case types.PATCH_WORKBOOK: {
      console.log(`${types.PATCH_WORKBOOK}, not coded`);
      break;
    }
    // Delete
    case types.DELETE_WORKBOOK: {
      console.log(`${types.DELETE_WORKBOOK}, not coded`);
      break;
    }
    default: {
      // newState = state;
      // console.log('Default reducer triggered');
    }
  }
  // console.log('reducer finished');
  // console.log(newState);
  return newState;
};

export default workbooksReducer;
