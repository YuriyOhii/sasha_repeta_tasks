const initState = {
  account: {
    balance: 500,
    name: 'yura',
  },
  lang: 'en',
};

export const rootReducier = (state = initState, action) => {
  switch (action.type) {
    case 'balance/withdraw':
      return {
        ...state,
        account: {
          ...state.account,
          balance: (state.account.balance -= action.payload),
        },
      };
    case 'balance/deposit':
      return {
        ...state,
        account: {
          ...state.account,
          balance: (state.account.balance += action.payload),
        },
      };

    default:
      return state;
  }
};
