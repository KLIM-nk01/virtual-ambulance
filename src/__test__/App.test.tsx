import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App/App';
import { Provider } from 'react-redux';
import { store } from '@store/store';

test('App render', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const text = screen.getByText('Virtual');
  expect(text).toBeInTheDocument();
});
