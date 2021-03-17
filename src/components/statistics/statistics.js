import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../notification';

import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="No feedback given" />;
  }
  return (
    <section>
      <p className={s.reviews}>
        Good: <span>{good}</span>
      </p>
      <p className={s.reviews}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={s.reviews}>
        Bad: <span>{bad}</span>
      </p>
      <p className={s.reviews}>
        Total: <span>{total}</span>
      </p>
      <p className={s.reviews}>
        Positive feedback: <span>{positivePercentage} %</span>
      </p>
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
