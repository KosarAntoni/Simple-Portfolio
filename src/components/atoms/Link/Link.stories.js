import React from 'react';
import Link from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

export const Default = () => <Link href="https://google.com">Lorem</Link>;
export const WithColor = () => <Link href="https://www.google.com/" color="#a200e0">Lorem</Link>;
