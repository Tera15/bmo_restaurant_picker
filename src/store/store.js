import { configureStore } from '@reduxjs/toolkit';
import appReducer  from '../app.slice';

export default configureStore({
  reducer: {
    App: appReducer,
  },
});
