import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Sidebar = styled.div`
  display: flex;
  width: 320px;
  background: #FFF;
  flex-direction: column;
  padding: 30px;

  form {
    display: flex;
    margin-bottom: 15px;

    input {
      height: 56px;
      font-size: 15px;
      background: #EEE;
      padding: 10px 20px;
      color: #666;
      border: none;
      width: 190px;
      margin-right: 14px;
      border-radius: 4px;

      border: ${props => (props.withError ? '2px solid #F00' : '0')};
    }
    button {
      background: #59EA9A;
      border: none;
      width: 56px;
      height: 56px;
      color: #fff;
      border-radius: 4px;

      i {
        font-size: 20px;
      }
      &:hover {
        background: #52D89F;
      }
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid #CCC;
    margin-bottom: 15px;
  }
`;
