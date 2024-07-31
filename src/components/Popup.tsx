import { useEffect, useRef } from "react";
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
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  useEffect(() => {
    if (searchText) {
      const item = dummy.find((data) =>
        data.description.toLowerCase().includes(searchText.toLowerCase())
      );
      if (item && itemRefs.current[item.key]) {
        itemRefs.current[item.key]?.scrollIntoView({
          behavior: "auto",
          block: "center",
        });
      }
    }
  }, [searchText]);

  const groupedData = dummy.reduce((acc: Record<string, DataObj[]>, cur) => {
    if (!acc[cur.type]) acc[cur.type] = [];
    acc[cur.type].push(cur);
    return acc;
  }, {});

  if (inputLength < 1) return null;
  return (
    <Wrapper>
      {Object.keys(groupedData).map((type) => (
        <div key={type}>
          <Type>{type}</Type>
          {groupedData[type].map((data) => {
            const highlightedDescription = data.description.replace(
              new RegExp(`(${searchText})`, "gi"),
              (match) => `<strong>${match}</strong>`
            );
            return (
              <StyledLi
                key={data.key}
                ref={(el) => (itemRefs.current[data.key] = el)}
                dangerouslySetInnerHTML={{ __html: highlightedDescription }}
              ></StyledLi>
            );
          })}
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
