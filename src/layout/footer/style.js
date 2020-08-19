import styled from 'styled-components';

export const FooterContainer = styled.header`
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid grey; */

  small {
    width: 20%;
    color: grey;
    padding: 10px;
  }
`;
