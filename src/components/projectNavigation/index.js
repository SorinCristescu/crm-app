import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { Container } from './style';

const ProjectNavigation = () => {
  return (
    <Container>
      <p>brief</p>
      <div className="line"></div>
      <p>conceptual ideation</p>
      <div className="line"></div>
      <p>technical ideation</p>
      <div className="line"></div>
      <p>proposal</p>
      <div className="line"></div>
      <p>contract</p>
    </Container>
  );
};

ProjectNavigation.propTypes = {
  name: PropTypes.string,
};

export default ProjectNavigation;
