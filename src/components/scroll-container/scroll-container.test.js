import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';

 
import ScrollContainer from './scroll-container.component';
 
describe('App', () => {
  test('renders ScrollContainer component', () => {
    render(<Provider store={store}>
        <ScrollContainer/>
      </Provider>);
  });
});