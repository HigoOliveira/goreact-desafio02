import styled from 'styled-components';

export const Repository = styled.ul`
  list-style: none;
  padding: 0 5px;

  li {
    display: flex;
    align-items: center;
    margin: 15px 0;
    cursor: pointer;

    img {
      width: 45px;
      height: 45px;
    }

    small {
      color: #ccc;
    }

    div {
      display: flex;
      margin-left: 6px;
      flex-direction: column;
      flex: 1;
    }

    i {
      color: #ccc;
      font-size: 17px;
    }
  }
`;
