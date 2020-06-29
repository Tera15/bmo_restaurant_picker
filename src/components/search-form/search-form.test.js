import React from 'react';
import { render} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';

 
import SearchForm from './search-form.component';
 
describe('App', () => {
  test('renders ScrollContainer component', () => {
    render(<Provider store={store}>
        <SearchForm/>
      </Provider>);
  });
});