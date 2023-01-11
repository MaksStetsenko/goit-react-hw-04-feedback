import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { FeedbackButtonStyled } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" gridGap="10px" justifyContent="space-between">
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackButtonStyled
              buttonBG={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButtonStyled>
          </li>
        );
      })}
    </Box>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ),
  onLeaveFeedback: PropTypes.func,
}