import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from 'components/Statistics';
import NotificationMessage from 'components/NotificationMessage';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} handleClick={handleClick} />
      </Section>

      {countTotalFeedback() === 0 ? (
        <NotificationMessage message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}

export default App;
