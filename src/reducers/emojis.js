import { ADD_LINE, ADD_EMOJI, CHANGE_FONT_SIZE, CHANGE_TEXT, CHANGE_TEXT_COLOR, CLEAR_EMOJIS, DELETE_EMOJI, DELETE_LINE, INIT_EMOJIS, MOVE_EMOJI, MOVE_LINE } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = [];

export default function emojis(state = initialState, action) {
  switch (action.type) {
    case ADD_EMOJI: {
      let updateData = {};

      updateData[action.index] = {
        value: {
          $push: [{
            id: state[action.index].value.length,
            image: action.image,
            size: action.size,
            img: action.img
          }]
        }
      };

      return update(state, updateData);
    }

    case CHANGE_TEXT: {
      let updateData = {};

      updateData[action.index] = {
        value: { $set: action.value }
      };

      return update(state, updateData);
    }

    case CHANGE_TEXT_COLOR: {
      let updateData = {};

      updateData[action.index] = {
        color: { $set: action.color }
      };

      return update(state, updateData);
    }

    case CHANGE_FONT_SIZE: {
      let updateData = {};

      updateData[action.index] = {
        height: { $apply: function(height) { return height + action.step; } }
      };

      return update(state, updateData);
    }

    case MOVE_LINE: {
      const item = state[action.index];

      return update(state, {
        $splice: [
          [action.index, 1],
          [action.index + action.step, 0, item],
        ]
      });
    }

    case ADD_LINE: {
      return update(state, {
        $push: [action.item]
      });
    }

    case DELETE_LINE: {
      return update(state, {
        $splice: [[action.index, 1]]
      });
    }

    case DELETE_EMOJI: {
      let updateData = {};

      updateData[action.index] = {
        value: {
          $set: state[action.index].filter(emoji =>
            emoji.id !== action.id
          )
        }
      };

      return update(state, updateData);
    }

    case INIT_EMOJIS: {
      let updateData = {};

      updateData[action.index] = {
        value: {
          $set: [...action.emojis]
        }
      };

      return update(state, updateData);
    }

    case MOVE_EMOJI: {
      const emojis = state[action.index];
      const emoji = emojis.value.filter(e => e.id === action.id)[0];
      const index = emojis.value.indexOf(emoji);

      let updateData = {};

      updateData[action.index] = {
        value: {
          $splice: [
            [index, 1],
            [action.atIndex, 0, emoji],
          ]
        }
      };

      return update(state, updateData);
    }

    case CLEAR_EMOJIS: {
      let updateData = {};

      updateData[action.index] = {
        value: {
          $set: []
        }
      };

      return update(state, updateData);
    }
    default:
      return state
  }
}
