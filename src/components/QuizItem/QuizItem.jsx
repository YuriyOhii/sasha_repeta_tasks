import { Quiz, DelQuizBtn, InfoWrapper, Info } from './QuizItem.styled';
import PropTypes from 'prop-types';
import { BsTrash3Fill } from 'react-icons/bs';

export const QuizItem = ({
  item: { topic, level, time, questions, id },
  onClick,
}) => {
  return (
    <Quiz $level={level}>
      <h2>{topic}</h2>
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
