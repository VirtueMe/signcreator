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
  const {payload} = action;

  switch (action.type) {
    case CHANGE_PAYMENT_TYPE: {
      if (payment.value !== state.type) {
        const valid = payment.value === 0 ? true : state.numberValid && state.expiresValid && state.ccv2Valid;

        return update(state, { type: { $set: payment.value }, valid: { $set: valid } });
      }

      return state;
    }

    case CHANGE_CREDITCARD_NUMBER: {
      if (payment.value !== state.number) {
        const numberValid = Validator.number(payment.value);

        return update(state, { number: { $set: payment.value }, numberValid: { $set: numberValid }, valid: { $set: numberValid && state.expiresValid && state.ccv2Valid } });
      }

      return state;
    }

    case CHANGE_EXPIRES_MONTH: {
      if (payment.value !== state.month) {
        const valid = creditcardValidator(Object.assign({}, state, { number: payment.value }));

        return update(state, { month: { $set: payment.value }, valid: { $set: valid } });
      }

      return state;
    }

    case CHANGE_EXPIRES_YEAR: {
      if (payment.value !== state.year) {
        const expiresValid = expiresValidator(Object.assign({}, state, { year: payment.value}));

        return update(state, { year: { $set: payment.value }, expiresValid: { $set: expiresValid }, valid: { $set: expiresValid && state.numberValid && state.ccv2Valid } });
      }

      return state;
    }

    case CHANGE_CCV2: {
      if (payment.value !== state.ccv2) {
        const ccv2Valid = payment.value.length > 2 ? true : false;

        return update(state, { ccv2: { $set: payment.value }, ccv2Valid: { $set: ccv2Valid }, valid: { $set: ccv2Valid && state.numberValid && state.expiresValid } });
      }

      return state;
    }

    default:
      return state
  }
}
