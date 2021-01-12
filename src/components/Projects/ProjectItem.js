import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from '../ProjectCard';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animation = {
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

const Wrapper = styled(motion.li)`
  margin: 0.5rem;

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} {
    margin: 1rem;
  }
`;

const ProjectItem = ({ i, item, isVisible }) => {
  const match = useRouteMatch('/:id');

  return (
    <>
      {
                match && match.params.id === item.id.toString() ? (
                  <Wrapper>
                    <ProjectCard
                      image={item.image}
                      content={item.content}
                      title={item.title}
                      id={item.id}
                      isSelected
                    />
                  </Wrapper>
                ) : (
                  <Wrapper
                    custom={i}
                    variants={animation}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'exit'}
                    transition={{
                      ...animation.transition,
                      delay: isVisible ? (getRandom(1, 5) / 10) + 1 : getRandom(1, 5) / 10,
                    }}
                  >
                    <ProjectCard
                      image={item.image}
                      content={item.content}
                      title={item.title}
                      id={item.id}
                    />
                  </Wrapper>
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
