import { useFilters } from '../../hooks/useFilters';
export const SearchInput = () => {
  const { search, setFilters } = useFilters();
  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={e => setFilters(e.target.name, e.target.value)}
        value={search}
        placeholder="Enter the key word"
      />
    </div>
  );
};
