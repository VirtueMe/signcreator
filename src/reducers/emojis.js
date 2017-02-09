import { ADD_EMOJI, MOVE_EMOJI, DELETE_EMOJI, CLEAR_EMOJIS, INIT_EMOJIS } from '../constants/actiontypes';
import update from 'immutability-helper';


const initialState = [[]];


export default function emojis(state = initialState, action) {
  switch (action.type) {
    case ADD_EMOJI: {
      let updateData = {};

      updateData[action.index] = {
        $push: [{
          id: state.length(),
          image: action.image,
          size: action.size
        }]
      };

      return update(state, updateData);
    }
    
    case DELETE_EMOJI: {
      let updateData = {};

      updateData[action.index] = {
        $set: state[action.index].filter(emoji =>
          emoji.id !== action.id
        )
      };

      return update(state, updateData);
    }

    case INIT_EMOJIS: {
      let updateData = {};

      updateData[action.index] = {
        $set: [...action.emojis]
      };

      return update(state, updateData);
    }

    case MOVE_EMOJI: {
      const emojis = state[action.index];
      const emoji = emojis.filter(e => e.id === action.id)[0];
      const index = emojis.indexOf(emoji);

      let updateData = {};

      updateData[action.index] = {
        $splice: [
          [index, 1],
          [action.atIndex, 0, emoji],
        ]
      };

      return update(state, updateData);
    }

    case CLEAR_EMOJIS: {
      let updateData = {};

      updateData[action.index] = {
        $set: []
      };

      return update(state, updateData);
    }
    default:
      return state
  }
}
