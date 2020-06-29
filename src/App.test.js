import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

test('renders title text', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/DISCOVER THE LOCAL EATERIES OF.../i)).toBeInTheDocument();
});

describe('App', () => {
  test('renders App component', () => {
    render(<Provider store={store}>
      <App/>
    </Provider>);
  });
  screen.debug();
});

