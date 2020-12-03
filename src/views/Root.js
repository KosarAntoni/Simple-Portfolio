import React from 'react';
import { ThemeProvider } from 'styled-components';
import ProjectCard from '../components/organisms/ProjectCard/ProjectCard';
import GlobalStyle from '../theme/GlobalStyle';

const Root = () => (
  <ThemeProvider theme={GlobalStyle}>
    <GlobalStyle />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </ThemeProvider>
);

export default Root;
