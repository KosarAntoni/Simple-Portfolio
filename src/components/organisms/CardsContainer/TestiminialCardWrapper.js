import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

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

const TestimonialCardWrapper = ({ i, children }) => (
  <motion.li
    custom={i}
    variants={TestimonialsAnimation}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{
      ...TestimonialsAnimation.transition, delay: i / 20,
    }}
  >
    {children}
  </motion.li>
);

TestimonialCardWrapper.propTypes = {
  i: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TestimonialCardWrapper;
