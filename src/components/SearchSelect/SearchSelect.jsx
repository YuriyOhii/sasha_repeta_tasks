import { useFilters } from '../../hooks/useFilters';

export const SearchSelect = () => {
  const { level, setFilters } = useFilters();
  return (
    <div>
      <select
        name="level"
        onChange={e => setFilters(e.target.name, e.target.value)}
        value={level}
      >
        <option value="all">all</option>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="advanced">advanced</option>
      </select>
    </div>
  );
};
