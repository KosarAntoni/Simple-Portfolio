import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useViewportScroll,
} from 'framer-motion';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import ProjectsView from './ProjectsView';
import TestimonialsView from './TestimonialsView';
import CardsContainer from '../components/organisms/CardsContainer/CardsContainer';

const Root = () => {
  const [currentSection, setCurrentSection] = useState('projects');
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => scrollYProgress.onChange((v) => {
    setCurrentSection(v >= 0.5 ? 'testimonials' : 'projects');
  }));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProjectsView isVisible={currentSection === 'projects'} />
      {window.innerWidth > 768 && <CardsContainer currentSection={currentSection} />}
      {window.innerWidth <= 768 && <CardsContainer currentSection="projects" />}
      <TestimonialsView isVisible={currentSection === 'testimonials'} />
      {window.innerWidth <= 768 && <CardsContainer currentSection="testimonials" />}
    </ThemeProvider>
  );
};

export default Root;
