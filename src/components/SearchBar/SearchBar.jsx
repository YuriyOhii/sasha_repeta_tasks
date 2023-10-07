import {} from './SearchBar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ filter: { search, level }, onChange }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={e => onChange(e.target.name, e.target.value)}
        value={search}
        placeholder="Enter the key word"
      />
      <select
        name="level"
        onChange={e => onChange(e.target.name, e.target.value)}
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

SearchBar.propTypes = {
  filter: PropTypes.exact({
    search: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};
