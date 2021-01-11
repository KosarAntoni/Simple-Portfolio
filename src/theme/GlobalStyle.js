import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  ul {
  	list-style: none;
  }
  
  html {
    font-size: 55%;
    padding-bottom: 26rem;
  }
  
  body {
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;
    width: 100%;
    background-color:${({ theme }) => theme.backgroundMain};
    color: ${({ theme }) => theme.black};
  }
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    html {
      font-size: 62.5%;
      padding-bottom: 0;
    }
  }

`;

export default GlobalStyle;
