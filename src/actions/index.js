import * as types from '../constants/actiontypes';
import * as defaults from '../defaults';


export function editItem(item) {
  return { type: types.EDIT_ITEM, payload: { ...item } };
}

/*
 * Form navigation (Old)
 */
function showView(value, item) {
  return { type: types.SET_VIEW_INDEX, payload:{value, ...item} };
}

export function showStart() {
  return showView(0);
}

export function showDesign(item) {
  return showView(1, item);
}

export function showPayment() {
  return showView(2);
}

export function showReceipt() {
  return showView(3);
}

/*
 * templates
 */
export function setTemplates(value) {
  return { type: types.SET_TEMPLATES, value };
}

/*
 * customer
 */
export function changeEmail(value) {
  return { type: types.CHANGE_EMAIL, payload:{value} };
}

export function changeName(value) {
  return { type: types.CHANGE_NAME, payload:{value} };
}

export function changeAddress(value) {
  return { type: types.CHANGE_ADDRESS, payload:{value} };
}

export function changeZip(value) {
  return { type: types.CHANGE_ZIP, payload:{value} };
}

export function changeCity(value) {
  return { type: types.CHANGE_CITY, payload:{value} };
}

/*
 * Payment
 */
export function changePayment(value) {
  return { type: types.CHANGE_PAYMENT_TYPE, payload:{value} };
}

export function changeNumber(value) {
  return { type: types.CHANGE_CREDITCARD_NUMBER, payload:{value} };
}

export function changeMonth(value) {
  return { type: types.CHANGE_EXPIRES_MONTH, payload:{value} };
}

export function changeYear(value) {
  return { type: types.CHANGE_EXPIRES_YEAR, payload:{value} };
}

export function changeCCV2(value) {
  return { type: types.CHANGE_CCV2, payload:{value} };
}

/*
 * Settings
 */
export function setType(value) {
  return { type: types.SET_TYPE, payload:{value} };
}

export function setBackPlate(value) {
  return { type: types.SET_BACKPLATE, payload:{value} };
}

export function setPadding(value) {
  return { type: types.SET_PADDING, payload:{value} };
}

export function setTop(top, img) {
  return { type: types.ADD_TOPLINE, payload:{top, img} };
}

export function setLeft(left, img) {
  return { type: types.ADD_LEFTLINE, payload:{left, img} };
}

export function setRight(right, img) {
  return { type: types.ADD_RIGHTLINE, payload:{right, img} };
}

export function setBottom(bottom, img) {
  return { type: types.ADD_BOTTOMLINE, payload:{bottom, img} };
}

/* Emojis */
export function initEmoji(emojis, index) {
  return { type: types.INIT_EMOJIS, payload:{emojis, index} };
}

function add(item) {
  return { type: types.ADD_LINE, payload:{item}};
}

export function addTextLine() {
  return add( defaults.textitem );
}

function changeFontSize(index, step) {
  return { type: types.STEP_FONT_SIZE, payload:{ index, step } };
}

export function setFontSize(index, value) {
  return { type: types.CHANGE_FONT_SIZE, payload:{ index, value } };
}

export function changeFont(index, value) {
  return { type: types.CHANGE_FONT, payload:{index, value} };
}

export function increaseFont(index) {
  return changeFontSize(index, 1);
}

export function decreaseFont(index) {
  return changeFontSize(index, -1);
}

export function toggleCenter(index) {
  return { type: types.TOGGLE_CENTER, payload:{index} };
}

export function toggleBold(index) {
  return { type: types.TOGGLE_BOLD, payload:{index} };
}

export function toggleItalic(index) {
  return { type: types.TOGGLE_ITALIC, payload:{index} };
}

export function changeTextColor(index, color) {
  return { type: types.CHANGE_TEXT_COLOR, payload:{index, color} };
}

export function addEmojiLine() {
  return add( defaults.imageLine );
}

export function addDividerLine() {
  return add ( defaults.dividerLine );
}

export function deleteLine(index) {
  return { type: types.DELETE_LINE, payload:{index} };
}

export function move(index, step) {
  return { type: types.MOVE_LINE, payload:{index, step} };
}

export function moveUp(index) {
  return move(index, -1);
}

export function moveDown(index) {
  return move(index, 1);
}

export function changeText(value, index) {
  return { type: types.CHANGE_TEXT, payload:{value, index} };
}

export function changeDividerLine(index, value, image) {
  return { type: types.CHANGE_DIVIDER, payload:{index, value, image} };
}


export function addEmoji(image, size, index, img) {
  return { type: types.ADD_EMOJI, payload:{image, size, index, img} };
}

export function deleteEmoji(id, index) {
  return { type: types.DELETE_EMOJI, payload:{id, index} };
}

function scaleEmoji(index, step) {
  return { type: types.SCALE_EMOJI, payload:{index, step} };
}

export function scaleDownEmoji(index) {
  return scaleEmoji(index, defaults.scaleStep * -1);
}

export function scaleUpEmoji(index) {
  return scaleEmoji(index, defaults.scaleStep);
}

export function moveEmoji(id, atIndex, index) {
  return { type: types.MOVE_EMOJI, payload: { id, atIndex, index } };
}

export function clearEmojis(index) {
  return { type: types.CLEAR_EMOJIS, payload: { index } };
}

export function sendOrder(settings, items, image, customer, payment) {
  return { type: types.SEND_ORDER, payload: { customer, image, items, payment, settings }};
}

export function closeSendMessage() {
  return { type: types.CLOSE_FAILMESSAGE };
}

export function fetchTexts(project) {
  return { type: types.FETCH_TEXTS, payload: { project }};
}
