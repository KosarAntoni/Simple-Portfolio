import React from 'react';
import ProjectCard from './index';

export default {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://picsum.photos/seed/picsum/400/300',
  title: 'Lorem ipsum',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
    + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
};
