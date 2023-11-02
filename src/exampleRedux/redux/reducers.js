import { createReducer } from '@reduxjs/toolkit';
import { deposit, setLang, withdraw } from './actions';

const initAccount = {
  balance: 500,
  name: 'yura',
};

export const accountReducer = createReducer(initAccount, builder => {
  builder
    .addCase(withdraw, (state, action) => {
      state.balance -= action.payload;
    })
    .addCase(deposit, (state, action) => {
      state.balance += action.payload;
    });
});

const initLang = 'en';

export const langReducer = createReducer(initLang, builder => {
  builder.addCase(setLang, (state, action) => {
    state = action.payload;
  });
});
