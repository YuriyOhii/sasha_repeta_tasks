import { useSearchParams } from 'react-router-dom';

export function useFilters() {
  const [params, setParams] = useSearchParams();

  const search = params.get('search') ?? '';
  const level = params.get('level') ?? 'all';

  const resetFilters = () =>
    setParams({
      search: '',
      level: 'all',
    });

  const setFilters = (key, value) => {
    params.set(`${key}`, value);
    setParams(params);
  };
  return { search, level, resetFilters, setFilters };
}
