import { configureStore } from '@reduxjs/toolkit';
import { reducerAccount, reducerLang } from './reducers';

export const store = configureStore({
  reducer: {
    account: reducerAccount,
    lang: reducerLang,
  },
});
