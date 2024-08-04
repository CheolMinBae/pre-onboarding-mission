import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  svg {
    font-size: 30px;
  }
  .searchBox {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
  font-size: 30px;
`;

export const DataListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  ul {
    width: 90%;
    margin-bottom: 5px;
    font-size: 20px;
    div {
      background-color: #3496a7;
      padding: 5px;
    }
  }
  li {
    font-size: 20px;
  }

  height: 200px;
  overflow-y: scroll;
`;
