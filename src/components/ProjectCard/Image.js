import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animation } from './animation';

const ProjectImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  height: ${({ isSelected }) => (isSelected ? '30rem' : '14.5rem')};
  width: 100%;
  max-height: 30rem;
  object-fit: cover;

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} {
    height: ${({ isSelected }) => (isSelected ? '30rem' : '20rem')};
  }

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} {
    height: ${({ isSelected }) => (isSelected ? '30rem' : '25rem')};
  }
`;

const Image = ({ isSelected, data }) => (
  <ProjectImage
    src={data}
    alt=""
    initial={false}
    isSelected={isSelected}
    layout
    transition={animation}
  />
);

Image.propTypes = {
  isSelected: PropTypes.bool,
  data: PropTypes.string.isRequired,
};

Image.defaultProps = {
  isSelected: false,
};

export default Image;
