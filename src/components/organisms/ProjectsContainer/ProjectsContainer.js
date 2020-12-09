import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import TestimonialCard from '../../molecules/TestimonialCard/TestimonialCard';

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
};

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
};

const DummyProjects = [
  {
    image: 'https://picsum.photos/id/1020/400/300',
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  },
  {
    image: 'https://picsum.photos/id/102/400/300',
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  },
  {
    image: 'https://picsum.photos/id/1026/400/300',
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  },
  {
    image: 'https://picsum.photos/id/1042/400/300',
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  },
  {
    image: 'https://picsum.photos/id/1047/400/300',
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  },
  {
    image: 'https://picsum.photos/id/1058/400/300',
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  },
  {
    image: 'https://picsum.photos/id/1080/400/300',
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  },
];

const DummyTestimonials = [
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Accusamus aliquam',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Accusamus aliquam',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
    date: '1976-04-19T12:59-0500',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
      + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
    date: '1976-04-19T12:59-0500',
  },
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
    top: 0;
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

const LeftProjectsColumn = styled.ul`
  position: absolute;
  right: calc(50% - 1rem);
  display: flex;
  flex-direction: column;
`;

const RightProjectsColumn = styled.ul`
  position: absolute;
  left: calc(50% - 1rem);
  display: flex;
  flex-direction: column;
`;

const LeftColumn = styled.ul`
  position: absolute;
  right: 50%;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.ul`
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: column;
`;

const ProjectsContainer = ({ currentSection }) => (
  <AnimatePresence exitBeforeEnter>
    {currentSection === 'projects' && (
    <Wrapper key="projects">
      <LeftProjectsColumn>
        {
              DummyProjects.map((item, i) => (
                !(i % 2) && (
                  <motion.li
                    custom={i}
                    variants={ProjectsAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      type: 'spring', stiffness: 100, damping: 15, delay: getRandom(1, 5) / 10,
                    }}
                  >
                    <ProjectCard image={item.image} content={item.content} title={item.title} />
                  </motion.li>
                )
              ))
            }
      </LeftProjectsColumn>
      <RightProjectsColumn>
        {
              DummyProjects.map((item, i) => (
                !!(i % 2) && (
                  <motion.li
                    custom={i}
                    variants={ProjectsAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      type: 'spring', stiffness: 100, damping: 15, delay: getRandom(1, 5) / 10,
                    }}
                  >
                    <ProjectCard image={item.image} content={item.content} title={item.title} />
                  </motion.li>
                )
              ))
            }
      </RightProjectsColumn>
    </Wrapper>
    )}
    {currentSection === 'testimonials' && (
    <Wrapper key="testimonials">
      <LeftColumn>
        {
              DummyTestimonials.map((item, i) => (
                !(i % 2) && (
                  <motion.li
                    custom={i}
                    variants={TestimonialsAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      type: 'spring', stiffness: 300, damping: 30, delay: i / 20,
                    }}
                  >
                    <TestimonialCard date={item.date} text={item.text} title={item.title} />
                  </motion.li>
                )
              ))
            }
      </LeftColumn>
      <RightColumn>
        {
              DummyTestimonials.map((item, i) => (
                !!(i % 2) && (
                  <motion.li
                    custom={i}
                    variants={TestimonialsAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      type: 'spring', stiffness: 300, damping: 30, delay: i / 20,
                    }}
                  >
                    <TestimonialCard date={item.date} text={item.text} title={item.title} />
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
  currentSection: PropTypes.oneOf(['projects', 'testimonials']).isRequired,
};

export default ProjectsContainer;
