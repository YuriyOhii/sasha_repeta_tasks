import { PureComponent } from 'react';
import { QuizForm } from './QuizForm';
import { SearchBar } from './SearchBar';
import { QuizList } from './QuizList';
import data from '../data.json';

export class App extends PureComponent {
  state = {
    quizList: data,
    filter: {
      search: '',
      level: 'all',
    },
  }; 

handleOnChangeSearch = (key, value) => {
  this.setState(prevState=> ({
    filter: ({...prevState.filter, [key]: value})
  }))
};

getFilteredQuizes =() =>{
  const { quizList, filter:{search, level} } = this.state
  const normalizedSearch = search.toLowerCase();
  const filteredBySearch = quizList.filter(({topic})=>topic.toLowerCase().includes(normalizedSearch));
  const filteredQuizes = filteredBySearch.filter(el=>{
    if(level === "all") return true;
    return el.level === level;
  });
  return filteredQuizes;
};

deleteQuiz = id => this.setState(prevState=>({quizList:prevState.quizList.filter(el=>el.id !== id)}))

  render() {
    const { filter } = this.state;


    return (
      <>
        <QuizForm />
        <SearchBar filter={filter} onChange={this.handleOnChangeSearch}/>
        <QuizList quizList={this.getFilteredQuizes()} onClick={this.deleteQuiz}/>
      </>
    );
  }
}
