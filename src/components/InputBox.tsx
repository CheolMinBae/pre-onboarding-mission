import { useCallback } from "react";
import styled from "styled-components";
import debounce from "../utils/debounce";

interface InputBoxProps {
  setInput: (input: string) => void;
}

function InputBox({ setInput }: InputBoxProps) {
  const debouncedSetInput = useCallback(
    debounce((value: string) => {
      setInput(value);
    }, 500),
    [setInput]
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetInput(e.target.value);
  };

  return <StyledInput onChange={handleInput}></StyledInput>;
}

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  font-size: 20px;
`;

export default InputBox;
