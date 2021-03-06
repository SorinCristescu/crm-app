import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { Container } from './style';

const Question = ({ name, description }) => {
  return (
    <Container>
      <h5>{name}</h5>
      <p>{description}</p>
    </Container>
  );
};

Question.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Question;
