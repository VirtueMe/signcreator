import { ADD_EMOJI, MOVE_EMOJI, DELETE_EMOJI, CLEAR_EMOJIS } from '../constants/actiontypes';
import update from 'immutability-helper';


const initialState = [];


export default function emojis(state = initialState, action) {
  switch (action.type) {
    case ADD_EMOJI:
      return [
        ...state,
        {
          id: state.length(),
          image: action.image,
          size: action.size
        }
      ];

    case DELETE_EMOJI:
      return state.filter(emoji =>
        emoji.id !== action.id
      );

    case MOVE_EMOJI:
      const emojis = state;
      const emoji = emojis.filter(e => e.id === action.id)[0];
      const index = emojis.indexOf(emoji);

      return update(state, {
        $splice: [
          [index, 1],
          [action.atIndex, 0, emoji],
        ],
      });

    case CLEAR_EMOJIS:
      return [];

    default:
      return state
  }
}
