import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const AddForm = styled(Form)`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const Input = styled(Field)`
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const ErrorNote = styled(ErrorMessage)`
  font-size: 12;
  color: ${({ theme }) => theme.colors.red};
`;

export const AddQuizBtn = styled.button`
  width: 200px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};

  cursor: pointer;
`;
