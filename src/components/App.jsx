import { PureComponent } from 'react';
import { QuizForm } from './QuizForm';
import { SearchBar } from './SearchBar';
import { ErrorNotice } from './Error';
import { QuizList } from './QuizList';
import { getQuizes, addQuiz, dltQuiz } from './services/api';
import { Toaster, toast } from 'react-hot-toast';
import {Audio} from 'react-loader-spinner';

export class App extends PureComponent {
  state = {
    loading: false,
    error: null,
    quizList: [],
    filter: {
      search: '',
      level: 'all',
    },
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true, error: null });
      const quizList = await getQuizes();
      if (quizList.length > 0) {
        this.setState({ quizList });
        toast.success('Fetched successfully!');
      }

      const savedParams = localStorage.getItem('searchParams');
      if (savedParams !== null) {
        const filter = JSON.parse(savedParams);
        this.setState({ filter });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      localStorage.setItem('searchParams', JSON.stringify(this.state.filter));
    }
  }

  resetFilters = () =>
    this.setState({
      filter: {
        search: '',
        level: 'all',
      },
    });

  onSubmitQuizForm = async values => {
    try {
      this.setState({ loading: true, error: null });
      const newQuiz = await addQuiz(values);
      this.setState(state => ({ quizList: [newQuiz, ...state.quizList] }));
      toast.success('Added successfully!');
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleOnChangeSearch = (key, value) => {
    this.setState(prevState => ({
      filter: { ...prevState.filter, [key]: value },
    }));
  };

  getFilteredQuizes = () => {
    const {
      quizList,
      filter: { search, level },
    } = this.state;
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

  deleteQuiz = async id => {
    try {
      this.setState({ loading: true, error: null });
      const deletedQuiz = await dltQuiz(id);
      console.log(deletedQuiz);
      this.setState(state => ({
        quizList: state.quizList.filter(el => deletedQuiz.id !== el.id),
      }));
      toast.success('Deleted successfully!');
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { filter, error, quizList, loading } = this.state;

    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <QuizForm onSubmit={this.onSubmitQuizForm} />
        <SearchBar
          filter={filter}
          onReset={this.resetFilters}
          onChange={this.handleOnChangeSearch}
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
          <QuizList
            quizList={this.getFilteredQuizes()}
            onClick={this.deleteQuiz}
          />
        )}
      </>
    );
  }
}
