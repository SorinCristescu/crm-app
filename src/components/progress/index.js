import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { Container, ProgressBar, ColorBar } from './style';

const Progress = ({ stepName, level }) => {
  return (
    <Container>
      <p>
        {/* {stepName} */}
        BRIEF
      </p>
      <div className="wrapper">
        <ProgressBar>
          <ColorBar level={level} />
          <img src="/assets/svg/chat.svg" alt="Chat icon" />
        </ProgressBar>
      </div>
    </Container>
  );
};

Progress.propTypes = {
  name: PropTypes.string,
};

export default Progress;
