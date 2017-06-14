import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import history from './utils/history';
import startTrigger from './menutoggler';

import App from './App';
import './index.css';

import 'material-design-icons/iconfont/material-icons.css';

const store = configureStore(undefined, history);
const root = document.getElementById('root');

startTrigger();

render(
  <Provider store={store}>
    <App project={root.dataset.project} message={root.dataset.message} history={history} />
  </Provider>,
  root
);
