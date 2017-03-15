import { CHANGE_PAYMENT_TYPE, CHANGE_CREDITCARD_NUMBER, CHANGE_EXPIRES_MONTH, CHANGE_EXPIRES_YEAR, CHANGE_CCV2 } from '../constants/actiontypes';
import update from 'immutability-helper';
import * as Validator from '../utils/validators'

const initialState = { type: 0, number: '', numberValid: false, month: '', year: '', expiresValid: false, ccv2: '', ccv2Valid: false, valid: true };

function expiresValidator (state) {
  const date = new Date();
  const year = parseInt(date.getFullYear().toString().substr(2,2), 10);
  const month = date.getMonth() + 1;

  const stateYear = parseInt(state.year, 10);
  const stateMonth = parseInt(state.month, 10);

  if (stateYear === year) {
    return stateMonth >= month;
  }

  if (stateYear > year) {
    return stateMonth > 0;
  }

  return false;
}

export default function settings(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case CHANGE_PAYMENT_TYPE: {
      if (payload.value !== state.type) {
        const valid = payload.value === 0 ? true : state.numberValid && state.expiresValid && state.ccv2Valid;

        return update(state, { type: { $set: payload.value }, valid: { $set: valid } });
      }

      return state;
    }

    case CHANGE_CREDITCARD_NUMBER: {
      if (payload.value !== state.number) {
        const numberValid = Validator.number(payload.value);

        return update(state, { number: { $set: payload.value }, numberValid: { $set: numberValid }, valid: { $set: numberValid && state.expiresValid && state.ccv2Valid } });
      }

      return state;
    }

    case CHANGE_EXPIRES_MONTH: {
      if (payload.value !== state.month) {
        const valid = expiresValidator(Object.assign({}, state, { month: payload.value }));

        return update(state, { month: { $set: payload.value }, valid: { $set: valid } });
      }

      return state;
    }

    case CHANGE_EXPIRES_YEAR: {
      if (payload.value !== state.year) {
        const expiresValid = expiresValidator(Object.assign({}, state, { year: payload.value}));

        return update(state, { year: { $set: payload.value }, expiresValid: { $set: expiresValid }, valid: { $set: expiresValid && state.numberValid && state.ccv2Valid } });
      }

      return state;
    }

    case CHANGE_CCV2: {
      if (payload.value !== state.ccv2) {
        const ccv2Valid = payload.value.length > 2 ? true : false;

        return update(state, { ccv2: { $set: payload.value }, ccv2Valid: { $set: ccv2Valid }, valid: { $set: ccv2Valid && state.numberValid && state.expiresValid } });
      }

      return state;
    }

    default:
      return state
  }
};
