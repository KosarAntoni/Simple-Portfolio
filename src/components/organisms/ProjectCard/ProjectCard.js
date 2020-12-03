import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';
import CloseIcon from '../../../assets/times-solid.svg';

const PositionHolder = styled.div`
  position: ${({ isSelected }) => (isSelected ? 'relative' : 'absolute')};
  z-index: -1;
  height: 16rem;
  width: 16rem;
`;

const Overlay = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100vw;
	background: rgba(0,0,0, 0.2);
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

const Wrapper = styled.div`
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

const ContentWrapper = styled(motion.div)`
  position: relative;
  background: white;
  width: 16rem;
  height: 16rem;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  
  ${({ isSelected }) => isSelected && css`
    pointer-events: auto;
    width: 100%;
    max-width: 40rem;
    height: 100%;
    margin: 0 auto;
    cursor: initial;
  `}
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: ${({ isSelected }) => (isSelected ? '2rem' : '-2rem')};
  transform: scale( ${({ isSelected }) => (isSelected ? '1' : '0')});
  width: 3rem;
  height: 3rem;
  background: url("${CloseIcon}") no-repeat center;
  color: transparent;
  border: none;
  cursor: pointer;
  transition: scale 0.3s ease;
  
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
    <>
      <Overlay
        isSelected={isSelected}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
      >
        <Redirect onClick={() => setIsSelected(false)} />
      </Overlay>
      <Wrapper isSelected={isSelected}>
        <ContentWrapper
          onClick={() => !isSelected && setIsSelected(true)}
          isSelected={isSelected}
          layout
          style={{ zIndex }}
          animate={isSelected ? {
            borderRadius: '2rem',
          } : {
            borderRadius: '100%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 40 }}
          onUpdate={checkZIndex}
        >
          <CloseButton
            onClick={() => setIsSelected(false)}
            isSelected={isSelected}
          >
            Close
          </CloseButton>
        </ContentWrapper>
      </Wrapper>
      <PositionHolder isSelected={isSelected} />
    </>
  );
};

// ProjectCard.propTypes = {
//   isSelected: PropTypes.bool,
// };
//
// ProjectCard.defaultProps = {
//   isSelected: false,
// };

export default ProjectCard;
