import * as types from '../constants/actiontypes'

/*
 * customer
 */
export function changeEmail(value) {
  return { type: types.CHANGE_EMAIL, value };
}

export function changeName(value) {
  return { type: types.CHANGE_NAME, value };
}

export function changeAddress(value) {
  return { type: types.CHANGE_ADDRESS, value };
}

export function changeZip(value) {
  return { type: types.CHANGE_ZIP, value };
}

export function changeCity(value) {
  return { type: types.CHANGE_CITY, value };
}

/*
 * Payment
 */
export function changePayment(value) {
  return { type: types.CHANGE_PAYMENT_TYPE, value };
}

export function changeNumber(value) {
  return { type: types.CHANGE_CREDITCARD_NUMBER, value };
}

export function changeMonth(value) {
  return { type: types.CHANGE_EXPIRES_MONTH, value };
}

export function changeYear(value) {
  return { type: types.CHANGE_EXPIRES_YEAR, value };
}

export function changeCCV2(value) {
  return { type: types.CHANGE_CCV2, value };
}

/*
 * Settings
 */
export function setType(value) {
  return { type: types.SET_TYPE, value };
}

export function setBackPlate(value) {
  return { type: types.SET_BACKPLATE, value };
}

export function setTop(top, img) {
  return { type: types.ADD_TOPLINE, top, img };
}

export function setLeft(left, img) {
  return { type: types.ADD_LEFTLINE, left, img };
}

export function setRight(right, img) {
  return { type: types.ADD_RIGHTLINE, right, img };
}

export function setBottom(bottom, img) {
  return { type: types.ADD_BOTTOMLINE, bottom, img };
}

/* Emojis */

export function initEmoji(emojis, index) {
  return { type: types.INIT_EMOJIS, emojis, index };
}

function add(item) {
 return { type: types.ADD_LINE, item };
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
