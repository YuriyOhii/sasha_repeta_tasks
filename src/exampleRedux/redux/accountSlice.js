import { createSlice } from '@reduxjs/toolkit';

const initAccount = {
  balance: 500,
  name: 'yura',
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initAccount,
  reducers: {
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    deposit(state, action) {
      state.balance += action.payload;
    },
  },
});

export const accountReducer = accountSlice.reducer;
export const { withdraw, deposit } = accountSlice.actions;
