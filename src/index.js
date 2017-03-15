import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'react-redux';
import reducers from './reducers';
import App from './App';
import './index.css';

const store = createStore(state);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
