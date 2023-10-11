import {
  Quiz,
  DelQuizBtn,
  InfoWrapper,
  Info,
  Topic,
  CloseModalBtn,
} from './QuizItem.styled';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { BsTrash3Fill } from 'react-icons/bs';
import Modal from 'react-modal';

const customStyles = {
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export class QuizItem extends PureComponent {
  static propTypes = {
    item: PropTypes.exact({
      id: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      questions: PropTypes.number.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    Modal.setAppElement('#root');
    const {
      item: { level, topic, time, questions, id },
      onClick,
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <Quiz $level={level}>
        <Topic onClick={this.openModal}>{topic}</Topic>
        <InfoWrapper>
          <Info $color="red">Level: {level}</Info>
          <Info $color="blue">Time: {time}min</Info>
          <Info $color="grey">Questions: {questions}</Info>
        </InfoWrapper>
        <DelQuizBtn type="button" onClick={() => onClick(id)}>
          <BsTrash3Fill />
        </DelQuizBtn>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>{topic}</h2>
          <CloseModalBtn onClick={this.closeModal}>close</CloseModalBtn>
          <div>I am a modal</div>
        </Modal>
      </Quiz>
    );
  }
}
