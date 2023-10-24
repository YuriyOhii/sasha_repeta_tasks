import CreateQuiz from 'pages/CreateQuiz';
import Homepage from 'pages/Homepage';
import NotFound from 'pages/NotFound';
import QuizDetails from 'pages/QuizDetails';
import Quizzes from 'pages/Quizzes';
import { Route, Routes } from 'react-router-dom';
import { Container, NavigationLink, NavigationList } from './Layout';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <Container>
      <header>
        <nav>
          <NavigationList>
            <li>
              <NavigationLink to={'/'}>Homepage</NavigationLink>
            </li>
            <li>
              <NavigationLink to={'/create'}>Create new quiz</NavigationLink>
            </li>
            <li>
              <NavigationLink to={'/quizzes'}>
                To see all quizzes
              </NavigationLink>
            </li>
          </NavigationList>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/:quizId" element={<QuizDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
}
