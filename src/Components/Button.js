/* eslint-disable quotes */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonName, handleClick }) => {
  const buttonClass = buttonName === "="
    ? "hvr-sweep-to-right buttonEqual"
    : buttonName === "AC"
      ? "hvr-sweep-to-right"
      : "hvr-radial-in";
  return (
    <button
      type="button"
      value={buttonName}
      onClick={() => handleClick(buttonName)}
      className={buttonClass}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: undefined,
};

export default Button;
