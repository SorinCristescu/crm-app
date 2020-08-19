import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const Card = () => {
  return (
    <div>
      <h3>Card</h3>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
