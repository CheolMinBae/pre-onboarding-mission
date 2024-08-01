import { ChangeEvent, useState } from "react";

export interface useInputProps {
  text: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeDescription: (description: string) => void;
}

const useInput = (): useInputProps => {
  const [text, setText] = useState("");
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleChangeDescription = (description: string) => {
    setText(description);
    setSelectedDescription(description);
  };

  return {
    text,
    handleChangeInput,
    handleChangeDescription,
  };
};

export default useInput;
