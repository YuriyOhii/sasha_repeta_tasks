import {} from './QuizItem.styled';
import PropTypes from 'prop-types';

export const QuizItem = ({ item: { topic, level, time, questions, id }, onClick }) => {
  return (
    <>
      <h2>{topic}</h2>
      <div>
        <p>Level: {level}</p>
        <p>Time: {time}min</p>
        <p>Questions: {questions}</p>
      </div>
      <button type='button' onClick={()=>onClick(id)}>Delete</button>
    </>
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
