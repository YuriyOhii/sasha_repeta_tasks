import { AddForm, Input, ErrorNote, AddQuizBtn } from './QuizForm.styled';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  questions: 0,
  time: 0,
  level: 'beginner',
  topic: '',
};

const validationSchema = Yup.object().shape({
  questions: Yup.number().min(5, 'Too small').max(30, 'Too large').required(),
  time: Yup.number().min(20, 'Too less').max(40, 'Too much').required(),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required(),
  topic: Yup.string().required(),
});

export const QuizForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <AddForm>
        <label>
          Topic
          <Input type="text" name="topic" placeholder="Enter topic"></Input>
          <ErrorNote name="topic" component={'div'} />
        </label>
        <label>
          Time
          <Input type="number" name="time" placeholder="Enter duration"></Input>
          <ErrorNote name="time" component={'div'} />
        </label>
        <label>
          Questions
          <Input
            type="number"
            name="questions"
            placeholder="Enter questions "
          ></Input>
          <ErrorNote name="questions" component={'div'} />
        </label>
        <label>
          Level
          <Input as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Input>
          <ErrorNote name="level" component={'div'} />
        </label>
        <AddQuizBtn type="submit">Add quiz</AddQuizBtn>
      </AddForm>
    </Formik>
  );
};

QuizForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
