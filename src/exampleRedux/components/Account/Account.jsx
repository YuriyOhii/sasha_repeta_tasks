import { deposit, withdraw } from 'exampleRedux/redux/actions';
import { getBalance } from 'exampleRedux/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Account = () => {
  const balance = useSelector(getBalance);
  const dispatch = useDispatch();

  const handleClickWithdraw = () => dispatch(withdraw());
  const handleClickDeposit = () => dispatch(deposit());
  return (
    <div>
      <p>
        <b>Balance: {balance}$</b>
      </p>
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
