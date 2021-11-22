import React from 'react';
import { render, screen, within } from '@testing-library/react';
import MainPage from './MainPage';
import { Provider } from 'react-redux';
import { store } from '@store/store';

test('App render', () => {
  render(
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(3);
});
