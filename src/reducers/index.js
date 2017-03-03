import { combineReducers } from 'redux';
import items from './emojis';
import settings from './settings';

const rootReducer = combineReducers({
  items, settings
});

export default rootReducer;
