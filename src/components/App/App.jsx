import React, {useState, useMemo} from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import { Box } from 'components/Box';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import { AppStyled } from './App.styled';

export const App = () => {
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  const feedback = useMemo(() => {
    return { good, neutral, bad };
  }, [good, neutral, bad]);

  const feedbackBtn = Object.keys(feedback);

  const countTotalFeedback = () => {
    const feedbackValues = Object.values(feedback);
    return feedbackValues.reduce(
      (acc, feedbackValue) => acc + feedbackValue,
      0
    );
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    return Math.round((good * 100) / total);
  };

  const incraceOfFeedback = button => {
    switch (button) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
        
        case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

        case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

        default:
          break;
    }
  };

    return (
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontSize="xxl"
        color="primary"
      >
        <AppStyled>
          <Box color="third" mt="4" mb="4">
            <Section title="Please, leave Your feedback">
              <FeedbackOptions
                options={feedbackBtn}
                onLeaveFeedback={incraceOfFeedback}
              />
            </Section>
          </Box>
          <Box bg="footerBG" color="secondary" height="124px">
            <Section title="Statistics">
              {total ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={countPositiveFeedbackPercentage()}
                />
              ) : (
                <Notification message="There is no feedback" />
              )}
            </Section>
          </Box>
        </AppStyled>
      </Box>
    );
  }
