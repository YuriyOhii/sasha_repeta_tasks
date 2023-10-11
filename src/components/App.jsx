import { PureComponent } from 'react';
import { QuizForm } from './QuizForm';
import { SearchBar } from './SearchBar';
import { QuizList } from './QuizList';
import data from '../data.json';
import { nanoid } from 'nanoid';

export class App extends PureComponent {
  state = {
    quizList: data,
    filter: {
      search: '',
      level: 'all',
    },
  };

  componentDidMount() {
    const savedParams = localStorage.getItem('searchParams');
    if (savedParams !== null) {
      const filter = JSON.parse(savedParams);
      this.setState({ filter });
    }
  }

  componentDidUpdate(_, pS) {
    if (pS.filter !== this.state.filter) {
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

  onSubmitQuizForm = values => {
    const newQuiz = { ...values, id: nanoid() };
    this.setState(s => ({ quizList: [newQuiz, ...s.quizList] }));
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

  deleteQuiz = id =>
    this.setState(prevState => ({
      quizList: prevState.quizList.filter(el => el.id !== id),
    }));

  render() {
    const { filter } = this.state;

    return (
      <>
        <QuizForm onSubmit={this.onSubmitQuizForm} />
        <SearchBar filter={filter} onReset={this.resetFilters} onChange={this.handleOnChangeSearch} />
        <QuizList
          quizList={this.getFilteredQuizes()}
          onClick={this.deleteQuiz}
        />
      </>
    );
  }
}
