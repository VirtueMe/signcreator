import * as types from '../constants/actiontypes'

export function initEmoji(emojis) {
  return { type: types.INIT_EMOJIS, emojis };
}

export function addEmoji(image, size) {
  return { type: types.ADD_EMOJI, image, size };
}

export function deleteEmoji(id) {
  return { type: types.DELETE_EMOJI, id };
}

export function moveEmoji(id, atIndex) {
  return { type: types.MOVE_EMOJI, id, atIndex };
}

export function clearEmojis() {
  return { type: types.CLEAR_EMOJIS };
}
