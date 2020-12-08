import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animation } from './animation';

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  height: ${({ isSelected }) => (isSelected ? '30rem' : '16rem')};
    
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    height: ${({ isSelected }) => (isSelected ? '30rem' : '20rem')};
  }
    
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} { 
    height: ${({ isSelected }) => (isSelected ? '30rem' : '25rem')};
  }
`;

const ProjectImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  max-height: 30rem;
`;

const Image = ({ isSelected }) => (
  <Wrapper
    isSelected={isSelected}
    initial={false}
    layout
    transition={animation}
  >
    <ProjectImage
      src="https://picsum.photos/seed/picsum/400/300"
      alt=""
      initial={false}
    />
  </Wrapper>
);

Image.propTypes = {
  isSelected: PropTypes.bool,
};

Image.defaultProps = {
  isSelected: false,
};

export default Image;
