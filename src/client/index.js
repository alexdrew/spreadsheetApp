import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import styles from './stylesheets/styles.css';

import App from './App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
