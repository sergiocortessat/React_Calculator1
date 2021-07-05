import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <input className="input text-end" defaultValue={result} />
);

Display.propTypes = {
  result: PropTypes.string,
};

// Set a default prop to a value
Display.defaultProps = {
  result: '0',
};

export default Display;
