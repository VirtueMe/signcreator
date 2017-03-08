import { combineReducers } from 'redux';
import items from './emojis';
import settings from './settings';
import customer from './customer';
import payment from './payment';
import view from './view';

const rootReducer = combineReducers({
  items, settings, customer, payment, view
});

export default rootReducer;
