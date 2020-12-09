import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import TestimonialCard from '../../molecules/TestimonialCard/TestimonialCard';
import { DummyProjects, DummyTestimonials } from './DummyData';
import ProjectCardWrapper from './ProjectCardWrapper';
import TestimonialCardWrapper from './TestiminialCardWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 1rem;

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    align-items: center;
    padding: 0;
  }
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} { 
    max-width: 510px;
    right: auto;
    left: 58%;
  }
`;

const LeftProjectsColumn = styled.ul`
  margin-right: -1rem;
  display: flex;
  flex-direction: column;
`;

const RightProjectsColumn = styled.ul`
  margin-left: -1rem;
  display: flex;
  flex-direction: column;
`;

const TestimonialsColumn = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const CardsContainer = ({ currentSection }) => (
  <AnimatePresence exitBeforeEnter>
    {currentSection === 'projects' && (
    <Wrapper key="projects" center>
      <LeftProjectsColumn>
        {
          DummyProjects.map((item, i) => (
            !(i % 2) && (
            <ProjectCardWrapper i={i} key={item.id}>
              <ProjectCard image={item.image} content={item.content} title={item.title} />
            </ProjectCardWrapper>
            )
          ))
            }
      </LeftProjectsColumn>
      <RightProjectsColumn>
        {
          DummyProjects.map((item, i) => (
            !!(i % 2) && (
            <ProjectCardWrapper i={i} key={item.id}>
              <ProjectCard image={item.image} content={item.content} title={item.title} />
            </ProjectCardWrapper>
            )
          ))
}
      </RightProjectsColumn>
    </Wrapper>
    )}
    {currentSection === 'testimonials' && (
    <Wrapper key="testimonials">
      <TestimonialsColumn>
        {
          DummyTestimonials.map((item, i) => (
            !(i % 2) && (
            <TestimonialCardWrapper i={i} key={item.id}>
              <TestimonialCard date={item.date} text={item.text} title={item.title} />
            </TestimonialCardWrapper>
            )
          ))
            }
      </TestimonialsColumn>
      <TestimonialsColumn>
        {
          DummyTestimonials.map((item, i) => (
            !!(i % 2) && (
            <TestimonialCardWrapper i={i} key={item.id}>
              <TestimonialCard date={item.date} text={item.text} title={item.title} />
            </TestimonialCardWrapper>
            )
          ))
}
      </TestimonialsColumn>
    </Wrapper>
    )}
  </AnimatePresence>
);

CardsContainer.propTypes = {
  currentSection: PropTypes.oneOf(['projects', 'testimonials']).isRequired,
};

export default CardsContainer;
