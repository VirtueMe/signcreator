import { ADD_LINE, ADD_EMOJI, CHANGE_DIVIDER, CHANGE_FONT, CHANGE_FONT_SIZE, CHANGE_TEXT, CHANGE_TEXT_COLOR, CLEAR_EMOJIS, DELETE_EMOJI, DELETE_LINE, EDIT_ITEM, INIT_EMOJIS, MOVE_EMOJI, MOVE_LINE, SCALE_EMOJI, STEP_FONT_SIZE, TOGGLE_CENTER, TOGGLE_BOLD, TOGGLE_ITALIC } from '../constants/actiontypes';

import update from 'immutability-helper';

const initialState = [
  { type: 1, value: '', height: 8, center: false, bold: false, italic: false, font: 'Arial', color: { r: '0', g: '0', b: '0', a: '1' } }
];

function getCounter(state) {
  const counter = state.counter;

  if (counter === 0 || counter) {
    return counter + 1;
  }

  return state.value.length + 1;
}

export default function emojis(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case ADD_EMOJI: {
      let updateData = {};
      const counter = getCounter(state[payload.index]);

      updateData[payload.index] = {
        value: {
          $push: [{
            id: counter-1,
            image: payload.image,
            img: payload.img,
            name: payload.name
          }]
        },
        counter: { $set: counter }
      };

      return update(state, updateData);
    }

    case EDIT_ITEM: {
      if (payload.items) {
        return [...payload.items];
      }

      return state;
    }

    case CHANGE_DIVIDER: {
      let updateData = {};

      updateData[payload.index] = {
        value: {
          $set: {
            image: payload.image && payload.image.src,
            img: payload.image,
            name: payload.name
          }
        },
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

    case SCALE_EMOJI: {
      let updateData = {};

      updateData[payload.index] = {
        scale: {
          $apply: function(scale) {
            return scale + payload.step;
          }
        }
      };

      return update(state, updateData);
    }

    case CHANGE_FONT_SIZE: {
      let updateData = {};

      updateData[payload.index] = {
        height: { $set: payload.value }
      };

      return update(state, updateData);
    }

    case STEP_FONT_SIZE: {
      let updateData = {};

      updateData[payload.index] = {
        height: { $apply: function(height) { return height + payload.step; } }
      };

      return update(state, updateData);
    }

    case TOGGLE_CENTER: {
      let updateData = {};

      updateData[payload.index] = {
        center: { $apply: function(center) { return !center; } }
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
      const counter = getCounter(state[payload.index]);

      updateData[payload.index] = {
        value: {
          $set: state[payload.index].value.filter(emoji =>
            emoji.id !== payload.id
          )
        },
        counter: {
          $set: counter - 1
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
