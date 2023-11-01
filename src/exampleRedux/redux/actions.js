export const withdraw = value => ({
  type: 'balance/withdraw',
  payload: value,
});

export const deposit = value => ({
  type: 'balance/deposit',
  payload: value,
});

export const setLang = lang => ({
  type: 'lang/setLang',
  payload: lang,
});
