import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from 'components/Statistics';
import NotificationMessage from 'components/NotificationMessage';
import initialState from './data.json';

class App extends Component {
  state = initialState;

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100);
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
