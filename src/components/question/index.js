import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const Question = () => {
  return (
    <div>
      <h3>Question</h3>
    </div>
  );
};

Question.propTypes = {
  name: PropTypes.string,
};

export default Question;
