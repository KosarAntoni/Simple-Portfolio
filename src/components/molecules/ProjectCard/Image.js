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
  height: ${({ isSelected }) => (isSelected ? '30rem' : '20rem')};
    
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} { 
    height: ${({ isSelected }) => (isSelected ? '30rem' : '25rem')};
  }
`;

const ProjectImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  max-height: 30rem;
  object-fit: cover;
`;

const Image = ({ isSelected, data }) => (
  <Wrapper
    isSelected={isSelected}
    initial={false}
    layout
    transition={animation}
  >
    <ProjectImage
      src={data}
      alt=""
      initial={false}
    />
  </Wrapper>
);

Image.propTypes = {
  isSelected: PropTypes.bool,
  data: PropTypes.string.isRequired,
};

Image.defaultProps = {
  isSelected: false,
};

export default Image;
