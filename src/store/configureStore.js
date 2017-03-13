import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index');

      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
