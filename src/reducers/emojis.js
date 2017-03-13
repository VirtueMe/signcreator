import { ADD_LINE, ADD_EMOJI, CHANGE_DIVIDER, CHANGE_FONT, CHANGE_FONT_SIZE, CHANGE_TEXT, CHANGE_TEXT_COLOR, CLEAR_EMOJIS, DELETE_EMOJI, DELETE_LINE, INIT_EMOJIS, MOVE_EMOJI, MOVE_LINE, TOGGLE_BOLD, TOGGLE_ITALIC } from '../constants/actiontypes';
import update from 'immutability-helper';

const initialState = [];

export default function emojis(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case ADD_EMOJI: {
      let updateData = {};

      updateData[payload.index] = {
        value: {
          $push: [{
            id: state[payload.index].value.length,
            image: payload.image,
            size: payload.size,
            img: payload.img
          }]
        }
      };

      return update(state, updateData);
    }

    case CHANGE_DIVIDER: {
      let updateData = {};

      updateData[payload.index] = {
        value: { $set: payload.image },
        selected: { $set: payload.value }
      };

      return update(state, updateData);
    }

    case CHANGE_TEXT: {
      let updateData = {};

      updateData[payload.index] = {
        value: { $set: payload.value }
      };

      return update(state, updateData);
    }

    case CHANGE_TEXT_COLOR: {
      let updateData = {};

      updateData[payload.index] = {
        color: { $set: payload.color }
      };

      return update(state, updateData);
    }

    case CHANGE_FONT: {
      let updateData = {};

      updateData[payload.index] = {
        font: { $set: payload.value }
      };

      return update(state, updateData);
    }

    case CHANGE_FONT_SIZE: {
      let updateData = {};

      updateData[payload.index] = {
        height: { $apply: function(height) { return height + payload.step; } }
      };

      return update(state, updateData);
    }

    case TOGGLE_BOLD: {
      let updateData = {};

      updateData[payload.index] = {
        bold: { $apply: function(bold) { return !bold; } }
      };

      return update(state, updateData);
    }

    case TOGGLE_ITALIC: {
      let updateData = {};

      updateData[payload.index] = {
        italic: { $apply: function(italic) { return !italic; } }
      };

      return update(state, updateData);
    }

    case MOVE_LINE: {
      const item = state[payload.index];

      return update(state, {
        $splice: [
          [payload.index, 1],
          [payload.index + payload.step, 0, item],
        ]
      });
    }

    case ADD_LINE: {
      return update(state, {
        $push: [payload.item]
      });
    }

    case DELETE_LINE: {
      return update(state, {
        $splice: [[payload.index, 1]]
      });
    }

    case DELETE_EMOJI: {
      let updateData = {};

      updateData[payload.index] = {
        value: {
          $set: state[payload.index].filter(emoji =>
            emoji.id !== payload.id
          )
        }
      };

      return update(state, updateData);
    }

    case INIT_EMOJIS: {
      let updateData = {};

      updateData[payload.index] = {
        value: {
          $set: [...payload.emojis]
        }
      };

      return update(state, updateData);
    }

    case MOVE_EMOJI: {
      const emojis = state[payload.index];
      const emoji = emojis.value.filter(e => e.id === payload.id)[0];
      const index = emojis.value.indexOf(emoji);

      let updateData = {};

      updateData[payload.index] = {
        value: {
          $splice: [
            [index, 1],
            [payload.atIndex, 0, emoji],
          ]
        }
      };

      return update(state, updateData);
    }

    case CLEAR_EMOJIS: {
      let updateData = {};

      updateData[payload.index] = {
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
