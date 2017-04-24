import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

import 'material-design-icons/iconfont/material-icons.css';

const store = configureStore();
const root = document.getElementById('root');



render(
  <Provider store={store}>
    <App project={root.dataset.project} message={root.dataset.message} />
  </Provider>,
  root
);
