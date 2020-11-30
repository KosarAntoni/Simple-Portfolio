import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollConstraints } from '../../../utils/use-scroll-constraints';

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
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
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
    z-index: 2;
    cursor: initial;
  `}
`;

const ProjectCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);
  const dismissDistance = 150;

  const checkSwipeToDismiss = (pos) => {
    if (pos > dismissDistance) setIsSelected(false);
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
          onClick={() => setIsSelected(true)}
          isSelected={isSelected}
          ref={cardRef}
          layout
          animate={isSelected ? {
            borderRadius: '2rem',
          } : {
            borderRadius: '100%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 40 }}
          drag={isSelected ? 'y' : false}
          dragConstraints={constraints}
          onDragEnd={(event, info) => checkSwipeToDismiss(info.point.y)}
        />
      </Wrapper>
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
