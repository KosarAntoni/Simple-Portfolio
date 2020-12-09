import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animation } from './animation';

const TextWrapper = styled(motion.div)`
  padding: 32rem 2rem 2rem;
  z-index: 0;
`;

const Content = ({ data }) => (
  <TextWrapper
    layout
    transition={animation}
  >
    <Paragraph>{data}</Paragraph>
  </TextWrapper>
);

Content.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Content;
