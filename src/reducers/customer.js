import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_ADDRESS, CHANGE_ZIP, CHANGE_CITY } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { email: '', name: '', address: '', zip: '', city: '' };

export default function settings(state = initialState, action) {
  switch (action.type) {

    case CHANGE_EMAIL: {
      if (action.value !== state.email) {
        return update(state, { email: { $set: action.value } });
      }

      return state;
    }

    case CHANGE_NAME: {
      if (action.value !== state.name) {
        return update(state, { name: { $set: action.value } });
      }

      return state;
    }

    case CHANGE_ADDRESS: {
      if (action.value !== state.address) {
        return update(state, { address: { $set: action.value } });
      }

      return state;
    }

    case CHANGE_ZIP: {
      if (action.value !== state.zip) {
        return update(state, { zip: { $set: action.value } });
      }

      return state;
    }

    case CHANGE_CITY: {
      if (action.value !== state.city) {
        return update(state, { city: { $set: action.value } });
      }

      return state;
    }

    default:
      return state
  }
}
