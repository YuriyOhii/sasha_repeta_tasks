import { PureComponent } from 'react'
import { QuizForm } from './QuizForm';
import { SearchBar } from './SearchBar';
import { QuizList } from './QuizList';

export class App extends PureComponent {
  state={

  };
  render() {
    return (
      <>
      <QuizForm/>
      <SearchBar/>
      <QuizList/>
      </>
    )
  }
}

