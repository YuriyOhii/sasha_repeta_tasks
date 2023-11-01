import { combineReducers } from 'redux';

const initAccount = {
  balance: 500,
  name: 'yura',
};

const reducerAccount = (state = initAccount, action) => {
  switch (action.type) {
    case 'balance/withdraw':
      return {
        ...state,
        balance: (state.balance -= action.payload),
      };
    case 'balance/deposit':
      return {
        ...state,
        balance: (state.balance += action.payload),
      };
    default:
      return state;
  }
};

const initLang = 'en';

const reducerLang = (state = initLang, action) => {
  switch (action.type) {
    case 'lang/setLang':
      return (state = action.payload);

    default:
      return state;
  }
};

export const rootReducier = combineReducers({
  account: reducerAccount,
  lang: reducerLang,
});
