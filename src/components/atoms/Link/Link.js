import styled from 'styled-components';

const Link = styled.a`
  position: relative;
  text-decoration: none;
  transition: all 0.3s;
  color: ${({ theme, color }) => (color || theme.grey)};
  font-size: ${({ theme }) => theme.fontSize.l};

  
  ::before {
    position: absolute;
    display: block;
    content: '';
    bottom: 0;
    
    z-index: -1;
    width: 100%;
    height: 2px;
    background: ${({ theme, color }) => (color || theme.grey)};
    transition: all 0.3s ease;
  }
  
  :hover {
    color: ${({ theme }) => theme.white};
  }
  
  :hover::before {
    height: 100%;
  }
`;

export default Link;
