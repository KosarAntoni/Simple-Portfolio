import React from 'react';
import TestimonialCard from './TestimonialCard';

export default {
  title: 'Molecules/TestimonialCard',
  component: TestimonialCard,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor omen',
  date: '1976-04-19T12:59-0500',
};
