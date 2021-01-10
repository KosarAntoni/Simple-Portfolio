import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Image from './Image';
import Content from './Content';
import { animation } from './animation';
import CardHeading from './Heading';

const Wrapper = styled.div`
  position: relative;
  height: 14rem;
  width: 14rem;
  margin: 0.5rem;
   
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    height: 20rem;
    width: 20rem;
    margin: 1rem;
  }  
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} { 
    height: 25rem;
    width: 25rem;
    margin: 1rem;
  }
`;

const Overlay = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100vw;
    cursor: pointer;
    visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: rgba(0,0,0, 0);

  ${({ isSelected }) => isSelected && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: rgba(0,0,0, 0.4);
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
  z-index: 5;
  
  ${({ isSelected }) => isSelected && css`
    padding: 2rem 1rem;
    overflow-y: scroll;
    cursor: initial;
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; 
    ::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const ProjectCard = ({
  title, image, content, id, isSelected,
}) => {
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  const ref = useRef();
  const history = useHistory();

  const checkZIndex = (latest) => {
    if (isSelected) {
      zIndex.set(10);
    } else if (!isSelected && latest.borderRadius === '100%') {
      zIndex.set(0);
    }
  };

  const handleOpen = () => {
    const { scrollY } = window;

    history.push(`/${id}`);

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
  };

  const handleClose = () => {
    const scrollY = parseInt(document.body.style.top, 10);

    ref.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    history.replace('/');

    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, -(scrollY || 0));
  };

  return (
    <Wrapper>
      <ContentWrapper
        layout
        isSelected={isSelected}
      >
        <Overlay
          isSelected={isSelected}
          onClick={handleClose}
        />
        <ContentContainer
          ref={ref}
          initial={false}
          onClick={isSelected ? null : handleOpen}
          isSelected={isSelected}
          layout
          style={{ zIndex }}
          animate={isSelected ? {
            borderRadius: '2rem',
          } : {
            borderRadius: '100%',
          }}
          transition={animation}
          onUpdate={checkZIndex}
        >
          <Image isSelected={isSelected} data={image} />
          <CardHeading isSelected={isSelected} handleClose={handleClose} data={title} />
          <Content data={content} />
        </ContentContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

ProjectCard.defaultProps = {
  isSelected: false,
};

export default ProjectCard;
