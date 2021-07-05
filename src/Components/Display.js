import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display-box">
    <p>
      {result}
    </p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

// Set a default prop to a value
Display.defaultProps = {
  result: '0',
};

export default Display;
