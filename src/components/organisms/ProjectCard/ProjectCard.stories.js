import React from 'react';
import ProjectCard from './ProjectCard';

export default {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSelected: false,
};
