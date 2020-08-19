import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES

const BrandIdentity = () => {
  return (
    <div>
      <h3>BrandIdentity</h3>
    </div>
  );
};

BrandIdentity.propTypes = {
  name: PropTypes.string,
};

export default BrandIdentity;
