import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_ADDRESS, CHANGE_ZIP, CHANGE_CITY } from '../constants/actiontypes';
import update from 'immutability-helper';
import * as Validator from '../utils/validators'

const initialState = { email: '', emailValid: false, name: '', nameValid: false, address: '', addressValid: false, zip: '', zipValid: false, city: '', cityValid: false, valid: false };

export default function settings(state = initialState, action) {
  const {payload} = action;
  switch (action.type) {

    case CHANGE_EMAIL: {
      if (payload.value !== state.email) {
        const emailValid = Validator.email(payload.value);

        return update(state, { email: { $set: payload.value }, emailValid: { $set: emailValid }, valid: { $set: emailValid && state.nameValid && state.addressValid && state.zipValid && state.cityValid } });
      }

      return state;
    }

    case CHANGE_NAME: {
      if (payload.value !== state.name) {
        const nameValid = Validator.name(payload.value);

        return update(state, { name: { $set: payload.value }, nameValid: { $set: nameValid },  valid: { $set: nameValid && state.emailValid && state.addressValid && state.zipValid && state.cityValid }});
      }

      return state;
    }

    case CHANGE_ADDRESS: {
      if (payload.value !== state.address) {
        const addressValid = payload.value.length > 0;

        return update(state, { address: { $set: payload.value }, addressValid: { $set: addressValid },  valid: { $set: addressValid && state.emailValid && state.nameValid && state.zipValid && state.cityValid }});
      }

      return state;
    }

    case CHANGE_ZIP: {
      if (payload.value !== state.zip) {
        const zipValid = payload.value.length > 0;

        return update(state, { zip: { $set: payload.value }, zipValid: { $set: zipValid },  valid: { $set: zipValid && state.emailValid && state.nameValid && state.addressValid && state.cityValid }});
      }

      return state;
    }

    case CHANGE_CITY: {
      if (payload.value !== state.city) {
        const cityValid = payload.value.length > 0;

        return update(state, { city: { $set: payload.value }, cityValid: { $set: cityValid },  valid: { $set: cityValid && state.emailValid && state.nameValid && state.addressValid && state.zipValid }});
      }

      return state;
    }

    default:
      return state
  }
}
