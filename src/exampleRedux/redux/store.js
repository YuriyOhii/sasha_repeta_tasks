import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { langReducer } from './langSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    lang: langReducer,
  },
});
