import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import ProjectCard from '../ProjectCard';

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

const ProjectItem = ({ i, item, isVisible }) => {
  const match = useRouteMatch('/:id');

  return (
    <>
      {
                match && match.params.id === item.id.toString() ? (
                  <motion.li>
                    <ProjectCard
                      image={item.image}
                      content={item.content}
                      title={item.title}
                      id={item.id}
                      isSelected
                    />
                  </motion.li>
                ) : (
                  <motion.li
                    custom={i}
                    variants={ProjectsAnimation}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'exit'}
                    transition={{
                      ...ProjectsAnimation.transition,
                      delay: isVisible ? (getRandom(1, 5) / 10) + 1 : getRandom(1, 5) / 10,
                    }}
                  >
                    <ProjectCard
                      image={item.image}
                      content={item.content}
                      title={item.title}
                      id={item.id}
                    />
                  </motion.li>
                )
            }
    </>
  );
};

ProjectItem.propTypes = {
  isVisible: PropTypes.bool,
  i: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  item: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

ProjectItem.defaultProps = {
  isVisible: false,
};

export default ProjectItem;
