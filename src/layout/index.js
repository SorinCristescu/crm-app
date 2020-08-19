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

// COMPONENTS
import MainNav from '../components/mainNav';

const routes = [
  {
    id: 1,
    name: 'new project',
  },
  {
    id: 2,
    name: 'my projects',
  },
  {
    id: 3,
    name: 'my profile',
  },
  {
    id: 4,
    name: 'sign out',
  },
];

const Layout = (props) => {
  return (
    <LayoutContainer>
      <Header />
      <LeftSidebar>
        <MainNav routes={routes} />
      </LeftSidebar>
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
