import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { LeftSidebarContainer } from './style';

const LeftSidebar = () => {
  return (
    <LeftSidebarContainer>
      <h3></h3>
    </LeftSidebarContainer>
  );
};

LeftSidebar.propTypes = {
  name: PropTypes.string,
};

export default LeftSidebar;
