import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const InputText = () => {
  return (
    <div>
      <h3>InputText</h3>
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
};

export default InputText;
