import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import s from './Buttons.module.css';

const Buttons = ({ options, onLeaveFeedback }) => {
  const arrayKeysOptions = Object.keys(options);
  const ButtonsItem = item => {
    return (
      <button
        key={uuidv4()}
        type="button"
        className={s.buttons}
        onClick={() => onLeaveFeedback(`${item}`)}
      >
        {item}
      </button>
    );
  };

  return arrayKeysOptions.map(ButtonsItem);
};

Buttons.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func,
};

export default Buttons;
