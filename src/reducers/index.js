import { combineReducers } from 'redux';
import customer from './customer';
import items from './emojis';
import payment from './payment';
import sendstatus from './sendstatus';
import settings from './settings';
import texts from './texts';
import view from './view';


const rootReducer = combineReducers({
  settings, items, customer, payment, texts, view, sendstatus
});

export default rootReducer;
