import React, { Component } from 'react';

import Section from './components/section';
import Buttons from './components/buttons';
import Statistics from './components/statistics';

class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Number(
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0),
    );
    return positiveFeedbackPercentage > 0 ? positiveFeedbackPercentage : 0;
  };

  render() {
    return (
      <section className="container">
        <Section title="Please leave feedback">
          <Buttons
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}

export default App;
