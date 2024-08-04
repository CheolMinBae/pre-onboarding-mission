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
    font-size: 24px;
    margin-bottom: 5px;
  }
  li {
    font-size: 20px;
  }
`;
