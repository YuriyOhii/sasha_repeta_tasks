import {} from './QuizList.styled';
import PropTypes from 'prop-types';
import { QuizItem } from 'components/QuizItem';

export const QuizList = ({ quizList, onClick }) => {
  return (
    <>
      <ul>
        {quizList.map(quiz => (
          <li key={quiz.id}>
            <QuizItem item={quiz} onClick={onClick} />
          </li>
        ))}
      </ul>
    </>
  );
};

QuizList.propTypes = {
  quizList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      questions: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
