import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { motion, useViewportScroll } from 'framer-motion';

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
  padding: 2rem 0;
  
  ${({ isSelected }) => isSelected && css`
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
    min-height: 60rem;
    margin: 0 auto;
    z-index: 2;
    cursor: initial;
  `}
`;

const ProjectCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef(null);
  const dismissScrollDistance = -50;
  const dismissSwipeDistance = 3;
  const { scrollYProgress } = useViewportScroll(cardRef);

  const checkScrollToDismiss = (pos) => {
    if (scrollYProgress.current === 0 && pos < dismissScrollDistance) setIsSelected(false);
  };
  const checkSwipeToDismiss = (pos) => {
    if (scrollYProgress.current === 0 && pos > dismissSwipeDistance) setIsSelected(false);
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
          onWheel={(e) => checkScrollToDismiss(e.deltaY)}
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
          onPan={(event, info) => checkSwipeToDismiss(info.offset.y)}
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
