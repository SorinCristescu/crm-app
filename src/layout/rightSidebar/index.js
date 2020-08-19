import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { RightSidebarContainer } from './style';

const RightSidebar = () => {
  return (
    <RightSidebarContainer>
      <h3></h3>
    </RightSidebarContainer>
  );
};

RightSidebar.propTypes = {
  name: PropTypes.string,
};

export default RightSidebar;
