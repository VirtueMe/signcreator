import { FETCH_TEXTS_SUCCESS } from '../constants/actiontypes';

const initialState = { isFetching: true };

export default function settings(state = initialState, action) {

  switch (action.type) {
    case FETCH_TEXTS_SUCCESS: {
      return { isFetching: false };
    }
    default:
      return state
  }
}
