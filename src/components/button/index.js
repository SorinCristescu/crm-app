import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const ButtonPrimary = () => {
  return (
    <div>
      <h3>ButtonPrimary</h3>
    </div>
  );
};

ButtonPrimary.propTypes = {
  name: PropTypes.string,
};

export default ButtonPrimary;
