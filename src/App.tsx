import styled from "styled-components";
import InputBox from "./components/InputBox";
import SearchBtn from "./components/SearchBtn";

function App() {
  return (
    <Wrapper>
      <InputBox />
      <SearchBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px;
`;

export default App;
