import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = motion.div;

const ProjectImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  max-height: 30rem;
`;

const ProjectCardImage = ({ isSelected }) => (
  <Wrapper
    initial={false}
    layout
    animate={{ height: isSelected ? '30rem' : '16rem' }}
    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
  >
    <ProjectImage
      src="https://picsum.photos/seed/picsum/400/300"
      alt=""
      initial={false}
    />
  </Wrapper>
);

ProjectCardImage.propTypes = {
  isSelected: PropTypes.bool,
};

ProjectCardImage.defaultProps = {
  isSelected: false,
};

export default ProjectCardImage;
