import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';

 
import CustomButton from './custom-button.component';
 
describe('App', () => {
  test('renders CustomButton component', () => {
    render(<Provider store={store}>
        <CustomButton/>
      </Provider>);
  });
});