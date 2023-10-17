import styled from 'styled-components';

export const Message = styled.span`
    font-size: 40px;
    color: ${({theme}) => theme.colors.red};
    text-transform: uppercase;
`