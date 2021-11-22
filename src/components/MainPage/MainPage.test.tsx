import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import MainPage from './MainPage';
import { Provider } from 'react-redux';
import { store } from '@store/store';

test('MainPage render', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Provider>
  );

  screen.debug();
});
