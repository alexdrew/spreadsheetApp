import { combineReducers } from 'redux';

import workbookReducer from './workbooksReducers';

const reducers = combineReducers(
  { workbookReducer },
);

export default reducers;
