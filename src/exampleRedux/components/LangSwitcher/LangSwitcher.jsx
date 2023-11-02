import { setLang } from 'exampleRedux/redux/langSlice';
import { getLang } from 'exampleRedux/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const LangSwitcher = () => {
  const lang = useSelector(getLang);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setLang(e.target.value));

  return (
    <div>
      <select onChange={e => handleChange(e)} name="lang" value={lang}>
        <option value="ua">UA</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
};
