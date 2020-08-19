import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { FooterContainer } from './style';
const Footer = () => {
  return (
    <FooterContainer>
      <small>Terms and privacy</small>
      <small>copyright 2020: All rights reserved</small>
    </FooterContainer>
  );
};

Footer.propTypes = {
  name: PropTypes.string,
};

export default Footer;
