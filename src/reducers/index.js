import { combineReducers } from 'redux';
import customer from './customer';
import items from './emojis';
import payment from './payment';
import settings from './settings';
import texts from './texts';
import view from './view';


const rootReducer = combineReducers({
  items, settings, customer, payment, texts, view
});

export default rootReducer;
