import styled from "styled-components";
import { useState } from "react";
import InputBox from "./components/InputBox";
import SearchBtn from "./components/SearchBtn";
import Popup from "./components/Popup";

function App() {
  const [input, setInput] = useState("");

  return (
    <Wrapper>
      <InputBox setInput={setInput} />
      <SearchBtn />
      <Popup inputLength={input.length} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px;
`;

export default App;
