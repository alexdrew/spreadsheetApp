import * as types from '../constants/workbookTypes';

const initialState = {
  user: '',
  tableOfContents: [],
  data: [],

  newWorkBookName: '',
  newWorkBookOwner: '',
};

const workbooksReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    // Read all
    case types.UPDATE_TOC: {
      const { data } = action.payload;
      console.log('Reducer: ', data);
      // console.log(`${types.GET_TOC}, not coded`);
      newState = JSON.parse(JSON.stringify(state));
      newState.data = data;
      break;
    }
    // create one
    case types.POST_NEW_WORKBOOK: {
      console.log(`${types.POST_NEW_WORKBOOK}, not coded`);
      break;
    }
    // Read one
    case types.GET_WORKBOOK: {
      console.log(`${types.POST_NEW_WORKBOOK}, not coded`);
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
    default:
      newState = state;
  }
  console.log('reducer finished');
  return newState;
};

export default workbooksReducer;
