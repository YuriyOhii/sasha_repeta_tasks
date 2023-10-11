import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(6)};
  list-style: none;
`;

export const Quiz = styled.li`
  flex-basis: calc((100% - ${({ theme }) => theme.spacing(6)} * 3) / 3);
`;
