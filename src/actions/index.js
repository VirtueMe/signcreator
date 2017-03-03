import * as types from '../constants/actiontypes'

export function initEmoji(emojis, index) {
  return { type: types.INIT_EMOJIS, emojis, index };
}

function add(item) {
  return { type: types.ADD_LINE, item };
}

export function setType(value) {
  return { type: types.SET_TYPE, value };
}

export function setTop(top) {
  return { type: types.ADD_TOPLINE, top };
}

export function setLeft(left) {
  return { type: types.ADD_LEFTLINE, left };
}

export function setRight(right) {
  return { type: types.ADD_RIGHTLINE, right };
}

export function setBottom(bottom) {
  return { type: types.ADD_BOTTOMLINE, bottom };
}

export function addTextLine() {
  return add( { type: 1, value: '' } );
}

export function addEmojiLine() {
  return add( { type: 2, value: [] } );
}

export function addDividerLine() {
  return add ( { type: 3, value: {} } );
}

export function deleteLine(index) {
  return { type: types.DELETE_LINE, index };
}

export function move(index, step) {
  return { type: types.MOVE_LINE, index, step };
}

export function moveUp(index) {
  return move(index, -1);
}

export function moveDown(index) {
  return move(index, 1);
}

export function changeText(value, index) {
  return { type: types.CHANGE_TEXT, value, index };
}

export function addEmoji(image, size, index, img) {
  return { type: types.ADD_EMOJI, image, size, index, img };
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
