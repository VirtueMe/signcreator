import { SEND_ORDER_SUCCESS, SET_VIEW_INDEX } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { index: 0 };

export default function settings(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case SEND_ORDER_SUCCESS: {
      return update(state, { index: { $set: state.index+1 } });
    }

    case SET_VIEW_INDEX: {
      if (payload.value !== state.index) {
        return update(state, { index: { $set: payload.value } });
      }

      return state;
    }

    default:
      return state
  }
}
