import React from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS

// STYLES
import { HeaderContainer, ImageWrapper, Avatar, UserName } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <h3></h3>
      <ImageWrapper>
        <img src="/assets/svg/logo_white_small.svg" alt="Vercel Logo" />
      </ImageWrapper>
      <nav>
        <div>
          <Avatar>
            <p>SC</p>
          </Avatar>
          <UserName>
            <p>Sorin Teodor Cristescu</p>
          </UserName>
        </div>

        <p>sign in</p>
      </nav>
      <ImageWrapper>
        <img src="/assets/svg/day.svg" alt="Vercel Logo" />
      </ImageWrapper>
    </HeaderContainer>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
