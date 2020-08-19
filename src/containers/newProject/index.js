import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const NewProject = () => {
  return (
    <div>
      <h3>NewProject</h3>
    </div>
  );
};

NewProject.propTypes = {
  name: PropTypes.string,
};

export default NewProject;
