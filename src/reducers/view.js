import { SET_VIEW_INDEX } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { index: 0 };

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW_INDEX: {
      if (action.value !== state.index) {
        return update(state, { index: { $set: action.value } });
      }

      return state;
    }

    default:
      return state
  }
}
