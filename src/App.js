import React, { useState } from 'react';

import Section from './components/section';
import Buttons from './components/buttons';
import Statistics from './components/statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    if (feedback === 'good') {
      setGood(prevState => {
        return prevState + 1;
      });
    }

    if (feedback === 'neutral') {
      setNeutral(prevState => {
        return prevState + 1;
      });
    }

    if (feedback === 'bad') {
      setBad(prevState => {
        return prevState + 1;
      });
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Number(
      ((good / countTotalFeedback()) * 100).toFixed(0),
    );
    return positiveFeedbackPercentage > 0 ? positiveFeedbackPercentage : 0;
  };

  return (
    <section className="container">
      <Section title="Please leave feedback">
        <Buttons
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </section>
  );
};

export default App;
