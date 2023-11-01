import { useSelector } from 'react-redux';
import { Account } from './Account/Account';
import { getUsername } from 'exampleRedux/redux/selectors';
import { LangSwitcher } from './LangSwitcher/LangSwitcher';

export const App = () => {
  const username = useSelector(getUsername);
  return (
    <div>
      <h1>Account {username} </h1>
      <LangSwitcher />
      <Account />
    </div>
  );
};
