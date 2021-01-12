import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const Wrapper = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border-radius: 0.5rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.fontSize.xs};
`;

const Quotes = styled.span`
  font-size: 2em;
  line-height: 0.8em;
  font-family: 'Passion One', cursive;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: ${({ theme }) => theme.fontSize.xs};
`;

const TestimonialCard = ({ title, text, date }) => (
  <Wrapper>
    <HeadingWrapper>
      <Heading>
        {title}
      </Heading>
      <Quotes>&quot;</Quotes>
    </HeadingWrapper>
    <StyledParagraph>{text}</StyledParagraph>
    <Heading as={Moment} format="DD MMMM YYYY">{date}</Heading>
  </Wrapper>
);

TestimonialCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TestimonialCard;
