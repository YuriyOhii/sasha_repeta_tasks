import { createAction } from '@reduxjs/toolkit';

export const withdraw = createAction('balance/withdraw');
export const deposit = createAction('balance/deposit');
export const setLang = createAction('lang/setLang');
