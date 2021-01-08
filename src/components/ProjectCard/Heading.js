import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../assets/times-solid.svg';
import { animation } from './animation';
import Heading from '../Heading/Heading';

const HeadingWrapper = styled(motion.div)`
  position: absolute;
  top: ${({ isSelected }) => (isSelected ? '0' : '-100%')};
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0')};
  transition: ${({ isSelected }) => (isSelected ? 'all 0.5s ease 0.3s' : 'top 0s opacity 0.3s')};
  z-index: 4;
`;

const StyledHeading = styled(Heading)`
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.white};
  margin: 0;
`;

const CloseButton = styled(motion.a)`
  width: 3rem;
  height: 3rem;
  background: url("${CloseIcon}") no-repeat center;
  background-size: 40%;
  color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.white};
  transition: box-shadow 0.2s, transform 0.3s;
  
  :hover {
      box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
      transform: scale(1.1);
  }
  
  :focus {
    outline: none;
  }
`;

const CardHeading = ({ isSelected, handleClose, data }) => (
  <HeadingWrapper
    initial={false}
    isSelected={isSelected}
    layout
    transition={animation}
  >
    <StyledHeading>{data}</StyledHeading>
    <CloseButton
      onClick={handleClose}
      isSelected={isSelected}
    >
      Close
    </CloseButton>
  </HeadingWrapper>
);

CardHeading.propTypes = {
  isSelected: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};

CardHeading.defaultProps = {
  isSelected: false,
};

export default CardHeading;
