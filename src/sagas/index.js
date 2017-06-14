import { EDIT_ITEM, FETCH_PRICES_FAILED, FETCH_PRICES_IN_PROGRES, FETCH_PRICES_SUCCESS, FETCH_TEMPLATES_FAILED, FETCH_TEMPLATES_IN_PROGRES, FETCH_TEMPLATES_SUCCESS, FETCH_TEXTS, FETCH_TEXTS_FAILED, FETCH_TEXTS_IN_PROGRES, FETCH_TEXTS_SUCCESS, SEND_ORDER, SEND_ORDER_IN_PROGRESS, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS } from '../constants/actiontypes';

import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../api';
import { templates } from '../utils/templateloader';
import whenFontsLoaded from '../fontsloader';
import history from '../utils/history';


// Our worker Saga: will perform the async increment task
export function* sendOrder(action) {
  const { payload } = action;

  yield put({ type: SEND_ORDER_IN_PROGRESS });
  try {
    const products = yield call(api.sendData, payload);
    yield put({ type: SEND_ORDER_SUCCESS, products });
    yield call(history.push, '/receipt');
  }
  catch(error) {
    yield put({ type: SEND_ORDER_FAILED, error });
  }
}

export function* fetchTexts(action) {
  const { payload } = action;

  yield put({ type: FETCH_TEXTS_IN_PROGRES });

  try {
    const { signs } = yield call(api.fetchTexts, payload.project);

    yield put({ type: FETCH_TEXTS_SUCCESS, payload: { texts: signs.texts } });
  }
  catch(error) {
    yield put({ type: FETCH_TEXTS_FAILED, error });
  }
}

export function* fetchPrices(action) {
  const { payload } = action;

  yield put({ type: FETCH_PRICES_IN_PROGRES });

  try {
    const { prices } = yield call(api.fetchPrices, payload.project);

    yield put({ type: FETCH_PRICES_SUCCESS, payload: prices });
  }
  catch(error) {
    yield put({ type: FETCH_PRICES_FAILED, error });
  }
}


export function* fetchTemplates(action) {
  yield put({ type: FETCH_TEMPLATES_IN_PROGRES });

  try {
    const result = yield call(whenFontsLoaded, () => { return true; });

    yield put({ type: FETCH_TEMPLATES_SUCCESS, payload: { templates, result } });
  }
  catch(error) {
    yield put({ type: FETCH_TEMPLATES_FAILED, error });
  }
}

export function* editItem(action) {
  yield call(history.push, '/edit');
}


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchSendOrderAsync() {
  yield takeEvery(SEND_ORDER, sendOrder);
}

export function* watchFetchTexts() {
  yield takeEvery(FETCH_TEXTS, fetchTexts);
}

export function* watchFetchTemplates() {
  yield takeEvery(FETCH_TEXTS, fetchTemplates);
}

export function* watchFetchPrices() {
  yield takeEvery(FETCH_TEXTS, fetchPrices);
}

export function* watchEditItem() {
  yield takeEvery(EDIT_ITEM, editItem);
}

export default function* rootSaga() {
  yield [
    watchSendOrderAsync(),
    watchFetchPrices(),
    watchFetchTexts(),
    watchFetchTemplates(),
    watchEditItem()
  ];
}
