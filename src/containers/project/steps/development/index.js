import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const Development = () => {
  return (
    <div>
      <h3>Development</h3>
    </div>
  );
};

Development.propTypes = {
  name: PropTypes.string,
};

export default Development;
