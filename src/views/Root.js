import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import ProjectsView from './ProjectsView';
import TestimonialsView from './TestimonialsView';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProjectsView />
    <TestimonialsView />
  </ThemeProvider>
);

export default Root;
