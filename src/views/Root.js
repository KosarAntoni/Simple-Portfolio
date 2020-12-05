import React from 'react';
import { ThemeProvider } from 'styled-components';
import ProjectCard from '../components/organisms/ProjectCard/ProjectCard';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </ThemeProvider>
);

export default Root;
