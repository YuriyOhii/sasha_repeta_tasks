import { configureStore } from '@reduxjs/toolkit';
import { accountReducer, langReducer } from './reducers';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    lang: langReducer,
  },
});
