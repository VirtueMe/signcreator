import { combineReducers } from 'redux';
import items from './emojis';
import settings from './settings';
import customer from './customer';
import payment from './payment';

const rootReducer = combineReducers({
  items, settings, customer, payment
});

export default rootReducer;
