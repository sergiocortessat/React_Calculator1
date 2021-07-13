/* eslint-disable quotes */
/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonName, clickHandler }) => {
  const buttonClass = buttonName === "="
    ? "hvr-sweep-to-right buttonEqual"
    : buttonName === "AC"
      ? "hvr-sweep-to-right"
      : "hvr-radial-in";
  return (
    <button
      type="button"
      value={buttonName}
      onClick={() => clickHandler(buttonName)}
      className={buttonClass}
      data-testid="button"
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  clickHandler: undefined,
};

export default Button;
