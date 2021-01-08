import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useViewportScroll } from 'framer-motion';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import ProjectsView from './ProjectsView';
import TestimonialsView from './TestimonialsView';
import CardsContainer from '../components/CardsContainer';
import { DummyProjects } from '../data/DummyData';

const Root = () => {
  const [currentSection, setCurrentSection] = useState('loading');
  const { scrollYProgress } = useViewportScroll();
  const ref = useRef();

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setCurrentSection(v >= 0.5 ? 'testimonials' : 'projects');
    });
  });

  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    let count = 0;
    const image = new Image(400, 300);

    DummyProjects.forEach((project) => {
      axios
        .get(
          project.image, {
            responseType: 'blob',
          },
        )
        .then((response) => {
          image.src = URL.createObjectURL(response.data);
          count += 1;
          if (DummyProjects.length === count) setCurrentSection('projects');
        });
    });
  }, [ref]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter ref={ref}>
        <ProjectsView
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <GlobalStyle />
        <CardsContainer currentSection={currentSection} />
        <TestimonialsView isVisible={currentSection === 'testimonials'} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
