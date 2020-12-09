import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ProjectsAnimation = {
  visible: {
    scale: 1,
    x: 0,
    y: 0,
  },
  hidden: (i) => ({
    scale: 0,
    x: !(i % 2) ? (getRandom(2, 5) * -100) : (getRandom(2, 5) * 100),
    y: getRandom(-2, 2) * 100,
  }),
  exit: {
    scale: 0,
  },
  transition: {
    type: 'spring', stiffness: 100, damping: 15,
  },
};

const ProjectCardWrapper = ({ i, children }) => (
  <motion.li
    custom={i}
    variants={ProjectsAnimation}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ ...ProjectsAnimation.transition, delay: getRandom(1, 5) / 10 }}
  >
    {children}
  </motion.li>
);

ProjectCardWrapper.propTypes = {
  i: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProjectCardWrapper;
