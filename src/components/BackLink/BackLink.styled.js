import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const StyledLink = styled(Link)`
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.grey};
  transition: transform 300ms, color 300ms;
  &:hover {
    transform: scale(1.01);
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Icon = styled(BsArrowLeft)`
  color: inherit;
`;
