import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const TestimonialsAnimation = {
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
  hidden: (i) => ({
    scale: 0.8,
    y: (i + 1) * 50,
    opacity: 0,
  }),
  exit: (i) => ({
    scale: 0.8,
    y: (i + 1) * -20,
    opacity: 0,
  }),
  transition: {
    type: 'spring', stiffness: 300, damping: 30,
  },
};

const TestimonialItem = ({ i, item, isVisible }) => (
  <motion.li
    custom={i}
    variants={TestimonialsAnimation}
    initial="hidden"
    animate={isVisible ? 'visible' : 'exit'}
    exit="exit"
    transition={{
      ...TestimonialsAnimation.transition, delay: isVisible ? (i / 20) + 1 : i / 20,
    }}
  >
    <TestimonialCard date={item.date} text={item.text} title={item.title} />
  </motion.li>
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
