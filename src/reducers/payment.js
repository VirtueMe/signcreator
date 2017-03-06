import { CHANGE_PAYMENT_TYPE, CHANGE_CREDITCARD_NUMBER, CHANGE_EXPIRES_MONTH, CHANGE_EXPIRES_YEAR, CHANGE_CCV2 } from '../constants/actiontypes';
import update from 'immutability-helper';
import * as Validator from '../utils/validators'

const initialState = { type: 0, number: '', numberValid: false, month: '', year: '', expiresValid: false, ccv2: '', ccv2Valid: false, valid: true };

function creditcardValidator (state) {
  return false;
}

function expiresValidator (state) {
  const date = new Date();
  const year = parseInt(date.getFullYear().toString().substr(2,2));
  const month = date.getMonth() + 1;

  const stateYear = parseInt(state.year);
  const stateMonth = parseInt(state.month);

  if (stateYear === year) {
    return stateMonth >= month;
  }

  if (stateYear > year) {
    return stateMonth > 0;
  }

  return false;
}

export default function settings(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAYMENT_TYPE: {
      if (action.value !== state.type) {
        const valid = action.value === 0 ? true : state.numberValid && state.expiresValid && state.ccv2Valid;

        return update(state, { type: { $set: action.value }, valid: { $set: valid } });
      }

      return state;
    }

    case CHANGE_CREDITCARD_NUMBER: {
      if (action.value !== state.number) {
        const numberValid = Validator.number(action.value);

        return update(state, { number: { $set: action.value }, numberValid: { $set: numberValid }, valid: { $set: numberValid && state.expiresValid && state.ccv2Valid } });
      }

      return state;
    }

    case CHANGE_EXPIRES_MONTH: {
      if (action.value !== state.month) {
        const valid = creditcardValidator(Object.assign({}, state, { number: action.value }));

        return update(state, { month: { $set: action.value }, valid: { $set: valid } });
      }

      return state;
    }

    case CHANGE_EXPIRES_YEAR: {
      if (action.value !== state.year) {
        const expiresValid = expiresValidator(Object.assign({}, state, { year: action.value}));

        return update(state, { year: { $set: action.value }, expiresValid: { $set: expiresValid }, valid: { $set: expiresValid && state.numberValid && state.ccv2Valid } });
      }

      return state;
    }

    case CHANGE_CCV2: {
      if (action.value !== state.ccv2) {
        const ccv2Valid = action.value.length > 2 ? true : false;

        return update(state, { ccv2: { $set: action.value }, ccv2Valid: { $set: ccv2Valid }, valid: { $set: ccv2Valid && state.numberValid && state.expiresValid } });
      }

      return state;
    }

    default:
      return state
  }
}
