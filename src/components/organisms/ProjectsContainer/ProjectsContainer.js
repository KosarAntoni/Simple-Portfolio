import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  height: 100vh;
  overflow: hidden;
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

const ProjectsContainer = () => (
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
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
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
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            >
              <ProjectCard />
            </motion.li>
          )
        ))
      }
    </RightColumn>
  </Wrapper>
);

export default ProjectsContainer;
