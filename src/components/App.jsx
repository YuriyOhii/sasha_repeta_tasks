import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
const Homepage = lazy(() => import('pages/Homepage'));
const NotFound = lazy(() => import('pages/NotFound'));
const QuizDetails = lazy(() => import('pages/QuizDetails'));
const Quizzes = lazy(() => import('pages/Quizzes'));
const CreateQuiz = lazy(() => import('pages/CreateQuiz'));

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
