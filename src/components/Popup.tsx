import styled from "styled-components";
import { dummy } from "../data";

interface DataObj {
  description: string;
  key: string;
  type: string;
}

interface PopupProps {
  inputLength: number;
}

function Popup({ inputLength }: PopupProps) {
  if (inputLength < 1) return null;
  return (
    <Wrapper>
      {dummy.map((data: DataObj) => {
        return <li>{data.description}</li>;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  height: 100px;
  border: 1px solid blue;
  overflow: scroll;
`;

export default Popup;
