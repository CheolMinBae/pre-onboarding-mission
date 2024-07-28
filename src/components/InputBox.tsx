import styled from "styled-components";

interface InputBoxProps {
  setInput: (input: string) => void;
}

function InputBox({ setInput }: InputBoxProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return <StyledInput onChange={handleInput}></StyledInput>;
}

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  font-size: 20px;
`;

export default InputBox;
