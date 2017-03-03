import { SET_TYPE, ADD_TOPLINE, ADD_LEFTLINE, ADD_RIGHTLINE, ADD_BOTTOMLINE } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { type: 1, top: null, left: null, right: null, bottom: null };

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_TYPE: {
      if (action.value !== state.type) {
        return update(state, { type: action.value });
      }

      return state;
    }

    default:
      return state
  }
}
