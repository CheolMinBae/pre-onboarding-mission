import styled from "styled-components";
import { dummy } from "../data";

interface DataObj {
  description: string;
  key: string;
  type: string;
}

interface PopupProps {
  inputLength: number;
  searchText: string;
}

function Popup({ inputLength, searchText }: PopupProps) {
  const groupedData = dummy.reduce((acc: Record<string, DataObj[]>, cur) => {
    if (!acc[cur.type]) acc[cur.type] = [];
    acc[cur.type].push(cur);
    return acc;
  }, {});

  if (inputLength < 1) return null;
  return (
    <Wrapper>
      {/* {dummy.map((data: DataObj) => {
        return <li>{data.description}</li>;
      })} */}
      {Object.keys(groupedData).map((type) => (
        <div key={type}>
          <Type>{type}</Type>
          {groupedData[type].map((data: DataObj) => (
            <StyledLi>{data.description}</StyledLi>
          ))}
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  height: 100px;
  border: 1px solid blue;
  overflow: scroll;
`;

const Type = styled.div`
  background-color: aliceblue;
  font-weight: 700;
  padding: 2px 7px;
`;

const StyledLi = styled.div`
  list-style-type: none;
  margin: 2px 7px;
`;

export default Popup;
