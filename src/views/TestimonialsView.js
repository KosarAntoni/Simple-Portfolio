import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Link from '../components/atoms/Link/Link';

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

const BreakLine = styled.div`
  height: 4px;
  width: 60%;
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
      <BreakLine />
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
          Currently working as designer at
          {' '}
          <Link
            href="https://simple-portfolio-by-kosar.netlify.app/"
            color="rgb(162, 0, 224)"
          >
            BestWorkEver
          </Link>
          ,
          if you want contact me find me on
          {' '}
          <Link
            href="https://simple-portfolio-by-kosar.netlify.app/"
            color="rgb(24, 119, 242)"
          >
            Facebook
          </Link>
          {' '}
          or
          {' '}
          <Link
            href="https://simple-portfolio-by-kosar.netlify.app/"
            color="rgb(221, 0, 116)"
          >
            Instagram
          </Link>
          ,
          and you can also
          {' '}
          <Link
            href="https://simple-portfolio-by-kosar.netlify.app/"
            color="rgb(211, 47, 47)"
          >
            send me email
          </Link>
          .
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
