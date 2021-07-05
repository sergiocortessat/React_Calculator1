import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, handleClick }) => (
  <button
    type="button"
    value={buttonName}
    onClick={() => handleClick(buttonName)}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: undefined,
};

export default Button;
