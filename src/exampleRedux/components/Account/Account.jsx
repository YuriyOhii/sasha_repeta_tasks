import { deposit, withdraw } from 'exampleRedux/redux/actions';
import { getBalance } from 'exampleRedux/redux/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Account = () => {
  const balance = useSelector(getBalance);
  const dispatch = useDispatch();

  const handleClickWithdraw = () => dispatch(withdraw(count));
  const handleClickDeposit = () => dispatch(deposit(count));
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <b>Balance: {balance}$</b>
      </p>
      <input
        value={count}
        type="number"
        onChange={e => setCount(Number(e.target.value))}
      />
      <div>
        <button onClick={() => handleClickWithdraw()} type="button">
          Withdraw
        </button>
        <button onClick={() => handleClickDeposit()} type="button">
          Deposit
        </button>
      </div>
    </div>
  );
};
