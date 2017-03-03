import { SET_TYPE, ADD_TOPLINE, ADD_LEFTLINE, ADD_RIGHTLINE, ADD_BOTTOMLINE } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = { type: 1, top: 0, left: 0, right: 0, bottom: 0 };

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_TYPE: {
      if (action.value !== state.type) {
        return update(state, { $set: { type: action.value } });
      }

      return state;
    }

    case ADD_TOPLINE: {
      if (action.top !== state.top) {
        return update(state, { $set: { top: action.top } });
      }

      return state;
    }

    case ADD_LEFTLINE: {
      if (action.left !== state.left) {
        return update(state, { $set: { left: action.left } });
      }

      return state;
    }

    case ADD_RIGHTLINE: {
      if (action.right !== state.right) {
        return update(state, { $set: { right: action.right } });
      }

      return state;
    }

    case ADD_BOTTOMLINE: {
      if (action.bottom !== state.bottom) {
        return update(state, { $set: { bottom: action.bottom } });
      }

      return state;
    }


    default:
      return state
  }
}
