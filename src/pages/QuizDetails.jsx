import { useParams } from 'react-router-dom';
import { getQuizeById } from '../components/services/api';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner';
import { ErrorNotice } from '../components/Error';

export default function QuizDetails() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setError(null);
        setLoading(true);
        const quizItem = await getQuizeById(quizId);
        if (quizItem) {
          setQuiz(quizItem);
          toast.success('Fetched successfully!');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [quizId]);

  return (
    <div>
      {' '}
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
      <h1>Topic: {quiz.topic}</h1>
      <p>
        <b>Level</b> {quiz.level}
      </p>
      <p>
        <b>Time</b> {quiz.time}
      </p>
      <p>
        <b>Questions</b> {quiz.questions}
      </p>
    </div>
  );
}
