import { Audio } from 'react-loader-spinner';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { ErrorNotice } from '../components/Error/Error';
import { QuizList } from '../components/QuizList/QuizList';
import { useState, useEffect } from 'react';
import { getQuizes, dltQuiz } from '../components/services/api';
import { toast } from 'react-hot-toast';
import { useFilters } from 'hooks/useFilters';

export default function Quizzes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizList, setQuizList] = useState([]);

  const { search, level } = useFilters();
  console.log(search, level);

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

  const getFilteredQuizes = () => {
    const normalizedSearch = search.toLowerCase();
    const filteredBySearch = quizList.filter(({ topic }) =>
      topic.toLowerCase().includes(normalizedSearch)
    );
    const filteredQuizes = filteredBySearch.filter(el => {
      if (level === 'all') return true;
      return el.level === level;
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
      <SearchBar />
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
