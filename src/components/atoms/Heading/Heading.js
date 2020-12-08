import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.s)};
  margin-bottom: ${({ theme }) => (theme.fontSize.xs)};
  font-weight:  ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
`;

export default Heading;
