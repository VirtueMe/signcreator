import { FETCH_PRICES_SUCCESS } from '../constants/actiontypes';

const initialState = { signs: { }, backplates: { }, fee : null, shipping: null };

export default function sendstatus(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case FETCH_PRICES_SUCCESS: {

      return payload;
    }

    default:
      return state;
  }
}
