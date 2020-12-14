import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { DummyProjects, DummyTestimonials } from '../../data/DummyData';
import ProjectItem from './ProjectItem';
import TestimonialItem from './TestiminialItem';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: ${({ projects }) => (projects ? 'column' : 'row')};
  justify-content: center;
  align-items: ${({ projects }) => (projects ? 'center' : 'flex-start')};
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  z-index: 3;
  top: ${({ projects }) => (projects ? 'auto' : '65vh')};

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    top: 0;
    right: 0;
    flex-direction: row;
    max-width: 400px;
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
  display: flex;
  flex-direction: row;
  margin-bottom: -1rem;
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    margin-bottom: 0;
    margin-right: -1rem;
    display: flex;
    flex-direction: column;
  }
`;

const RightProjectsColumn = styled.ul`
  display: flex;
  flex-direction: row;
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    margin-left: -1rem;
    display: flex;
    flex-direction: column;
  }
`;

const TestimonialsColumn = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 27rem;
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    display: flex;
    flex-direction: column;
  }
`;

const CardsContainer = ({ currentSection }) => (
  <AnimatePresence exitBeforeEnter>
    {currentSection === 'projects' && (
    <Wrapper
      key="projects"
      projects
    >
      <LeftProjectsColumn>
        {DummyProjects.map((item, i) => (
          !(i % 2) && (
          <ProjectItem i={i} key={item.id} item={item} />
          )
        ))}
      </LeftProjectsColumn>
      <RightProjectsColumn>
        {DummyProjects.map((item, i) => (
          !!(i % 2) && (
            <ProjectItem i={i} key={item.id} item={item} />
          )
        ))}
      </RightProjectsColumn>

    </Wrapper>
    )}
    {currentSection === 'testimonials' && (
    <Wrapper key="testimonials">
      <TestimonialsColumn>
        {DummyTestimonials.map((item, i) => (
          !(i % 2) && (
          <TestimonialItem i={i} key={item.id} item={item} />
          )
        ))}
      </TestimonialsColumn>
      <TestimonialsColumn>
        {DummyTestimonials.map((item, i) => (
          !!(i % 2) && (
            <TestimonialItem i={i} key={item.id} item={item} />
          )
        ))}
      </TestimonialsColumn>
    </Wrapper>
    )}
  </AnimatePresence>
);

CardsContainer.propTypes = {
  currentSection: PropTypes.oneOf(['projects', 'testimonials', 'loading']).isRequired,
};

export default CardsContainer;
