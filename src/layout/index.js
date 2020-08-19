import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import Header from '../layout/header';
import LeftSidebar from '../layout/leftSidebar';
import RightSidebar from '../layout/rightSidebar';
import Footer from '../layout/footer';

// STYLES
import { LayoutContainer } from './style';

const Layout = (props) => {
  return (
    <LayoutContainer>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <div>{props.children}</div>
      <Footer />
    </LayoutContainer>
  );
};

Layout.propTypes = {
  name: PropTypes.string,
};

export default Layout;
