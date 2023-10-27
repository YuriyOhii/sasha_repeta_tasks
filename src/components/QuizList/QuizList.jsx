import { List, Quiz } from './QuizList.styled';
import PropTypes from 'prop-types';
import { QuizItem } from 'components/QuizItem/QuizItem';

export const QuizList = ({ quizList, onClick }) => {
  return (
    <>
      <List>
        {quizList.map(quiz => (
          <Quiz key={quiz.id}>
            <QuizItem item={quiz} onClick={onClick} />
          </Quiz>
        ))}
      </List>
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
