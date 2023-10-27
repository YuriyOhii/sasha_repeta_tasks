import { Audio } from 'react-loader-spinner';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { ErrorNotice } from '../components/Error/Error';
import { QuizList } from '../components/QuizList/QuizList';
import { useState, useEffect } from 'react';
import { getQuizes, dltQuiz } from '../components/services/api';
import { toast } from 'react-hot-toast';

export default function Quizzes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizList, setQuizList] = useState([]);
  const [filter, setFilter] = useState(() => {
    const savedParams = localStorage.getItem('searchParams');
    if (savedParams !== null) return JSON.parse(savedParams);
    return {
      search: '',
      level: 'all',
    };
  });

  useEffect(() => {
    const quizes = async () => {
      try {
        setError(null);
        setLoading(true);
        const quizItems = await getQuizes();
        if (quizItems.length > 0) {
          setQuizList(quizItems);
          toast.success('Fetched successfully!');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    quizes();
  }, []);

  useEffect(() => {
    localStorage.setItem('searchParams', JSON.stringify(filter));
  }, [filter]);

  const resetFilters = () =>
    setFilter({
      search: '',
      level: 'all',
    });

  const handleOnChangeSearch = (key, value) => {
    setFilter(prevState => ({ ...prevState, [key]: value }));
  };

  const getFilteredQuizes = () => {
    const normalizedSearch = filter.search.toLowerCase();
    const filteredBySearch = quizList.filter(({ topic }) =>
      topic.toLowerCase().includes(normalizedSearch)
    );
    const filteredQuizes = filteredBySearch.filter(el => {
      if (filter.level === 'all') return true;
      return el.level === filter.level;
    });
    return filteredQuizes;
  };

  const deleteQuiz = async id => {
    try {
      setLoading(true);
      setError(null);
      const deletedQuiz = await dltQuiz(id);
      setQuizList(state => state.filter(el => deletedQuiz.id !== el.id));
      toast.success('Deleted successfully!');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar
        filter={filter}
        onReset={resetFilters}
        onChange={handleOnChangeSearch}
      />
      {loading && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="black"
            ariaLabel="loading"
          />
        </div>
      )}
      {error && <ErrorNotice errorMessage={error.message} />}
      {quizList.length > 0 && (
        <QuizList quizList={getFilteredQuizes()} onClick={deleteQuiz} />
      )}
    </div>
  );
}
