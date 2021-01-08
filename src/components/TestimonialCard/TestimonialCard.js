import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
	padding: 1rem;
	margin: 1rem;
	background: ${({ theme }) => theme.white};
	border-radius: 0.5rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledQuotes = styled.span`
  font-size: 2em;
  line-height: 0.8em;
  font-family: 'Passion One', cursive;
`;

const TestimonialCard = ({ title, text, date }) => (
  <StyledWrapper>
    <StyledHeadingWrapper>
      <Heading>
        {title}
      </Heading>
      <StyledQuotes>&quot;</StyledQuotes>
    </StyledHeadingWrapper>
    <Paragraph>{text}</Paragraph>
    <Heading as={Moment} format="DD MMMM YYYY">{date}</Heading>
  </StyledWrapper>
);

TestimonialCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TestimonialCard;
