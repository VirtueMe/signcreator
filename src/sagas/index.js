import { SEND_ORDER, SEND_ORDER_IN_PROGRESS, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS } from '../constants/actiontypes';

import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../api';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
export function* sendOrder(action) {
  const { payload } = action;

  yield put({ type: SEND_ORDER_IN_PROGRESS });
  try {
    const products = yield call(api.sendData, payload);
    yield put({ type: SEND_ORDER_SUCCESS, products });
  }
  catch(error) {
    console.info('saga err: ', error);
    yield put({ type: SEND_ORDER_FAILED, error });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchSendOrderAsync() {
  yield takeEvery(SEND_ORDER, sendOrder);
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchSendOrderAsync()
  ];
}
