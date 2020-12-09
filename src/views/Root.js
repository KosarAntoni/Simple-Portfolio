import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useViewportScroll,
} from 'framer-motion';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import ProjectsView from './ProjectsView';
import TestimonialsView from './TestimonialsView';
import ProjectsContainer from '../components/organisms/ProjectsContainer/ProjectsContainer';

const Root = () => {
  const [currentSection, setCurrentSection] = useState('projects');
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => scrollYProgress.onChange((v) => {
    setCurrentSection(v >= 0.5 ? 'testimonials' : 'projects');
  }));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProjectsView />
      {window.innerWidth > 768 && <ProjectsContainer currentSection={currentSection} />}
      {window.innerWidth <= 768 && <ProjectsContainer currentSection="projects" />}
      <TestimonialsView />
      {window.innerWidth <= 768 && <ProjectsContainer currentSection="testimonials" />}
    </ThemeProvider>
  );
};

export default Root;
