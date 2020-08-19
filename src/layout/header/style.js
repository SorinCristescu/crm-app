import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* border: 1px solid grey; */

  nav {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    p {
      color: grey;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 1px solid grey; */
  img {
    width: 40px;
    height: 40px;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 25px;

  /* border: 1px solid grey; */

  /* p {
    color: white;
    display: block;
    margin: auto;
  } */
`;

export const UserName = styled.p`
  color: grey;
  display: block;
  margin: 0 0 0 10px;
`;
