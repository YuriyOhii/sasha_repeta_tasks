import { QuizForm } from '../components/QuizForm';
import { useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { ErrorNotice } from '../components/Error';
import { addQuiz } from '../components/services/api';
import { toast } from 'react-hot-toast';

export default function CreateQuiz() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmitQuizForm = async values => {
    try {
      setLoading(true);
      setError(null);
      await addQuiz(values);
      toast.success('Added successfully!');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <QuizForm onSubmit={onSubmitQuizForm} />
      {error && <ErrorNotice errorMessage={error.message} />}
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
    </div>
  );
}
