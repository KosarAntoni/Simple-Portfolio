import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DummyTestimonials } from '../../data/DummyData';
import TestimonialItem from './TestimonialItem';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  z-index: ${({ isVisible }) => (isVisible ? 3 : 0)};
  top: 65vh;

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

const Testimonials = ({ currentSection }) => (
  <Wrapper
    key="testimonials"
    isVisible={currentSection === 'testimonials'}
  >
    <TestimonialsColumn>
      {DummyTestimonials.map((item, i) => (
        !(i % 2) && (
        <TestimonialItem i={i} key={item.id} item={item} isVisible={currentSection === 'testimonials'} />
        )
      ))}
    </TestimonialsColumn>
    <TestimonialsColumn>
      {DummyTestimonials.map((item, i) => (
        !!(i % 2) && (
        <TestimonialItem i={i} key={item.id} item={item} isVisible={currentSection === 'testimonials'} />
        )
      ))}
    </TestimonialsColumn>
  </Wrapper>
);

Testimonials.propTypes = {
  currentSection: PropTypes.oneOf(['projects', 'testimonials', 'loading']).isRequired,
};

export default Testimonials;
