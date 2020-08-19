import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const Testing = () => {
  return (
    <div>
      <h3>Testing</h3>
    </div>
  );
};

Testing.propTypes = {
  name: PropTypes.string,
};

export default Testing;
