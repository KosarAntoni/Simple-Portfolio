import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';
import CloseIcon from '../../../assets/times-solid.svg';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ProjectCardImage from './ProjectCardImage';

const Wrapper = styled.div`
  position: relative;
  height: 16rem;
  width: 16rem;
`;

const Overlay = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100vw;
	background: rgba(0,0,0, 0.4);
	z-index: 1;
`;

const Redirect = styled.a`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: auto;
  
  ${({ isSelected }) => isSelected && css`
    padding: 2rem 1rem;
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  `}
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 40rem;
  max-height: 100%;
  background: white;
  margin: auto;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  
  ${({ isSelected }) => isSelected && css`
    overflow-y: scroll;
    pointer-events: auto;
    cursor: initial;
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; 
    ::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const TextWrapper = styled(motion.div)`
  padding: 2rem;
`;

const HeadingWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const StyledHeading = styled(Heading)`
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.white};
  margin: 0;
`;

const CloseButton = styled(motion.button)`
  width: 3rem;
  height: 3rem;
  background: url("${CloseIcon}") no-repeat center;
  background-size: 40%;
  color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.white};
  transition: box-shadow 0.2s, transform 0.3s;
  
  :hover {
      box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
      transform: scale(1.1);
  }
  
  :focus {
    outline: none;
  }
`;

const ProjectCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  const zIndex = useMotionValue(isSelected ? 2 : 0);

  const checkZIndex = (latest) => {
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.borderRadius === '100%') {
      zIndex.set(0);
    }
  };

  return (
    <Wrapper>
      <Overlay
        isSelected={isSelected}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
      >
        <Redirect onClick={() => setIsSelected(false)} />
      </Overlay>
      <ContentWrapper
        layout
        isSelected={isSelected}
      >
        <ContentContainer
          initial={false}
          onClick={() => !isSelected && setIsSelected(true)}
          isSelected={isSelected}
          layout
          style={{ zIndex }}
          animate={isSelected ? {
            borderRadius: '2rem',
          } : {
            borderRadius: '100%',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          onUpdate={checkZIndex}
        >
          <ProjectCardImage isSelected={isSelected} />
          <HeadingWrapper
            initial={false}
            animate={{ y: isSelected ? '0' : '-100%' }}
            transition={isSelected ? { duration: 0.3, delay: 0.5 } : { duration: 0, delay: 0 }}
          >
            <StyledHeading>Lorem ipsum</StyledHeading>
            <CloseButton
              onClick={() => setIsSelected(false)}
              isSelected={isSelected}
            >
              Close
            </CloseButton>
          </HeadingWrapper>
          <TextWrapper
            layout
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              atque doloribus eos facilis laudantium libero natus odit quas voluptate?
            </Paragraph>
          </TextWrapper>
        </ContentContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProjectCard;
