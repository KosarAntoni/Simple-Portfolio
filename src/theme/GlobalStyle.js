import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';

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
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif; 
  }
  
      @media screen and ${theme.viewPorts.viewport7} {
        body {
          font-size: 1.6rem;
        }
      }

`;

export default GlobalStyle;
