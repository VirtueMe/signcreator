import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_ADDRESS, CHANGE_ZIP, CHANGE_CITY } from '../constants/actiontypes';
import update from 'immutability-helper';
import * as Validator from '../utils/validators'

const initialState = { email: '', emailValid: false, name: '', nameValid: false, address: '', addressValid: false, zip: '', zipValid: false, city: '', cityValid: false, valid: false };

export default function settings(state = initialState, action) {
  switch (action.type) {

    case CHANGE_EMAIL: {
      if (action.value !== state.email) {
        const emailValid = Validator.email(action.value);

        return update(state, { email: { $set: action.value }, emailValid: { $set: emailValid }, valid: { $set: emailValid && state.nameValid && state.addressValid && state.zipValid && state.cityValid } });
      }

      return state;
    }

    case CHANGE_NAME: {
      if (action.value !== state.name) {
        const nameValid = Validator.name(action.value);

        return update(state, { name: { $set: action.value }, nameValid: { $set: nameValid },  valid: { $set: nameValid && state.emailValid && state.addressValid && state.zipValid && state.cityValid }});
      }

      return state;
    }

    case CHANGE_ADDRESS: {
      if (action.value !== state.address) {
        const addressValid = action.value.length > 0;

        return update(state, { address: { $set: action.value }, addressValid: { $set: addressValid },  valid: { $set: addressValid && state.emailValid && state.nameValid && state.zipValid && state.cityValid }});
      }

      return state;
    }

    case CHANGE_ZIP: {
      if (action.value !== state.zip) {
        const zipValid = action.value.length > 0;

        return update(state, { zip: { $set: action.value }, zipValid: { $set: zipValid },  valid: { $set: zipValid && state.emailValid && state.nameValid && state.addressValid && state.cityValid }});
      }

      return state;
    }

    case CHANGE_CITY: {
      if (action.value !== state.city) {
        const cityValid = action.value.length > 0;

        return update(state, { city: { $set: action.value }, cityValid: { $set: cityValid },  valid: { $set: cityValid && state.emailValid && state.nameValid && state.addressValid && state.zipValid }});
      }

      return state;
    }

    default:
      return state
  }
}
