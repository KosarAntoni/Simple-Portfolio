import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
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

const CloseButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-image: url("data:image/svg+xml,%3Csvg 
  aria-hidden='true' 
  focusable='false' 
  data-prefix='fas' 
  data-icon='times' 
  xmlns='http://www.w3.org/2000/svg' 
  viewBox='0 0 352 512'%3E%3Cpath 
  fill='${({ theme }) => theme.black}' 
  d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'%3E%3C/path%3E%3C/svg%3E");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
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
