import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const animation = {
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
  exit: () => ({
    scale: 0.8,
    y: 0,
    opacity: 0,
  }),
  transition: {
    type: 'spring', stiffness: 300, damping: 30,
  },
};

const Wrapper = styled(motion.li)`
  margin: 1rem;
`;

const TestimonialItem = ({ i, item, isVisible }) => (
  <Wrapper
    variants={animation}
    initial="exit"
    animate={isVisible ? 'visible' : 'exit'}
    exit="exit"
    transition={{
      ...animation.transition, delay: isVisible ? (i / 20) + 1 : i / 20,
    }}
  >
    <TestimonialCard date={item.date} text={item.text} title={item.title} />
  </Wrapper>
);

TestimonialItem.propTypes = {
  isVisible: PropTypes.bool,
  i: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  item: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

TestimonialItem.defaultProps = {
  isVisible: false,
};
export default TestimonialItem;
