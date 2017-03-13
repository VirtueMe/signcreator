import { SEND_ORDER, SEND_ORDER_IN_PROGRESS, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS } from '../constants/actiontypes';

import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import sendData from '../api';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
export function* sendOrder(action) {
  const { payload } = action;
  console.info('start send order');

  yield put({ type: SEND_ORDER_IN_PROGRESS });
  try {
    console.info('sending the actual data');
    const products = yield call(sendData, payload);
    console.info('send data in return', products);
    yield put({ type: SEND_ORDER_SUCCESS, products });
  }
  catch(error) {
    console.info('err: ', error);
    yield put({ type: SEND_ORDER_FAILED, error });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchSendOrderAsync() {
  console.info('SEND_ORDER FOUND');
  yield takeEvery(SEND_ORDER, sendOrder);
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchSendOrderAsync()
  ];
}
