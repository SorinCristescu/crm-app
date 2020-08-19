import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const Header = () => {
  return (
    <div>
      <h3>Header</h3>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
