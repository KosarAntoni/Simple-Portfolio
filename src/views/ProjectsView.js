import React, { useState } from 'react';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import ProjectsContainer from '../components/organisms/ProjectsContainer/ProjectsContainer';
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

const ProjectsView = () => {
  const [isVisible, setIsVisible] = useState(true);
  useScrollPosition(({ currPos }) => {
    if (window.innerWidth > 768) {
      if ((currPos.y * -1) < (window.innerHeight / 2)) setIsVisible(true);
      else setIsVisible(false);
    }
  });

  return (
    <Wrapper>
      <ContentSection>

        <div>
          <Heading big>Some info about me</Heading>
          <Heading big>and my projects</Heading>
        </div>

        <div>
          <Paragraph big>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aut commodi
            deserunt eos ipsam
            itaque magnam mollitia quas, tempore.
          </Paragraph>
          <Paragraph big>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quis, quod. Aliquid
            corporis facilis
            fugiat vero!
          </Paragraph>
        </div>

      </ContentSection>
      <ProjectsContainer isVisible={isVisible} />
    </Wrapper>
  );
};

export default ProjectsView;
