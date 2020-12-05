import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { animation } from './animation';

const TextWrapper = styled(motion.div)`
  padding: 32rem 2rem 2rem;
  z-index: 0;
`;

const Content = () => (
  <TextWrapper
    layout
    transition={animation}
  >
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
      atque doloribus eos facilis laudantium libero natus odit quas voluptate?
    </Paragraph>
  </TextWrapper>
);

export default Content;
