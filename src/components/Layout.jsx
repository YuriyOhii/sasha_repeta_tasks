import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: ${({ theme }) => theme.spacing(4)};

  margin-left: auto;
  margin-right: auto;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  transition: color 300ms;
  &.active {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(20)};
  > li {
    list-style: none;
  }
`;
