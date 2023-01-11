import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  StatisticsListItemStyled,
  StatisticsTotalStyled,
} from './Statistics.styled';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <>
      <Box
        as="ul"
        mb={4}
        display="flex"
        gridGap="10px"
        alignItems="center"
        justifyContent="space-between"
      >
        <StatisticsListItemStyled>
          Good: <span>{good}</span>
        </StatisticsListItemStyled>
        <StatisticsListItemStyled>
          Neutral: <span>{neutral}</span>
        </StatisticsListItemStyled>
        <StatisticsListItemStyled>
          Bad: <span>{bad}</span>
        </StatisticsListItemStyled>
      </Box>
      <Box
        as="ul"
        display="flex"
        gridGap="10px"
        alignItems="center"
        justifyContent="space-between"
      >
        <StatisticsTotalStyled>
          Total feedback: <span>{total}</span>
        </StatisticsTotalStyled>
        <StatisticsTotalStyled>
          Positive feedback: <span>{positivePercentage}%</span>
        </StatisticsTotalStyled>
      </Box>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
