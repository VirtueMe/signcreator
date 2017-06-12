import { CLOSE_FAILMESSAGE, SEND_ORDER_FAILED, SEND_ORDER_IN_PROGRESS, SEND_ORDER_SUCCESS } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { isSending: false, message: '' };

export default function sendstatus(state = initialState, action) {
  switch (action.type) {
    case SEND_ORDER_IN_PROGRESS: {
      return update(state, { isSending: { $set: true }, message: { $set: '' } });
    }

    case SEND_ORDER_FAILED:
    case SEND_ORDER_SUCCESS: {
      if (action.error) {
        console.info('err: ', action.error);
      }

      return update(state, { isSending: { $set: false }, message: { $set: action.error || '' } });
    }

    case CLOSE_FAILMESSAGE:
      return update(state, { message: { $set: '' } });

    default:
      return state
  }
}
