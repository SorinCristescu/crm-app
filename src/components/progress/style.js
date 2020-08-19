import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ColorBar = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
