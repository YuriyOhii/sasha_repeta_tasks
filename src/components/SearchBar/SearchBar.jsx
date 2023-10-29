import { SearchSelect } from 'components/SearchSelect/SearchSelect';
import {} from './SearchBar.styled';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { useFilters } from '../../hooks/useFilters';
export const SearchBar = () => {
  const { resetFilters } = useFilters();
  return (
    <div>
      <SearchInput />
      <SearchSelect />
      <button type="button" onClick={resetFilters}>
        Reset filters
      </button>
    </div>
  );
};
