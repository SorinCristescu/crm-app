import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { Container } from './style';

const MainNav = ({ routes }) => {
  return (
    <Container>
      {routes &&
        routes.map((route) => (
          <div key={route.id} className="nav-link-container">
            <p>{route.name}</p>
          </div>
        ))}
    </Container>
  );
};

MainNav.propTypes = {
  name: PropTypes.string,
};

export default MainNav;
