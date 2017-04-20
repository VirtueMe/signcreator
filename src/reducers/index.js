import { combineReducers } from 'redux';
import customer from './customer';
import items from './emojis';
import payment from './payment';
import sendstatus from './sendstatus';
import settings from './settings';
import templates from './templates';
import texts from './texts';
import view from './view';
import fetch from './fetch';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
  fetch, settings, items, customer, payment, templates, texts, view, sendstatus, routing
});

export default rootReducer;
