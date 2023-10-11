import styled from 'styled-components';

export const Quiz = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 3px solid
    ${({ $level, theme }) => {
      switch ($level) {
        case 'beginner':
          return theme.colors.green;
        case 'intermediate':
          return theme.colors.yellow;
        case 'advanced':
          return theme.colors.red;
        default:
          return 'none';
      }
    }};
`;

export const DelQuizBtn = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};

  padding: ${({ theme }) => theme.spacing(1)};

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;

  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Info = styled.p`
  color: ${({ $color, theme }) => theme.colors[$color]};
`;
