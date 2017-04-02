import { SET_TEMPLATES } from '../constants/actiontypes';
const initialState = { items: [] };

export default function templates(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case SET_TEMPLATES:
      return { items: [...payload.value] };
      
    default:
      return state;
  }
}
