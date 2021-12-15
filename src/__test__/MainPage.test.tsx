import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import MainPage from '../components/MainPage/MainPage';
import { Provider } from 'react-redux';
import { store } from '@store/store';

describe('MainPage', () => {
  it('renders MainPage component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    // const links = screen.getAllByRole('link');
    // expect(links);
    // screen.debug();
    expect(screen.getByText(/Browse medical center/i)).toBeInTheDocument();
      // screen.getByRole('')
  });
});
