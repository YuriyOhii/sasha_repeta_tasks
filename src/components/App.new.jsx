import { useEffect, useState } from 'react';
import { QuizForm } from './QuizForm';
import { SearchBar } from './SearchBar';
import { ErrorNotice } from './Error';
import { QuizList } from './QuizList';
import { getQuizes, addQuiz, dltQuiz } from './services/api';
import { Toaster, toast } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizList, setQuizList] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    level: 'all',
  });

  useEffect(() => {
    const savedParams = localStorage.getItem('searchParams');
    if (savedParams !== null) {
      const filter = JSON.parse(savedParams);
      setFilter({ filter });
    }
  }, []);

  useEffect(() => {
    const quizes = async () => {
      try {
        setError(null);
        setLoading(true);
        const quizList = await getQuizes();
        if (quizList.length > 0) {
          setQuizList(quizList);
          toast.success('Fetched successfully!');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  });

  useEffect(() => {
    localStorage.setItem('searchParams', JSON.stringify(this.state.filter));
  }, [filter]);

  const resetFilters = () =>
    setFilter({
      filter: {
        search: '',
        level: 'all',
      },
    });

  const onSubmitQuizForm = async values => {
    try {
      setLoading(true);
      setError(null);
      const newQuiz = await addQuiz(values);
      setQuizList(state => [newQuiz, ...state.quizList]);
      toast.success('Added successfully!');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChangeSearch = (key, value) => {
    setFilter(prevState => ({
      filter: { ...prevState.filter, [key]: value },
    }));
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
      setQuizList(state => ({
        quizList: state.quizList.filter(el => deletedQuiz.id !== el.id),
      }));
      toast.success('Deleted successfully!');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return;
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <QuizForm onSubmit={onSubmitQuizForm} />
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
  </>;
};
