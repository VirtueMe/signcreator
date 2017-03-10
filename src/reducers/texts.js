import { SET_TEXTS } from '../constants/actiontypes';

const initialState = { };

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_TEXTS: {
      return Object.assign({}, state, action.texts);
    }
    default:
      return state
  }
}
