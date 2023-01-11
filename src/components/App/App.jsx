import FeedbackOptions from 'components/FeedbackOptions';
import React, { Component } from 'react';

import { Box } from 'components/Box';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaceFeedaback = button => {
    this.setState(prevState => ({ [button]: prevState[button] + 1 }));
  };

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);
    return feedbackValues.reduce(
      (acc, feedbackValue) => acc + feedbackValue,
      0
    );
  };

  countPositiveFeedbackPercentage = (goodFeedback, totalFeedback) => {
    if (!totalFeedback) {
      return 0;
    }
    return Math.round((goodFeedback * 100) / totalFeedback);
  };

  render() {
    const buttons = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

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
                options={buttons}
                onLeaveFeedback={this.increaceFeedaback}
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
                  positivePercentage={this.countPositiveFeedbackPercentage(
                    good,
                    total
                  )}
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
}
