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
`;

const ProjectImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  max-height: 30rem;
`;

const Image = ({ isSelected }) => (
  <Wrapper
    initial={false}
    layout
    animate={{ height: isSelected ? '30rem' : '16rem' }}
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
