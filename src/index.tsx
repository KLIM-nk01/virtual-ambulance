import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CookiesProvider } from 'react-cookie';

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
