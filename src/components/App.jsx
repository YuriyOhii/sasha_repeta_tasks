import CreateQuiz from 'pages/CreateQuiz';
import Homepage from 'pages/Homepage';
import NotFound from 'pages/NotFound';
import QuizDetails from 'pages/QuizDetails';
import Quizzes from 'pages/Quizzes';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/:quizId" element={<QuizDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
