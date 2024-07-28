import InputBox from "./components/InputBox";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <InputBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px;
`;

export default App;
