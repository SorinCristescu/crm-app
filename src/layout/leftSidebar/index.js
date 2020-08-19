import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { LeftSidebarContainer } from './style';

const LeftSidebar = ({ children }) => {
  return <LeftSidebarContainer>{children}</LeftSidebarContainer>;
};

LeftSidebar.propTypes = {
  name: PropTypes.string,
};

export default LeftSidebar;
