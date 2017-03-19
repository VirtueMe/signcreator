import { FETCH_TEXTS_SUCCESS, SET_TEXTS } from '../constants/actiontypes';

const initialState = { };

export default function settings(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case SET_TEXTS:
    case FETCH_TEXTS_SUCCESS: {
      return Object.assign({}, state, payload.texts);
    }
    default:
      return state
  }
}
