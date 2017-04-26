import { EDIT_ITEM, SET_TYPE, SET_BACKPLATE, SET_PADDING, ADD_TOPLINE, ADD_LEFTLINE, ADD_RIGHTLINE, ADD_BOTTOMLINE } from '../constants/actiontypes';
import update from 'immutability-helper';
import { settings as settingsstate } from '../defaults';

const initialState = settingsstate;

export default function settings(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case SET_TYPE: {
      if (payload.value !== state.type) {
        return update(state, { type: { $set: payload.value } });
      }

      return state;
    }

    case SET_PADDING: {
      if (payload.value !== state.padding) {
        return update(state, { padding: { $set: parseInt(payload.value, 10) } });
      }

      return state;
    }

    case EDIT_ITEM: {
      if (payload.settings) {
        return Object.assign({}, payload.settings);
      }

      return state;
    }

    case SET_BACKPLATE: {
      if (payload.value !== state.backplate) {
        return update(state, { backplate: { $set: payload.value } });
      }

      return state;
    }

    case ADD_TOPLINE: {
      if (payload.top !== state.top) {
        return update(state, { top: { $set: payload.top }, topImage: { $set: payload.img } });
      }

      return state;
    }

    case ADD_LEFTLINE: {
      if (payload.left !== state.left) {
        return update(state, { left: { $set: payload.left }, leftImage: { $set: payload.img } });
      }

      return state;
    }

    case ADD_RIGHTLINE: {
      if (payload.right !== state.right) {
        return update(state, { right: { $set: payload.right }, rightImage: { $set: payload.img } });
      }

      return state;
    }

    case ADD_BOTTOMLINE: {
      if (payload.bottom !== state.bottom) {
        return update(state, { bottom: { $set: payload.bottom }, bottomImage: { $set: payload.img } });
      }

      return state;
    }


    default:
      return state
  }
}
