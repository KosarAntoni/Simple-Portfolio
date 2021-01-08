import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';

const animation = { type: 'spring', stiffness: 100, damping: 15 };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1250px;
    min-height: 100vh;
    height: 100%;
  }  
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    height: 100%;
    width: 55%;
    padding: 5rem;
  }    
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} { 
    padding: 0;
  }  
`;

const HeadingWrapper = styled.div`
  overflow: hidden;
`;

const BreakLine = styled(motion.div)`
  height: 4px;
  max-width: 30rem;
  background-color: ${({ theme }) => theme.black};
  border-radius: 50rem;
  margin: 0 auto 2rem 0;
`;

const TestimonialsView = ({ isVisible }) => (
  <Wrapper>
    <ContentSection>

      <HeadingWrapper>
        <Heading
          big
          as={motion.h1}
          initial={{ y: '200%' }}
          animate={{ y: isVisible ? '0%' : '200%' }}
          transition={animation}
        >
          Testimonials of breathtaking people
        </Heading
        >
      </HeadingWrapper>
      <BreakLine
        initial={{ width: '0%' }}
        animate={{ width: isVisible ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      />
      <HeadingWrapper>
        <Heading
          big
          as={motion.h1}
          initial={{ y: '-100%' }}
          animate={{ y: isVisible ? '0%' : '-100%' }}
          transition={animation}
        >
          Lorem ipsum dolor sit amet
        </Heading>
      </HeadingWrapper>

      <div>
        <Paragraph
          big
          as={motion.p}
          initial={{ y: '10%', opacity: 0 }}
          animate={isVisible ? { y: '0%', opacity: 1 } : { y: '10%', opacity: 0 }}
          transition={{ ...animation, delay: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
          Amet consectetur adipiscing elit quisque faucibus ex sapien.
          Quisque faucibus ex sapien vitae pellentesque sem placerat.
          Vitae pellentesque sem placerat in id cursus mi.
        </Paragraph>
        <Paragraph
          big
          as={motion.p}
          initial={{ y: '10%', opacity: 0 }}
          animate={isVisible ? { y: '0%', opacity: 1 } : { y: '10%', opacity: 0 }}
          transition={{ ...animation, delay: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
          Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
          Vitae pellentesque sem placerat in id cursus mi.
          Cursus mi pretium tellus duis convallis tempus leo.
          Tempus leo eu aenean sed diam urna tempor.
        </Paragraph>
      </div>

    </ContentSection>
  </Wrapper>
);

TestimonialsView.propTypes = {
  isVisible: PropTypes.bool,
};

TestimonialsView.defaultProps = {
  isVisible: false,
};

export default TestimonialsView;
