import { useState } from "react";
import styled from "styled-components";
import { keyItem, keyItems } from "./data";
function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [select, setSelect] = useState<string | null>(null);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const groupByType = (items: keyItem[]) => {
    return items.reduce<{ [key: string]: keyItem[] }>((acc, item) => {
      const { type } = item;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(item);
      return acc;
    }, {});
  };

  const groupedItems = groupByType(keyItems);

  return (
    <Container>
      <SearchContainer>
        <Search onChange={onChangeData} />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/search--v1.png"
          alt="search--v1"
        />
      </SearchContainer>

      {keyItems.length > 0 && keyword && (
        <AutoSearchContainer>
          {Object.keys(groupedItems).map((type) => (
            <div key={type}>
              <ul>
                <SearchType>{type}</SearchType>{" "}
                {groupedItems[type].map((i) => (
                  <AutoSearchData
                    key={i.key}
                    onClick={() => {
                      setSelect(i.key);
                    }}
                    isSelect={select === i.key}
                  >
                    {i.description
                      .toLowerCase()
                      .includes(keyword.toLowerCase()) ? (
                      <>
                        {i.description
                          .split(new RegExp(`(${keyword})`, "i"))
                          .map((part, index) =>
                            part.toLowerCase() === keyword.toLowerCase() ? (
                              <span key={index} style={{ fontWeight: "900" }}>
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                      </>
                    ) : (
                      i.description
                    )}
                  </AutoSearchData>
                ))}
              </ul>
            </div>
          ))}
        </AutoSearchContainer>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div``;
const SearchContainer = styled.div`
  display: flex;
`;

const Search = styled.input`
  width: 28rem;
  height: 3rem;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  border-radius: 1rem;
`;

const SearchType = styled.li`
  list-style-type: none;
  padding: 0.5rem;
  background-color: #000;
  color: #fff;
`;
const AutoSearchContainer = styled.div`
  width: 28rem;
  border: 2px solid #000;
  margin: 0;
  height: 8rem;
  overflow: scroll;
  ul {
    padding: 0;
    margin: 0;
  }
`;

const AutoSearchData = styled.li<{ isSelect: boolean }>`
  list-style-type: none;
  padding: 0.5rem;
  background: ${(props) => (props.isSelect ? "#1f5bcb" : "#fff")};
  color: ${(props) => (props.isSelect ? "#ffffff" : "#000000")};

  &:hover {
    cursor: pointer;
    background: #1f5bcb;
    color: white;
    transition: 0.5s;
  }
`;
