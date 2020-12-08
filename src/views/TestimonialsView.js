import React from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Link from '../components/atoms/Link/Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    display: flex;
    flex-direction: row;
    max-width: 1300px;
    height: 100vh;
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

const TestimonialsView = () => (
  <Wrapper>
    <ContentSection>

      <div>
        <Heading big>Testimonials of people</Heading>
        <Heading big>who are breathtaking</Heading>
      </div>

      <div>
        <Paragraph big>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aut commodi
          deserunt eos ipsam
          itaque magnam mollitia quas, tempore.
        </Paragraph>
        <Paragraph big>
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

export default TestimonialsView;
