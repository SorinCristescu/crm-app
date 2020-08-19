import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const RightSidebar = () => {
  return (
    <div>
      <h3>Header</h3>
    </div>
  );
};

RightSidebar.propTypes = {
  name: PropTypes.string,
};

export default RightSidebar;
