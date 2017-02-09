import * as types from '../constants/actiontypes'

export function initEmoji(emojis, index) {
  return { type: types.INIT_EMOJIS, emojis, index };
}

export function addEmoji(image, size, index) {
  return { type: types.ADD_EMOJI, image, size, index };
}

export function deleteEmoji(id, index) {
  return { type: types.DELETE_EMOJI, id, index };
}

export function moveEmoji(id, atIndex, index) {
  return { type: types.MOVE_EMOJI, id, atIndex, index };
}

export function clearEmojis(index) {
  return { type: types.CLEAR_EMOJIS, index };
}
