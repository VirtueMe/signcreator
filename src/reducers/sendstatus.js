import { SEND_ORDER_FAILED, SEND_ORDER_IN_PROGRESS, SEND_ORDER_SUCCESS } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { isSending: false };

export default function sendstatus(state = initialState, action) {
  switch (action.type) {
    case SEND_ORDER_IN_PROGRESS: {
      return update(state, { isSending: { $set: true } });
    }

    case SEND_ORDER_FAILED:
    case SEND_ORDER_SUCCESS: {
      if (action.error) {
        console.info('err: ', action.error);
      }
      
      return update(state, { isSending: { $set: false } });
    }

    default:
      return state
  }
}
