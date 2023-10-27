import { Quiz, DelQuizBtn, InfoWrapper, Info, Topic } from './QuizItem.styled';
import PropTypes from 'prop-types';
import { BsTrash3Fill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

export const QuizItem = ({
  item: { level, topic, time, questions, id },
  onClick,
}) => {
  const location = useLocation();
  return (
    <Quiz $level={level}>
      <Link to={`/quizzes/${id}`} state={{ from: location }}>
        <Topic>{topic}</Topic>
      </Link>
      <InfoWrapper>
        <Info $color="red">Level: {level}</Info>
        <Info $color="blue">Time: {time}min</Info>
        <Info $color="grey">Questions: {questions}</Info>
      </InfoWrapper>
      <DelQuizBtn type="button" onClick={() => onClick(id)}>
        <BsTrash3Fill />
      </DelQuizBtn>
    </Quiz>
  );
};

QuizItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    questions: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
