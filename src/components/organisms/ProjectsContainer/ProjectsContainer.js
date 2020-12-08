import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ItemAnimation = {
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
};

const DummyItems = [
  <ProjectCard />,
  <ProjectCard />,
  <ProjectCard />,
  <ProjectCard />,
  <ProjectCard />,
  <ProjectCard />,
  <ProjectCard />,
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 700px;
  width: 100%;

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} { 
    position: fixed;
    right: 0;
    max-width: 410px;
    height: 100vh;
  }
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} { 
    max-width: 510px;
    right: auto;
    left: 58%;
  }
`;

const LeftColumn = styled.ul`
  position: absolute;
  right: calc(50% - 1rem);
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.ul`
  position: absolute;
  left: calc(50% - 1rem);
  display: flex;
  flex-direction: column;
`;

const ProjectsContainer = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
    <Wrapper>
      <LeftColumn>
        {
              DummyItems.map((item, i) => (
                !(i % 2) && (
                  <motion.li
                    custom={i}
                    variants={ItemAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      type: 'spring', stiffness: 100, damping: 15, delay: getRandom(1, 5) / 10,
                    }}
                  >
                    <ProjectCard />
                  </motion.li>
                )
              ))
            }
      </LeftColumn>
      <RightColumn>
        {
              DummyItems.map((item, i) => (
                !!(i % 2) && (
                  <motion.li
                    custom={i}
                    variants={ItemAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      type: 'spring', stiffness: 100, damping: 15, delay: getRandom(1, 5) / 10,
                    }}
                  >
                    <ProjectCard />
                  </motion.li>
                )
              ))
            }
      </RightColumn>
    </Wrapper>
    )}
  </AnimatePresence>
);

ProjectsContainer.propTypes = {
  isVisible: PropTypes.bool,
};

ProjectsContainer.defaultProps = {
  isVisible: false,
};

export default ProjectsContainer;
