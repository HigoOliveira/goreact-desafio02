import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  height: 100px;
  background: #fff;
  padding: 10px 20px;
  justify-content: space-between;

  img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
  }

  & > div {
    display: flex;
    align-items: center;

    select {
      width: 150px;
      padding: 10px;
      padding-left: 15px;
      border-radius: 3px;
      border: 1px solid #ccc;
      background: #fff;
      font-weight: 700;
      line-height: 15px;
      color: #666;
      -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }

    span {
      position: relative;
    }
    span:after {
      content:"\f107";
      font-family: FontAwesome;
      color: #666;
      font-weight: bold;
      padding: 12px 8px;
      position: absolute; right: 15px; top: 0;
      z-index: 1;
      text-align: center;
      width: 10%;
      height: 100%;
      pointer-events: none;
      box-sizing: border-box;
      }
  }

  div > div {
    display: flex;
    flex-direction: column;

    small {
      margin-top: 5px;
      color: #ccc;
    }
  }
`;
