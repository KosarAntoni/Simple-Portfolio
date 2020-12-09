import React from 'react';
import styled from 'styled-components';
import {
  loremIpsum, fullname,
} from 'react-lorem-ipsum';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    display: flex;
    flex-direction: row;
    max-width: 1250px;
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

const ProjectsView = () => (
  <Wrapper>
    <ContentSection>

      <div>
        <Heading big>
          {loremIpsum({ avgWordsPerSentence: 5, avgSentencesPerParagraph: 1 })[0]}
        </Heading>
        <Heading big>{fullname()}</Heading>
      </div>

      <div>
        <Paragraph big>
          {loremIpsum({ avgSentencesPerParagraph: 4 })[0]}
        </Paragraph>
        <Paragraph big>
          {loremIpsum({ avgSentencesPerParagraph: 6 })[0]}
        </Paragraph>
      </div>

    </ContentSection>
  </Wrapper>
);

export default ProjectsView;
