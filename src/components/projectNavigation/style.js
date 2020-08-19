import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .line {
    width: 100px;
    height: 1px;
    background-color: lightgrey;
    margin: 2px 10px 0 10px;
  }

  p {
    color: lightgrey;
    font-weight: bold;
  }

  p:hover {
    color: black;
  }
`;
