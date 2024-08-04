import styled from 'styled-components';

export const SubTitleContainer = styled.div`
  width: 100%;
  margin: 4px 0;

  background-color: aliceblue;
  cursor: default;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: fit-content;

  color: #383838;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 40px;

  width: 250px;
  height: 300px;

  border: solid 1px #383838;
  border-radius: 6px;

  overflow-x: hidden;
  overflow-y: scroll;

  > div > * {
    padding: 6px 14px;

    box-sizing: border-box;
  }

  > div > ${SubTitleContainer}:nth-of-type(1) {
    margin-top: 0;
  }
`;
