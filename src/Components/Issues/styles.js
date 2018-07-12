import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  i {
    color: #999;
  }
`;

export const IssueList = styled.ul`
  list-style: none;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px;

  li {
    display: flex;
    background: #fff;
    width: calc(100%/3 - 20px);
    max-width: calc(100%/3 - 20px);
    min-width: 280px;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 20px;
    margin: 10px;
    height: 110px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 64px;
      margin-right: 15px;
      flex-shrink: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      width: calc(100% - 84px);

      strong {
        overflow: hidden;
        min-width: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 2px;
      }
      small {
        color: #CCC;
        margin-bottom: 5px;
      }

      a {
        background: #B286D1;
        display: flex;
        align-self: flex-start;
        padding: 6px 12px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        border-radius: 4px;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        i {
          margin-right: 6px;
        }
      }
    }
  }
`;
