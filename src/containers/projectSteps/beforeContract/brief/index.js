import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const Brief = () => {
  return (
    <div>
      <h3>Brief</h3>
    </div>
  );
};

Brief.propTypes = {
  name: PropTypes.string,
};

export default Brief;
